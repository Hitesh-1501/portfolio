import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
      "
    >
      <div
        className="
          backdrop-blur-xl
          bg-white/[0.03]
          border border-white/10
          rounded-3xl
          px-8 py-5
          flex items-center justify-between
        "
      >
        <div className="font-bold text-3xl text-[#3DDC84]">
          HB
        </div>

        <div className="hidden lg:flex gap-10 text-slate-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;