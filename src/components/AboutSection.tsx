import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
          <User className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            About
          </p>
        </div>
        
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-12 tracking-tight text-white drop-shadow-xl">
          Get to know <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Suryan</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                I am an enthusiastic learner with a strong passion for exploring new technologies
                while continuously mastering existing ones. My journey began with programming,
                which naturally led me into web development.
              </p>
              <p>
                To build intelligent systems and analyze data effectively, I expanded my skill set
                into AI and Machine Learning. To complete the development lifecycle, I further
                explored cloud technologies for deployment.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                What drives me forward is a persistent spark of curiosity and resilience. Setbacks
                don't hold me back — instead, they push me to adapt, improve, and move forward with
                greater clarity.
              </p>
              <p>
                This mindset gives me a clear vision and the determination to see every task through
                to completion, delivering not just code, but highly polished experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
