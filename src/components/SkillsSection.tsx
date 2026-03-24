import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind", "Express", "Node.js", "Flask"],
  },
  {
    title: "AI / ML",
    skills: ["Python", "NumPy", "Pandas", "Keras", "Scikit-learn"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Vercel", "Render", "MongoDB"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-display tracking-widest uppercase text-primary mb-4">
          Tech Stack
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
          What Suryan <span className="text-gradient">brings</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          Technologies I actively use and explore.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 hover:glow-border transition-shadow"
          >
            <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-display font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
