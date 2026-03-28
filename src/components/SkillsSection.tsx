// import { motion } from "framer-motion";
import { motion, Variants } from "framer-motion";
const skillCategories = [
  {
    title: "Web Development",
    accent: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.15)",
    borderAccent: "group-hover:border-blue-500/40",
    index: "01",
    skills: [
       "React", "Next.js", "Tailwind",
      "Express", "Node.js", "Flask", "JWT-Auth", "bcrypt",
    ],
  },
  {
    title: "AIML & Data Science",
    accent: "from-violet-500 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.15)",
    borderAccent: "group-hover:border-violet-500/40",
    index: "02",
    skills: [
      "Python", "NumPy", "Pandas", "Matplotlib",
      "Seaborn", "Keras", "Scikit-learn",
    ],
  },
  {
    title: "Cloud & Deployment",
    accent: "from-orange-500 to-amber-400",
    glowColor: "rgba(249,115,22,0.15)",
    borderAccent: "group-hover:border-orange-500/40",
    index: "04",
    skills: [ "Amazon Web Services","Vercel", "Render", "Docker", ],
  },
  {
    title: "Tools & Databases",
    accent: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16,185,129,0.15)",
    borderAccent: "group-hover:border-emerald-500/40",
    index: "03",
    skills: ["Git", "GitHub", "MongoDB", "MySQL", "PostgreSQL"],
  },
  
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.045, ease: "easeOut" },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary/60" />
          <p className="text-sm font-display tracking-widest uppercase text-primary">
            Tech Stack
          </p>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-5 leading-tight">
          What Suryan{" "}
          <span className="text-gradient relative">
            brings
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-primary to-primary/0 rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </span>
        </h2>
        <p className="text-muted-foreground text-base max-w-lg">
          Technologies I actively use and explore — from frontend interfaces to intelligent systems.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl"
            style={
              {
                "--glow": cat.glowColor,
              } as React.CSSProperties
            }
          >
            {/* Glow blob on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 0% 0%, ${cat.glowColor} 0%, transparent 70%)` }}
            />

            {/* Top accent bar */}
            <div className={`h-[3px] w-full bg-gradient-to-r ${cat.accent}`} />

            <div className="p-7">
              {/* Card header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className={`text-xs font-display font-bold tracking-widest bg-gradient-to-r ${cat.accent} bg-clip-text text-transparent mb-1`}>
                    {cat.index}
                  </p>
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {cat.title}
                  </h3>
                </div>
                {/* Decorative circle */}
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${cat.accent} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={pillVariants}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`
                      relative text-xs font-display font-semibold
                      px-3 py-1.5 rounded-lg cursor-default select-none
                      bg-secondary text-secondary-foreground
                      border border-border/60
                      transition-colors duration-200
                      group-hover:border-border
                      hover:bg-card hover:shadow-md
                    `}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill count */}
              <p className="mt-5 text-[11px] text-muted-foreground/50 font-display tracking-wide">
                {cat.skills.length} technologies
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
