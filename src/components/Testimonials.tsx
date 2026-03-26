import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Professional, creative, and reliable. They truly understand global branding and delivered beyond our expectations.", name: "Trandigo International", location: "UAE" },
  { quote: "Beautiful website and SEO improvements that significantly increased our online visibility and patient inquiries.", name: "Dr. Veronica Grassi", location: "Italy" },
  { quote: "Seamless e-commerce experience. Our online sales grew significantly after the redesign.", name: "Ayurda Refresco Coffee", location: "India" },
  { quote: "Generated thousands of quality leads through their performance marketing campaigns. Exceptional ROI.", name: "Fidelity Immigration", location: "India" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    resetTimer();
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
      resetTimer();
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
      resetTimer();
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 1 }),
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-6"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">Testimonials</span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            What our <span className="gradient-text">clients say</span>
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="glass-card rounded-2xl p-5 text-center touch-pan-y"
            >
              <Quote size={20} className="text-primary opacity-40 mx-auto mb-3" />
              <p className="text-foreground leading-relaxed mb-4 text-sm">
                "{testimonials[current].quote}"
              </p>
              <p className="font-semibold text-xs font-heading">{testimonials[current].name}</p>
              <p className="text-[10px] text-muted-foreground">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
