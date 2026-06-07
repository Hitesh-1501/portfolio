import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiDownload, HiCheckCircle } from "react-icons/hi";

import Container from "../components/Container";
import HeroStats from "../components/HeroStats";
import PhoneMockup from "../components/PhoneMockup";
import FloatingParticles from "../components/FloatingParticles";

// CRITICAL FIX: Direct Asset Import to bypass blank browser routing issues!
import resumeFile from "/hitesh_resume.pdf"; 

const Hero = () => {
  const [downloadState, setDownloadState] = useState("idle");

  const triggerDownloadAnimation = () => {
    setDownloadState("downloading");
    
    // Smooth transition simulation timeline
    setTimeout(() => {
      setDownloadState("success");
      setTimeout(() => {
        setDownloadState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-28 md:pt-36">
      
      {/* Background canvas elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#0b1120]">
        <div className="absolute top-[-15%] left-[-10%] w-[650px] h-[650px] rounded-full bg-[#3DDC84]/10 blur-[130px] animate-mesh-1" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[150px] animate-mesh-2" />
      </div>

      <FloatingParticles count={30} />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Relaxed, cinematic reveal
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-20"
        >
          {/* Left Bio text cluster */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black"
            >
              Welcome To My Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight"
            >
              <span className="text-slate-400 font-bold">I'm</span>
              <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#3DDC84] bg-clip-text text-transparent">
                Hitesh Badgujar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-3 h-8"
            >
              <TypeAnimation
                sequence={[
                  "Android Developer",
                  1800,
                  "Jetpack Compose Expert",
                  1800,
                  "Firebase Integrator",
                  1800,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-xl md:text-2xl font-extrabold text-slate-300 tracking-wide"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base text-slate-400 mt-5 leading-relaxed max-w-xl font-medium"
            >
              Final-year Computer Science student specializing in building production-ready Android apps with Kotlin, Jetpack Compose, Firebase, and AI-powered workflows.
            </motion.p>

            {/* Resume Call-to-action Action Hub */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-8 items-center"
            >
              {/* Linked via imported absolute bundle source mapping */}
              <motion.a
                href={resumeFile}
                download="Hitesh_Badgujar_Resume.pdf"
                onClick={triggerDownloadAnimation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 shadow-lg min-w-[190px] justify-center cursor-pointer ${
                  downloadState === "success" 
                    ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                    : "bg-[#3DDC84] text-black shadow-[0_10px_30px_rgba(61,220,132,0.25)]"
                }`}
              >
                {downloadState === "idle" && (
                  <>
                    <HiDownload className="text-base" />
                    <span>View Resume</span>
                  </>
                )}
                
                {downloadState === "downloading" && (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Downloading...</span>
                  </div>
                )}

                {downloadState === "success" && (
                  <>
                    <HiCheckCircle className="text-base animate-bounce" />
                    <span>Saved to Device!</span>
                  </>
                )}
              </motion.a>

              <a
                href="#projects"
                className="border border-white/10 bg-white/[0.01] text-white font-semibold px-8 py-4 rounded-xl hover:border-[#3DDC84] hover:text-[#3DDC84] hover:bg-[#3DDC84]/5 transition-all duration-300 text-sm"
              >
                Explore Projects
              </a>
            </motion.div>

            {/* Social handles row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3.5 mt-8"
            >
              {[
                { icon: <FaGithub />, url: "https://github.com" },
                { icon: <FaLinkedin />, url: "https://linkedin.com" },
                { icon: <SiLeetcode />, url: "https://leetcode.com" }
              ].map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-lg text-slate-400 hover:border-[#3DDC84] hover:text-[#3DDC84] hover:bg-[#3DDC84]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {platform.icon}
                </a>
              ))}
            </motion.div>

            <HeroStats />
          </div>

          {/* Right Phone Mockup graphic */}
          <div className="relative flex items-center justify-center lg:mt-0 mt-10">
            <PhoneMockup />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;