import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Data structures matched directly to your layout design requirements
const timelineData = [
  { year: "2021", title: "Started Diploma" },
  { year: "2024", title: "Built Android Projects" },
  { year: "2025", title: "Started Kotlin & Firebase Projects" },
  { year: "2026", title: "Hackathons & AI Projects" },
  { year: "2027", title: "Expected Graduation" }
];

const focusChips = [
  "Jetpack Compose",
  "Android Architecture",
  "Firebase",
  "AI-Powered Apps",
  "Problem Solving",
  "UI/UX Design"
];

const About = () => {
  const containerRef = useRef(null);
  
  // Controls the timeline progression line based on scroll offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Scroll Reveal Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3DDC84]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section 1 — About Header (image_674a14.png) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 max-w-3xl"
      >
        <span className="text-[#3DDC84] uppercase tracking-[0.3em] text-xs font-black block mb-3">
          About Me
        </span>
        <motion.h2 
          variants={fadeUp}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
        >
          Building Android Applications <br />
          <span className="bg-gradient-to-r from-[#3DDC84] to-cyan-400 bg-clip-text text-transparent">
            That Solve Real Problems
          </span>
        </motion.h2>
        <motion.p 
          variants={fadeUp}
          className="text-slate-400 mt-4 text-base md:text-lg leading-relaxed font-medium"
        >
          Passionate Android Developer focused on creating modern mobile applications with Kotlin, Jetpack Compose, Firebase, and AI-powered features.
        </motion.p>
      </motion.div>

      {/* Main SaaS Card Dashboard Grid Layout (image_67436a.png) */}
      <div className="grid lg:grid-cols-12 gap-6 items-start w-full">
        
        {/* Left Side: Journey & Timeline Cards */}
        <div className="lg:col-span-7 grid gap-6 w-full">
          
          {/* Section 2 — My Journey Card (image_674a14.png) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.5)", borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 relative shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              My Journey
            </h3>
            <div className="text-slate-400 text-sm md:text-base space-y-4 leading-relaxed font-medium">
              <p>
                My journey into software development started during my diploma when I explored web development. 
                While it helped me understand development fundamentals, I discovered my real interest when I built 
                and ran my first Android application on a physical device.
              </p>
              <p>
                Seeing an application come to life on a smartphone inspired me to focus on Android development. 
                Since then, I have been continuously learning modern Android technologies, building real-world projects, 
                improving UI/UX design skills, and exploring AI-powered mobile experiences.
              </p>
            </div>
          </motion.div>

          {/* Section 3 — Timeline Card (image_674a0c.png) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            whileHover={{ y: -6, borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 relative shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-8">Milestones</h3>
            
            <div className="relative pl-6 md:pl-8 space-y-8">
              {/* Animated Scroll Timeline Axis Line */}
              <div className="absolute top-1.5 bottom-1.5 left-2 w-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-gradient-to-b from-[#3DDC84] to-cyan-400 origin-top"
                  style={{ height: lineHeight }}
                />
              </div>

              {timelineData.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeUp}
                  className="relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 group"
                >
                  {/* Timeline Core Dot Node */}
                  <div className="absolute -left-[22px] md:-left-[26px] w-3 h-3 rounded-full bg-[#0b1120] border-2 border-slate-600 group-hover:border-[#3DDC84] group-hover:scale-125 transition-all duration-300 z-10" />
                  
                  <span className="text-xs font-mono font-black text-[#3DDC84] bg-[#3DDC84]/10 border border-[#3DDC84]/20 rounded-md px-2 py-0.5 w-max">
                    {item.year}
                  </span>
                  <p className="text-sm md:text-base font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Education, Focus, & Career Goal Info Cards */}
        <div className="lg:col-span-5 grid gap-6 w-full">
          
          {/* Section 4 — Education Card (image_674a0c.png) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            whileHover={{ y: -6, borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 relative shadow-2xl"
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Education</h3>
            <h4 className="text-lg md:text-xl font-black text-white leading-tight">
              B.Tech Computer Science & Engineering <br />
              <span className="text-cyan-400 font-bold text-sm tracking-wide">(AIML)</span>
            </h4>
            <p className="text-slate-400 font-semibold text-sm mt-2">
              G.H. Raisoni College of Engineering and Management, Jalgaon
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono font-bold text-slate-500">
              <span>GRADUATION STATUS</span>
              <span className="text-[#3DDC84]">EXPECTED 2027</span>
            </div>
          </motion.div>

          {/* Section 5 — Current Focus Card (image_67470e.png) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            whileHover={{ y: -6, borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 relative shadow-2xl"
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Current Focus</h3>
            <div className="flex flex-wrap gap-2.5">
              {focusChips.map((chip, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(61,220,132,0.15)", 
                    borderColor: "#3DDC84",
                    boxShadow: "0 0 15px rgba(61,220,132,0.2)"
                  }}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/5 bg-white/[0.01] text-slate-300 text-xs md:text-sm font-bold transition-all duration-300 cursor-default"
                >
                  <span className="text-[#3DDC84]">•</span>
                  <span>{chip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 6 & 7 Combo Block — What I Enjoy Building + Career Goal (image_67470e.png) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            whileHover={{ y: -6, borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 relative shadow-2xl space-y-6"
          >
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">What I Enjoy Building</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                I enjoy building Android applications that combine clean UI design with practical functionality. 
                From productivity tools and AI-powered applications to e-commerce and finance solutions, I enjoy turning ideas into polished mobile experiences.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">
                Career Goal
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                Currently seeking Android Developer Internship and Android Developer opportunities where I can contribute to real-world products while continuing to grow as a mobile application developer.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;