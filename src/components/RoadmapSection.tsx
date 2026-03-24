import { motion } from "framer-motion";

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
    <section id="roadmap" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-display tracking-widest uppercase text-primary mb-4">
          Journey
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-12">
          Suryan's <span className="text-gradient">Roadmap</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 glow-border z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs font-display tracking-wider text-primary">{m.year}</span>
                <h3 className="font-display font-semibold text-lg text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
