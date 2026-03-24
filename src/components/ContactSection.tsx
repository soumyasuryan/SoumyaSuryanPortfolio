import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:soumyasuryan86@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/soumyasuryan/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/soumya-suryan-62bb5a380" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/soumya_suryan_/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-display tracking-widest uppercase text-primary mb-4">
          Get In Touch
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
          Let's build something <span className="text-gradient">meaningful</span> 🚀
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          I'm always open to discussing new projects, opportunities, or just having a chat about tech.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-medium text-sm px-5 py-3 rounded-lg hover:bg-muted transition-colors"
            >
              <l.icon size={16} />
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-24 pt-8 border-t border-border text-xs text-muted-foreground font-display">
        © {new Date().getFullYear()} Soumya Suryan. Built with passion.
      </div>
    </section>
  );
};

export default ContactSection;
