import { motion } from "framer-motion";
import { Route } from "lucide-react";

const milestones = [
  { year: "2022–23", title: "Secondary Schooling", place: "Jindal Public School" },
  { year: "2024–25", title: "Senior Secondary", place: "Jindal Public School" },
  { year: "2025–29", title: "University", place: "GGSIPU (CSE – AIML)" },
  { year: "2024–29", title: "Certifications & Projects", place: "Latest tech stacks" },
  { year: "Upcoming", title: "Internships", place: "Industry exposure" },
  { year: "Future", title: "Your Favourite Developer", place: "Expert-level growth" },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding max-w-5xl mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start text-center md:text-left mb-16"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
          <Route className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Journey
          </p>
        </div>
        
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow-xl">
          Suryan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Roadmap</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Glowing Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-[1px]" />

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center w-full gap-8 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Glowing Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-[7px] md:-translate-x-[7px] z-10 shadow-[0_0_15px_rgba(251,191,36,0.6)] border-2 border-background" />

              {/* Content Card */}
              <div className={`flex-1 md:flex-none ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 text-xs font-bold tracking-wider text-primary border border-primary/20">
                      {m.year}
                    </span>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">{m.title}</h3>
                    <p className="text-sm font-light text-white/60">{m.place}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
