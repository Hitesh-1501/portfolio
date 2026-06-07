import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import MouseSpotlight from "./components/MouseSpotlight"

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0b1120] text-white min-h-screen relative overflow-x-hidden selection:bg-[#3DDC84]/20 selection:text-[#3DDC84]">
      {/* Premium Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#3DDC84] origin-left z-[60] shadow-[0_0_10px_#3DDC84]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Modern Interactive Hover Spotlight */}
      <MouseSpotlight />
    </div>
  )
}

export default App