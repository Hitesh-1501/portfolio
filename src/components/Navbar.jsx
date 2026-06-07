import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -60% 0px", // Active triggers near display midpoints
      threshold: 0.1,
    });

    // Track targets safely
    ["about", "skills", "projects", "achievements", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl px-6 md:px-8 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-3xl text-[#3DDC84] tracking-tighter">
          HB
        </a>

        <div className="hidden lg:flex gap-1 items-center text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-[#3DDC84]" : "hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#3DDC84]/10 border border-[#3DDC84]/20 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;