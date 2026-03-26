import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import hero3dCubes from "@/assets/hero-3d-cubes.png";
import hero3dBranding from "@/assets/hero-3d-branding.png";
import hero3dShowcase from "@/assets/hero-3d-showcase.png";
import portfolioAdvitiya from "@/assets/portfolio-advitiya.jpg";
import portfolioIrongate from "@/assets/portfolio-irongate.jpg";
import portfolioVeronica from "@/assets/portfolio-veronica.jpg";
import portfolioDailyspecial from "@/assets/portfolio-dailyspecial.jpg";

const slides = [
  {
    headline: (
      <>
        We craft digital experiences that{" "}
        <span className="gradient-text">grow your brand</span> globally
      </>
    ),
    sub: "From websites to marketing — we help businesses connect, perform, and scale",
    cta: { label: "Get Started", href: "#contact", icon: <ArrowRight size={16} /> },
    cta2: { label: "View Our Work", href: "#portfolio", icon: <Play size={16} /> },
    heroImage: null,
    type: "glow" as const,
  },
  {
    headline: (
      <>
        Modern <span className="gradient-text">web design</span> that converts
      </>
    ),
    sub: "Beautiful, responsive websites built for performance and results",
    cta: { label: "See Our Work", href: "#portfolio", icon: <ArrowRight size={16} /> },
    heroImage: hero3dCubes,
    type: "3d" as const,
  },
  {
    headline: (
      <>
        <span className="gradient-text">Branding</span> that makes you unforgettable
      </>
    ),
    sub: "Strong identities that communicate your value and stand out globally",
    cta: { label: "Explore Services", href: "#services", icon: <ArrowRight size={16} /> },
    heroImage: hero3dBranding,
    type: "3d" as const,
  },
  {
    headline: (
      <>
        Our <span className="gradient-text">portfolio</span> speaks for itself
      </>
    ),
    sub: "Real projects, real results — see what we've built for brands worldwide",
    cta: { label: "View Projects", href: "#portfolio", icon: <ArrowRight size={16} /> },
    heroImage: hero3dShowcase,
    type: "showcase" as const,
    portfolioImages: [portfolioAdvitiya, portfolioDailyspecial, portfolioVeronica, portfolioIrongate],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
  }, []);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    resetTimer();
  }, [current, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrent((p) => (p + 1) % slides.length);
      resetTimer();
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrent((p) => (p - 1 + slides.length) % slides.length);
      resetTimer();
    }
  };

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-14">
      {/* Dark overlay base for premium feel */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] rounded-full blur-[120px]"
          style={{
            background: "hsl(var(--primary) / 0.15)",
            top: "5%",
            left: "0%",
          }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute w-[250px] h-[250px] rounded-full blur-[100px]"
          style={{
            background: "hsl(var(--accent) / 0.12)",
            bottom: "5%",
            right: "0%",
          }}
        />
        {/* Center glow for slide 1 */}
        {current === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[200px] h-[200px] rounded-full blur-[80px]"
            style={{
              background: "hsl(var(--primary) / 0.2)",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="text-center max-w-lg mx-auto touch-pan-y"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-3 font-heading text-foreground"
            >
              {slide.headline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="text-sm text-muted-foreground mb-5 leading-relaxed max-w-[320px] mx-auto"
            >
              {slide.sub}
            </motion.p>

            {/* 3D Image with floating animation */}
            {slide.heroImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className="mb-6 mx-auto max-w-[260px] relative"
              >
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 blur-[40px] opacity-40 rounded-full scale-90"
                  style={{ background: "hsl(var(--primary) / 0.4)" }}
                />
                <motion.img
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={slide.heroImage}
                  alt="3D Visual"
                  className="w-full aspect-square object-contain relative z-10 drop-shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            )}

            {/* Portfolio grid for slide 4 */}
            {slide.portfolioImages && (
              <div className="grid grid-cols-2 gap-2 mb-6 max-w-[280px] mx-auto">
                {slide.portfolioImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                    }}
                    className="rounded-xl overflow-hidden border border-border/50 shadow-lg"
                  >
                    <img
                      src={img}
                      alt="Portfolio"
                      className="w-full aspect-square object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-3 items-center"
            >
              <a
                href={slide.cta.href}
                className="inline-flex items-center justify-center gap-2 w-full max-w-[260px] px-5 py-3 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-300 active:scale-[0.97] shadow-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                {slide.cta.label} {slide.cta.icon}
              </a>
              {slide.cta2 && (
                <a
                  href={slide.cta2.href}
                  className="inline-flex items-center justify-center gap-2 w-full max-w-[260px] px-5 py-3 rounded-xl text-sm font-semibold border border-border text-foreground transition-all duration-300 active:scale-[0.97]"
                >
                  {slide.cta2.icon} {slide.cta2.label}
                </a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                i === current
                  ? "w-6 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                  : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
