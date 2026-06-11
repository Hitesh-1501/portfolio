import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id === "hero" ? "" : entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.1,
    });

    ["hero", "about", "skills", "projects", "achievements", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMobileOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 z-50 w-[92%] max-w-5xl"
      >
        <div className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className="font-black text-2xl text-[#3DDC84] tracking-tighter hover:scale-105 transition-transform select-none"
          >
            HB
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-1 items-center text-slate-300">
            {navItems.map((item, idx) => {
              const currentId = item.href.substring(1);
              const isActive = activeSection === currentId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, currentId)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 select-none ${
                    isActive ? "text-[#3DDC84]" : "hover:text-white"
                  }`}
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && !isActive && (
                      <motion.span
                        layoutId="navHoverShape"
                        className="absolute inset-0 bg-white/5 rounded-xl -z-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#3DDC84]/10 border border-[#3DDC84]/25 rounded-xl -z-10 shadow-[0_0_15px_rgba(61,220,132,0.15)]"
                      transition={{ type: "spring", stiffness: 220, damping: 32 }}
                    />
                  )}

                  <motion.span whileTap={{ scale: 0.95 }} className="block">
                    {item.label}
                  </motion.span>
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#3DDC84]/40 transition-all duration-200"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-4 h-0.5 bg-slate-300 rounded-full block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-0.5 bg-slate-300 rounded-full block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-4 h-0.5 bg-slate-300 rounded-full block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[88px] left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm lg:hidden"
            >
              <div className="backdrop-blur-xl bg-black/80 border border-white/10 rounded-2xl p-3 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-1">
                {navItems.map((item, idx) => {
                  const currentId = item.href.substring(1);
                  const isActive = activeSection === currentId;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, currentId)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      className={`relative px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? "text-[#3DDC84] bg-[#3DDC84]/10 border border-[#3DDC84]/20"
                          : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] shadow-[0_0_6px_#3ddc84]" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;