import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "glass-card py-2" : "py-3 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Left: Hamburger */}
          <div className="flex items-center w-[90px]">
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-border hover:bg-secondary transition-all duration-300 text-foreground active:scale-95"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          {/* Center: Logo */}
          <a href="#" className="text-sm sm:text-base font-bold tracking-tight font-heading">
            <span className="gradient-text">D-Code</span>{" "}
            <span className="text-foreground">Studio</span>
          </a>

          {/* Right: Theme toggle + CTA */}
          <div className="flex items-center gap-2 w-[90px] justify-end">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-border hover:bg-secondary transition-all duration-300 active:scale-95"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>
            <a
              href="tel:+919876543210"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-primary-foreground active:scale-95 transition-all duration-300"
              style={{ background: "var(--gradient-primary)" }}
              aria-label="Call now"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-card border-r border-border shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-sm font-bold font-heading">
                  <span className="gradient-text">D-Code</span> Studio
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-border hover:bg-secondary transition-all active:scale-95"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href + link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-sm text-muted-foreground hover:text-foreground py-3 px-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 active:scale-[0.98] active:bg-primary/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+919876543210"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.3 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-primary-foreground mt-3 active:scale-[0.97]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Phone size={14} /> Call Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
