import { motion, Variants } from "framer-motion";
import { Zap } from "lucide-react";

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
    index: "03",
    skills: [ "Amazon Web Services","Vercel", "Render", "Docker", ],
  },
  {
    title: "Tools & Databases",
    accent: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16,185,129,0.15)",
    borderAccent: "group-hover:border-emerald-500/40",
    index: "04",
    skills: ["Git", "GitHub", "MongoDB", "MySQL", "PostgreSQL"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
          <Zap className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Tech Stack
          </p>
        </div>
        
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight text-white drop-shadow-xl">
          What Suryan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">brings</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl font-light">
          Technologies I actively use and explore — from frontend interfaces to intelligent systems.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Ambient Background Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: `radial-gradient(circle at 80% 0%, ${cat.glowColor} 0%, transparent 60%)` }}
            />

            <div className="relative z-10">
              {/* Card header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className={`text-xs font-display font-bold tracking-widest bg-gradient-to-r ${cat.accent} bg-clip-text text-transparent mb-2 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {cat.index}
                  </p>
                  <h3 className="font-display font-bold text-white text-2xl tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                {/* Decorative circle */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110`} />
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={pillVariants}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className={`
                      relative text-xs font-semibold tracking-wide
                      px-4 py-2 rounded-full cursor-default select-none
                      bg-white/5 text-white/80 backdrop-blur-sm
                      border border-white/10
                      transition-all duration-300
                      hover:text-white hover:bg-white/10 hover:border-white/20
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                    `}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill count */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-white/40 font-semibold tracking-widest uppercase">
                  {cat.skills.length} technologies
                </p>
                <div className={`h-[2px] w-12 bg-gradient-to-r ${cat.accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
