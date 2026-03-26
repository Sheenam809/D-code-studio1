import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, FolderOpen, Users, Globe } from "lucide-react";

const stats = [
  { icon: Calendar, value: 4, suffix: "+", label: "Years Experience" },
  { icon: FolderOpen, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 20, suffix: "+", label: "Happy Clients" },
  { icon: Globe, value: 5, suffix: "+", label: "Global Markets" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-xl sm:text-2xl font-bold font-heading">
      <span className="gradient-text">{count}{suffix}</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Stats = () => (
  <section className="py-8">
    <div className="container mx-auto px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2.5"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            className="glass-card rounded-xl p-4 text-center transition-all duration-300 active:scale-[0.97]"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ background: "var(--gradient-primary)" }}>
              <s.icon size={15} className="text-primary-foreground" />
            </div>
            <AnimatedCounter target={s.value} suffix={s.suffix} />
            <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stats;
