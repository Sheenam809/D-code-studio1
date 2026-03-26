import { motion } from "framer-motion";
import { Globe, Fingerprint, Camera, Share2, Search, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Design & Development", desc: "Fast, responsive websites that elevate your brand" },
  { icon: Fingerprint, title: "Branding & Identity", desc: "Strong identities that communicate your value" },
  { icon: Camera, title: "Photography & Videography", desc: "Powerful visuals that connect with your audience" },
  { icon: Share2, title: "Social Media Management", desc: "Grow your digital presence and engagement" },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher and get discovered on Google" },
  { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven campaigns to maximize ROI" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Services = () => (
  <section id="services" className="py-10 relative">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-6"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">What We Do</span>
        <h2 className="text-xl sm:text-2xl font-bold font-heading">
          Services built for <span className="gradient-text">growth</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2.5"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="glass-card rounded-xl p-3.5 group transition-all duration-300 active:scale-[0.97]"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              <s.icon size={15} className="text-primary-foreground" />
            </div>
            <h3 className="text-[11px] font-semibold font-heading mb-0.5 leading-tight">{s.title}</h3>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
