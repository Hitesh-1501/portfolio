import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
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
      
      <main className="bg-[#0b1120] relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Placeholder sections given true standard viewport padding for seamless observer matching */}
        <section id="skills" className="min-h-screen py-32 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col justify-center">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Skills</h2>
          <p className="text-slate-400 font-medium">Section workspace content tracker.</p>
        </section>

        <section id="projects" className="min-h-screen py-32 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col justify-center">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Projects</h2>
          <p className="text-slate-400 font-medium">Section workspace content tracker.</p>
        </section>

        <section id="achievements" className="min-h-screen py-32 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col justify-center">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Achievements</h2>
          <p className="text-slate-400 font-medium">Section workspace content tracker.</p>
        </section>

        <section id="contact" className="min-h-screen py-32 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col justify-center">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Contact</h2>
          <p className="text-slate-400 font-medium">Section workspace content tracker.</p>
        </section>
      </main>

      <MouseSpotlight />
    </>
  )
}

export default App