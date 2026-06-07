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

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "hero") {
            // If we are looking at the Hero section, clear the active dot state completely
            setActiveSection("");
          } else {
            // Otherwise, lock seamlessly onto the current section ID
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      // Balanced margins to prevent adjacent overlapping sections from overriding each other 
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.1,
    });

    // CRITICAL: We now watch 'hero' alongside your rest of the page targets
    ["hero", "about", "skills", "projects", "achievements", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 95; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-5xl"
    >
      <div className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;