import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  
   {
    title: "Delhi's Heat Sheild",
    description:
      "Delhi HeatShield is a real-time heat vulnerability monitoring platform that maps risk across Delhi's 280+ wards using climate data, satellite imagery, and demographic indicators — identifying who is most at risk before extreme heat turns fatal.",
    tags: ["Vite", "React","Flask","Tailwind","HttpOnly Cookies","PostgreSQL"],
    visit: "https://eduvault-79fv.onrender.com/",
    code: "https://github.com/soumyasuryan",
  },
  {
    title: "StriRise",
    description:
      "AI-powered application to provide roadmap, suggestions and a marketplace for women seeking self-dependence or starting a business.",
    tags: ["React", "Next.js", "Tailwind", "Flask", "Pandas", "NumPy"],
    visit: "https://stri-rise.vercel.app/",
    code: "https://github.com/soumyasuryan",
  },
  {
    title: "KrishiGram",
    description:
      "An AI/ML powered app which helps recommend suitable crops, fertilizers, detect pests via image, provide weather alerts and market prices.",
    tags: ["React", "Next.js", "Flask", "NumPy", "Pandas", "Keras"],
    visit: "https://krishi-gram.vercel.app/",
    code: "https://github.com/soumyasuryan",
  },
 
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-display tracking-widest uppercase text-primary mb-4">
          Portfolio
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-12">
          Suryan's <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group bg-card border border-border rounded-xl p-6 flex flex-col hover:glow-border transition-shadow"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-gradient transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] font-display font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                <ExternalLink size={13} /> Visit
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={13} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
