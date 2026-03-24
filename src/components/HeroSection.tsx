import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-display tracking-widest uppercase text-primary mb-6"
        >
          Web Developer · AI Enthusiast
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          The man with a{" "}
          <span className="text-gradient">vision</span>
          <br />
          who never gives up.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Crafting performant, modern web apps with the latest technologies.
          I explore tech the way others explore maps — one unknown at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-border text-foreground font-display font-medium px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            About Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <a href="#about" className="inline-block text-muted-foreground animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
