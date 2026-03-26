import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolioAdvitiya from "@/assets/portfolio-advitiya.jpg";
import portfolioIrongate from "@/assets/portfolio-irongate.jpg";
import portfolioDailyspecial from "@/assets/portfolio-dailyspecial.jpg";
import portfolioVeronica from "@/assets/portfolio-veronica.jpg";

const projects = [
  { img: portfolioAdvitiya, title: "Advitiya Developer", category: "Brochure Design", result: "Professional branding delivered" },
  { img: portfolioIrongate, title: "Irongate", category: "Hoarding Design", result: "High-impact outdoor advertising" },
  { img: portfolioDailyspecial, title: "Daily Special", category: "Logo Design", result: "Distinctive brand identity created" },
  { img: portfolioVeronica, title: "Dr. Veronica Grassi", category: "Web Development", result: "Modern medical web presence" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Portfolio = () => (
  <section id="portfolio" className="py-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-6"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">Our Work</span>
        <h2 className="text-xl sm:text-2xl font-bold font-heading">
          Featured <span className="gradient-text">projects</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2.5"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 active:scale-[0.97]"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                <div className="w-7 h-7 rounded-lg bg-primary/90 flex items-center justify-center">
                  <ExternalLink size={12} className="text-primary-foreground" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <span className="text-[10px] font-medium uppercase tracking-wider text-primary">{p.category}</span>
              <h3 className="text-[11px] font-semibold font-heading mt-0.5 mb-0.5">{p.title}</h3>
              <p className="text-[10px] text-muted-foreground">{p.result}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
