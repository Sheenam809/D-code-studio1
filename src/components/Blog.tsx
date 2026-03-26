import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Social Media Isn't Just Posting — It's Brand Building", tag: "Social Media" },
  { title: "Why Brand Identity Matters in 2025", tag: "Branding" },
  { title: "Web Design Trends 2025", tag: "Design" },
  { title: "Performance Marketing Growth", tag: "Marketing" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Blog = () => (
  <section id="blog" className="py-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-6"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">Insights</span>
        <h2 className="text-xl sm:text-2xl font-bold font-heading">
          Latest from our <span className="gradient-text">blog</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2.5"
      >
        {posts.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="glass-card rounded-xl p-3.5 group cursor-pointer transition-all duration-300 active:scale-[0.97] flex flex-col justify-between min-h-[110px]"
          >
            <div>
              <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                {p.tag}
              </span>
              <h3 className="text-[11px] font-semibold font-heading leading-snug">{p.title}</h3>
            </div>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Read more <ArrowUpRight size={10} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Blog;
