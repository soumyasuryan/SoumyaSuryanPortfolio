import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-display tracking-widest uppercase text-primary mb-4">
          About
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">
          About <span className="text-gradient">Suryan</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I am an enthusiastic learner with a strong passion for exploring new technologies
              while continuously mastering existing ones. My journey began with programming,
              which naturally led me into web development.
            </p>
            <p>
              To build intelligent systems and analyze data effectively, I expanded my skill set
              into AI and Machine Learning. To complete the development lifecycle, I further
              explored cloud technologies for deployment.
            </p>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              What drives me forward is a persistent spark of curiosity and resilience. Setbacks
              don't hold me back — instead, they push me to adapt, improve, and move forward with
              greater clarity.
            </p>
            <p>
              This mindset gives me a clear vision and the determination to see every task through
              to completion.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
