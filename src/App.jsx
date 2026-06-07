import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
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
      {/* Premium Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#3DDC84] origin-left z-[60] shadow-[0_0_10px_#3DDC84]"
        style={{ scaleX }}
      />
      
      {/* Floating Active Tracking Navigation */}
      <Navbar />
      
      <main className="bg-[#0b1120] relative z-10 overflow-x-hidden">
        {/* Modern Interactive Hero Canvas Layout */}
        <Hero />
        
        {/* Overhauled SaaS Design Journey & Milestone Deck */}
        <About />
        
        {/* Error-Free Glassmorphism Tech Pillar Dashboard Matrix */}
        <Skills />

        {/* 7-Project Dual Featured + Grid Presentation Module */}
        <Projects />
        
        <Achievements />

        <section id="contact" className="min-h-screen py-32 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col justify-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Contact</h2>
          <p className="text-slate-400 font-semibold text-lg max-w-xl">
            Professional networking conduits, communication links, and direct outreach access points tracker.
          </p>
        </section>
      </main>

      {/* Dynamic Cursor Spotlight Layer */}
      <MouseSpotlight />
    </>
  )
}

export default App