import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-6xl
      "
    >
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-2xl
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            text-green-400
            font-bold
            text-2xl
          "
        >
          HB
        </div>

        <div
          className="
            hidden
            md:flex
            gap-8
            text-slate-300
          "
        >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar