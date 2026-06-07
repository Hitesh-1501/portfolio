import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import MouseSpotlight from "./components/MouseSpotlight"

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#3DDC84] origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Placeholder sections with proper IDs for Scroll Reveal & Active Navbar tracking */}
        <section id="about" className="min-h-screen py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-400">Section placeholder linking back to navbar tracking.</p>
        </section>

        <section id="skills" className="min-h-screen py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <p className="text-slate-400">Section placeholder linking back to navbar tracking.</p>
        </section>

        <section id="projects" className="min-h-screen py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <p className="text-slate-400">Section placeholder linking back to navbar tracking.</p>
        </section>

        <section id="achievements" className="min-h-screen py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
          <p className="text-slate-400">Section placeholder linking back to navbar tracking.</p>
        </section>

        <section id="contact" className="min-h-screen py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="text-slate-400">Section placeholder linking back to navbar tracking.</p>
        </section>
      </main>

      <MouseSpotlight />
    </>
  )
}

export default App