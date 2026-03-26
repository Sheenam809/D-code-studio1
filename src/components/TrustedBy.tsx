import { motion } from "framer-motion";

const clients = ["RIDIX", "Kashmir", "MY RERA", "Radiant Power", "Trandigo", "Ayurda"];

const TrustedBy = () => (
  <section className="py-6 border-t border-b border-border">
    <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[10px] text-muted-foreground uppercase tracking-widest mb-3"
      >
        Trusted by growing brands worldwide
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {clients.map((c) => (
          <span
            key={c}
            className="text-xs font-semibold text-muted-foreground/40 tracking-wider"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
