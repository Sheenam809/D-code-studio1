import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section id="cta" className="py-10 relative overflow-hidden">
    <div className="absolute inset-0">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] rounded-full blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--gradient-hero)" }}
      />
    </div>
    <div className="container relative z-10 mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="text-xl sm:text-2xl font-bold font-heading mb-3">
          Let's build something <span className="gradient-text">amazing</span> together
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Your story deserves to be seen, heard, and experienced
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-300 active:scale-[0.97]"
          style={{ background: "var(--gradient-primary)" }}
        >
          Book Free Consultation <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
