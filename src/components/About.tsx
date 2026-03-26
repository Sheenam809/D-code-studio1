import { motion } from "framer-motion";
import { Target, Sparkles, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, title: "Strategy-Driven", desc: "Every decision is backed by research and clear objectives." },
  { icon: Sparkles, title: "Creative Excellence", desc: "We push creative boundaries to make your brand unforgettable." },
  { icon: TrendingUp, title: "Result-Focused", desc: "We measure success by the growth we deliver for you." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const About = () => (
  <section id="about" className="py-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-5"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">About Us</span>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight font-heading">
          We craft complete digital experiences that go{" "}
          <span className="gradient-text">beyond just design</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
          Every service we offer is built to <span className="gradient-text font-semibold">connect</span>, <span className="gradient-text font-semibold">perform</span>, and <span className="gradient-text font-semibold">grow</span> your brand. With 4+ years of strategic and creative expertise, we turn ideas into digital products that make a lasting impact.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-2.5 max-w-md mx-auto"
      >
        {highlights.map((h) => (
          <motion.div
            key={h.title}
            variants={item}
            className="glass-card rounded-xl p-4 flex gap-3 items-start transition-all duration-300 active:scale-[0.98]"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "var(--gradient-primary)" }}
            >
              <h.icon size={16} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xs font-semibold font-heading mb-0.5">{h.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
