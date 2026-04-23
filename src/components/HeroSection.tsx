import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-32 pt-32 md:pb-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center md:px-12">
        
        {/* Animated Glassmorphism Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Web Developer & AI Enthusiast
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 max-w-5xl font-display text-5xl font-bold leading-[1.1] tracking-tighter text-white drop-shadow-2xl sm:text-6xl md:text-8xl"
        >
          The man with a{" "}
          <span className="relative inline-block animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] bg-gradient-to-r from-primary via-amber-200 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
            vision
          </span>
          <br />
          <span className="text-4xl font-medium text-white/80 sm:text-5xl md:text-7xl">
            who never abandons the task given.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
        >
          Crafting performant, modern web apps with the latest technologies.
          I explore tech the way others explore maps — one unknown at a time.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-display font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            {/* Button Glow Effect */}
            <span className="absolute inset-0 rounded-full bg-primary opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-80"></span>
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          
          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-display font-medium text-white backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 active:scale-95"
          >
            About Me
          </a>
        </motion.div>

        {/* Modern Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <a 
            href="#about" 
            className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur-sm transition-colors hover:bg-white/10"
            aria-label="Scroll to About section"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-white/80"
            />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
