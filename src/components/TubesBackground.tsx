import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

const randomColors = (count: number) => {
  return new Array(count).fill(0).map(() => {
    const hue = Math.floor(Math.random() * 360);
    // Use rich, slightly deeper colors (45% lightness) so they don't wash out text
    return `hsl(${hue}, 85%, 45%)`;
  });
};

export default function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // @ts-ignore
        const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981"], // Modern, clean tailwind 500 palette
            lights: {
              intensity: 150, // Restored some intensity for brighter neon glow
              colors: ["#60a5fa", "#a78bfa", "#f472b6", "#34d399"]
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    const handlePointerDown = (event: PointerEvent) => {
      if (!enableClickInteraction || !tubesRef.current) return;
      const target = event.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) return;

      const colors = randomColors(5);
      const lightsColors = randomColors(4);
      
      tubesRef.current.tubes.setColors(colors);
      tubesRef.current.tubes.setLightsColors(lightsColors);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current && e.target !== canvasRef.current) {
        canvasRef.current.dispatchEvent(new MouseEvent('mousemove', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true
        }));
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (canvasRef.current && e.target !== canvasRef.current && e.touches.length > 0) {
        // Constructing a TouchEvent programmatically can be tricky across browsers,
        // so we can simulate the mousemove which threejs-components usually falls back to,
        // or just dispatch touchmove if supported.
        try {
          const touch = e.touches[0];
          canvasRef.current.dispatchEvent(new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY,
            bubbles: true
          }));
        } catch(err) {}
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      mounted = false;
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (tubesRef.current && tubesRef.current.destroy) {
        tubesRef.current.destroy();
      }
    };
  }, [enableClickInteraction]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Original beautiful background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_33%_18%,rgba(255,212,74,0.18),transparent_20%),radial-gradient(circle_at_62%_24%,rgba(80,120,255,0.18),transparent_24%),linear-gradient(180deg,#020202,#03050d_62%,#04060b)]" />
      <div className="absolute left-1/2 top-[37%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-[120px]" />
      
      <canvas 
        ref={canvasRef} 
        className={cn("pointer-events-auto absolute inset-0 block h-full w-full transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")}
        style={{ touchAction: 'none' }}
      />
      
      {/* Very subtle blur to keep text readable without heavily darkening the neon effect */}
      <div className="pointer-events-none absolute inset-0 bg-background/5 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content Overlay if children are passed */}
      {children && (
        <div className="relative z-10 w-full h-full pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}
