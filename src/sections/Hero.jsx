import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import Container from "../components/Container";
import HeroStats from "../components/HeroStats";
import PhoneMockup from "../components/PhoneMockup";
import FloatingParticles from "../components/FloatingParticles";

import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-24 md:pt-32">
      
      {/* Animated Gradient Mesh Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#0b1120]">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3DDC84]/10 blur-[140px] animate-mesh-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] animate-mesh-2" />
      </div>

      {/* Ambient Floating Particles */}
      <FloatingParticles count={20} />

      <Container>
        {/* Smooth Section Reveal Container wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
        >
          {/* Left Block Description Visual details */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[#3DDC84] uppercase tracking-[0.3em] text-xs font-bold"
            >
              Welcome To My Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
            >
              <span className="text-slate-400">I'm</span>
              <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#3DDC84] bg-clip-text text-transparent">
                Hitesh Badgujar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Android Developer",
                  1500,
                  "Jetpack Compose Developer",
                  1500,
                  "Firebase Developer",
                  1500,
                  "Kotlin Developer",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-xl md:text-2xl font-bold text-slate-300"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-xl"
            >
              Final-year Computer Science student specializing in building production-ready Android apps with Kotlin, Jetpack Compose, Firebase, and AI-powered workflows.
            </motion.p>

            {/* Link Anchor CTA Modules */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="/hitesh_resume.pdf"
                className="bg-[#3DDC84] text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(61,220,132,0.2)] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(61,220,132,0.4)] transition-all duration-300 text-sm"
              >
                View Resume
              </a>

              <a
                href="#projects"
                className="border border-white/10 bg-white/[0.01] text-white font-medium px-8 py-4 rounded-xl hover:border-[#3DDC84] hover:text-[#3DDC84] transition-all duration-300 text-sm"
              >
                Explore Projects
              </a>
            </motion.div>

            {/* Social Channels Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: <FaGithub />, url: personalInfo.github },
                { icon: <FaLinkedin />, url: personalInfo.linkedin },
                { icon: <SiLeetcode />, url: personalInfo.leetcode }
              ].map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-xl text-slate-400 hover:border-[#3DDC84] hover:text-[#3DDC84] hover:bg-[#3DDC84]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {platform.icon}
                </a>
              ))}
            </motion.div>

            {/* Metrics Incremental Blocks */}
            <HeroStats />
          </div>

          {/* Right Presentation Dashboard Mockup Graphic */}
          <div className="relative flex items-center justify-center lg:mt-0 mt-8">
            <PhoneMockup />
          </div>
        </motion.div>
      </Container>

      {/* Mouse Outline Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10">
        <span className="text-[9px] tracking-[0.3em] text-slate-500 font-bold uppercase">
          SCROLL
        </span>
        <div className="w-[18px] h-[28px] border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-[#3DDC84] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;