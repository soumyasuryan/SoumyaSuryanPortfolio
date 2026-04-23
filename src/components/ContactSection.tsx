import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, MessageSquareHeart } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=soumyasuryan86@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/soumyasuryan/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/soumya-suryan-62bb5a380" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/soumya_suryan_/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-8">
          <MessageSquareHeart className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Get In Touch
          </p>
        </div>
        
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight text-white drop-shadow-xl leading-[1.1]">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">meaningful</span> 🚀
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, opportunities, or just having a chat about tech.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <l.icon size={16} />
              </div>
              <span className="font-semibold text-sm text-white/80 group-hover:text-white transition-colors">{l.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-semibold tracking-wider uppercase">
        <p>© {new Date().getFullYear()} Soumya Suryan.</p>
        <p className="mt-2 md:mt-0">Built with <span className="text-primary">passion</span>.</p>
      </div>
    </section>
  );
};

export default ContactSection;
