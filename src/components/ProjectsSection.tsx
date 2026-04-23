import { motion } from "framer-motion";
import { ExternalLink, Github, FolderHeart } from "lucide-react";

const projects = [
  {
    title: "NutriPilot",
    description:
      "NutriPilot is an AI-powered budget fitness coach that analyzes Indian meals, explains diet mistakes, and suggests affordable improvements to help users achieve their fitness goals.",
    tags: ["React", "Next.js", "Express", "Groq", "Tailwind","Jwt Auth"],
    visit: "https://nutri-pilot-six.vercel.app/",
    code: "https://github.com/soumyasuryan",
  },
  {
    title: "Delhi's Heat Sheild",
    description:
      "Delhi HeatShield is a real-time heat vulnerability monitoring platform that maps risk across Delhi's 280+ wards using climate data, satellite imagery, and demographic indicators — identifying who is most at risk before extreme heat turns fatal.",
    tags: ["Vite", "React","Flask","Tailwind","PostgreSQL"],
    visit: "https://delhi-heat-sheild.vercel.app/",
    code: "https://github.com/soumyasuryan",
  },
  {
    title: "StriRise",
    description:
      "AI-powered application to provide roadmap, suggestions and a marketplace for women seeking self-dependence or starting a business.",
    tags: ["React", "Next.js", "Tailwind", "Flask", "Pandas"],
    visit: "https://stri-rise.vercel.app/",
    code: "https://github.com/soumyasuryan",
  },
  
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start text-center md:text-left mb-16"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
          <FolderHeart className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Portfolio
          </p>
        </div>
        
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow-xl">
          Suryan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-white/10"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-amber-200 transition-all duration-300">
                {p.title}
              </h3>
              <p className="text-sm font-light text-white/70 leading-relaxed flex-1 mb-6">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-semibold tracking-wider text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                <a
                  href={p.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink size={14} /> Visit
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
