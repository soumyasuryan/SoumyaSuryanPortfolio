import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/soumyasuryan/", icon: <Github size={16} /> },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/soumya-suryan-62bb5a380", icon: <Linkedin size={16} /> },
  { label: "Instagram", href: "https://www.instagram.com/soumya_suryan_/", icon: <Instagram size={16} /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/20 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a href="#" className="font-display font-bold text-xl text-foreground flex items-center gap-2 group">
          Soumya<span className="text-primary transition-transform duration-300 group-hover:scale-125">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-6 border-l border-white/10 pl-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white hover:scale-110 active:scale-95"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-background/60 backdrop-blur-2xl md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10 mt-2">
                {socialLinks.map((s) => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
