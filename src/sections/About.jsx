import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  
  const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
    >
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3DDC84]/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.02] blur-[130px] rounded-full pointer-events-none -z-10" />

      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 max-w-3xl text-left"
      >
        <span className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black block mb-4">
          About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
          Building Android Applications <br />
          <span className="bg-gradient-to-r from-[#3DDC84] via-[#5ce99b] to-cyan-400 bg-clip-text text-transparent">
            That Solve Real Problems
          </span>
        </h2>
        <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
          Passionate Android Developer focused on creating modern mobile applications with Kotlin, Jetpack Compose, Firebase, and AI-powered features.
        </p>
      </motion.div>

      
      <motion.div 
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid lg:grid-cols-12 gap-6 items-start w-full"
      >
        
       
        <div className="lg:col-span-7 grid gap-6 w-full">
          
         
          <motion.div
            variants={fadeInLeft}
            whileHover={{ 
              y: -5, 
              borderColor: "rgba(61,220,132,0.3)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7), 0 0 30px rgba(61,220,132,0.05)"
            }}
            className="backdrop-blur-md bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl relative overflow-hidden group"
          >
          
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3DDC84]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#3DDC84]" />
              My Journey
            </h3>
            <div className="text-slate-400 text-sm md:text-base space-y-4 leading-relaxed font-semibold">
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

         
          <motion.div
            variants={cardFadeUp}
            whileHover={{ 
              y: -5, 
              borderColor: "rgba(61,220,132,0.2)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7)"
            }}
            className="backdrop-blur-md bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl"
          >
            <h3 className="text-xl font-extrabold text-white mb-10 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-cyan-400" />
              Milestones
            </h3>
            
            <div className="relative pl-6 md:pl-10 space-y-10">
              
              <div className="absolute top-2 bottom-2 left-2.5 w-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-gradient-to-b from-[#3DDC84] via-emerald-400 to-cyan-400 origin-top shadow-[0_0_15px_#3DDC84]"
                  style={{ height: lineHeight }}
                />
              </div>

              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={cardFadeUp}
                  className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group"
                >
                  {/* Interactive Dot Node */}
                  <div className="absolute -left-[21px] md:-left-[25px] w-3.5 h-3.5 rounded-full bg-[#0b1120] border-[3px] border-slate-700 group-hover:border-[#3DDC84] group-hover:scale-125 transition-all duration-300 z-10 shadow-md" />
                  
                  <span className="text-xs font-mono font-black text-[#3DDC84] bg-[#3DDC84]/8 border border-[#3DDC84]/15 rounded-lg px-3 py-1 w-max tracking-wide">
                    {item.year}
                  </span>
                  <p className="text-sm md:text-base font-bold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

       
        <div className="lg:col-span-5 grid gap-6 w-full">
          
         
          <motion.div
            variants={fadeInRight}
            whileHover={{ y: -5, borderColor: "rgba(56,189,248,0.3)" }}
            className="backdrop-blur-md bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Education</h3>
            <h4 className="text-lg md:text-xl font-black text-white leading-snug">
              B.Tech Computer Science & Engineering <br />
              <span className="text-cyan-400 font-extrabold text-sm tracking-wider bg-cyan-500/5 border border-cyan-500/10 rounded-md px-2 py-0.5 inline-block mt-2">
                AIML SPECIALIZATION
              </span>
            </h4>
            <p className="text-slate-400 font-bold text-sm mt-4 leading-relaxed">
              G.H. Raisoni College of Engineering and Management, Jalgaon
            </p>
            
            <div className="mt-6 pt-5 border-t border-white/[0.04] flex justify-between items-center text-xs font-mono font-bold tracking-wider">
              <span className="text-slate-500">GRADUATION STATUS</span>
              <span className="text-[#3DDC84] bg-[#3DDC84]/5 px-2 py-1 rounded-md border border-[#3DDC84]/10">EXPECTED 2027</span>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeInRight}
            whileHover={{ y: -5, borderColor: "rgba(61,220,132,0.2)" }}
            className="backdrop-blur-md bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Current Focus</h3>
            <div className="flex flex-wrap gap-2.5">
              {focusChips.map((chip, index) => (
                <motion.div
                  key={index}
                 
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25
                  }}
                  whileHover={{ 
                    scale: 1.04, 
                    backgroundColor: "rgba(61,220,132,0.12)", 
                    borderColor: "#3DDC84",
                    boxShadow: "0 0 20px rgba(61,220,132,0.15)"
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.05] bg-white/[0.01] text-slate-300 text-xs md:text-sm font-bold transition-all duration-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
                  <span>{chip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeInRight}
            whileHover={{ 
              y: -5, 
              borderColor: "rgba(61,220,132,0.2)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7)"
            }}
            className="backdrop-blur-md bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl space-y-6"
          >
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">What I Enjoy Building</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-bold">
                I enjoy building Android applications that combine clean UI design with practical functionality. 
                From productivity tools and AI-powered applications to e-commerce and finance solutions, I enjoy turning ideas into polished mobile experiences.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.04]">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                Career Goal
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-bold">
                Currently seeking Android Developer Internship and Android Developer opportunities where I can contribute to real-world products while continuing to grow as a mobile application developer.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;