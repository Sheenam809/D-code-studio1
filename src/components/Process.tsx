import { motion } from "framer-motion";
import { Compass, Target, Code2, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: Compass, title: "Discovery", desc: "Understanding brand, audience, and goals" },
  { num: "02", icon: Target, title: "Strategy", desc: "Creating measurable and clear objectives" },
  { num: "03", icon: Code2, title: "Development", desc: "Designing and building aligned solutions" },
  { num: "04", icon: Rocket, title: "Launch", desc: "Feedback, testing, and final delivery" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Process = () => (
  <section id="process" className="py-10 relative">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-6"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">How We Work</span>
        <h2 className="text-xl sm:text-2xl font-bold font-heading">
          Our proven <span className="gradient-text">process</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2.5"
      >
        {steps.map((s) => (
          <motion.div
            key={s.num}
            variants={item}
            className="glass-card rounded-xl p-3.5 relative transition-all duration-300 group active:scale-[0.97]"
          >
            <span className="text-3xl font-black gradient-text opacity-10 absolute top-2 right-3 font-heading">
              {s.num}
            </span>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              <s.icon size={15} className="text-primary-foreground" />
            </div>
            <h3 className="text-[11px] font-semibold font-heading mb-0.5">{s.title}</h3>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Process;
