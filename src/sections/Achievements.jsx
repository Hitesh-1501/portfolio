import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const hackathons = [
  {
    year: "2026",
    title: "GHR Hack 2.0",
    org: "G.H. Raisoni College of Engineering & Management",
    date: "February 2026",
    desc: "Participated in GHR Hack 2.0 and developed an AI-based Learning Fatigue & Dropout Prediction System using Android development. The project focused on identifying early signs of student fatigue and potential dropout risks through AI-powered analysis.",
    link: "https://drive.google.com/file/d/15d4Sk7B6G4-c7SGxNh_JiduIpFLvy8yA/view"
  },
  {
    year: "2025",
    title: "Adobe India Hackathon",
    org: "Unstop",
    date: "August 2025",
    desc: "Successfully participated in Round 1 Online MCQ Assessment and Coding Round of Adobe India Hackathon.",
    link: "https://unstop.com/certificate-preview/ac7ec960-7bc1-427f-b0ac-d146aecb2ffe"
  },
  {
    year: "2025",
    title: "Byte Battles — Code Clash",
    org: "Unstop",
    date: "August 2025",
    desc: "Participated in the Coding Round of Byte Battles: The Ultimate Coding Showdown, solving competitive programming and problem-solving challenges.",
    link: "https://unstop.com/certificate-preview/b659a3a3-8ca5-4b97-b380-28b2637a396c"
  },
  {
    year: "2025",
    title: "CodeClash: The August Arena",
    org: "Unstop",
    date: "September 2025",
    desc: "Participated in coding and problem-solving competitions focused on algorithmic thinking and programming skills.",
    link: "https://unstop.com/certificate-preview/c7b92709-bf1f-46a1-9449-f59dd93a4855"
  },
  {
    year: "2025",
    title: "Grand Master of TechNova: Igniting Brilliance (Season 2)",
    org: "Unstop",
    date: "October 2025",
    desc: "Participated in a technology and innovation challenge focused on technical aptitude, problem solving, and software development concepts.",
    link: "https://unstop.com/certificate-preview/79fd9dda-6039-4ef9-a6cf-c4fda6e16e6d"
  }
];

const certifications = [
  {
    title: "Android Development with Kotlin",
    platform: "Udemy",
    date: "January 2025",
    link: "https://www.udemy.com/certificate/UC-ff5fc08e-28d6-49a2-9451-e33f950f31c8/"
  },
  {
    title: "Kotlin Development",
    platform: "Udemy",
    date: "June 2025",
    link: "https://www.udemy.com/certificate/UC-3f5009fe-df04-456c-8b27-fc0e4f527001/"
  },
  {
    title: "Android Firebase",
    platform: "Udemy",
    date: "October 2025",
    link: "https://www.udemy.com/certificate/UC-abdf0a68-f305-4d73-96a1-dea5ed1baec6/"
  },
  {
    title: "UI/UX Design with Figma",
    platform: "Udemy",
    date: "January 2026",
    link: "https://www.udemy.com/certificate/UC-48af99a7-2b2a-450e-8c52-afd37104b1c2/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Achievements = () => {
  const timelineRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      id="achievements" 
      className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
    >
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-amber-500/[0.012] blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#3DDC84]/[0.012] blur-[140px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-20 text-left"
      >
        <motion.span variants={itemVariants} className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black block mb-4">
          Achievements
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Hackathons, Certifications <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-[#3DDC84] bg-clip-text text-transparent">
            and Continuous Learning
          </span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed font-semibold max-w-3xl">
          Building skills through real-world projects, hackathons, coding challenges, and continuous learning in Android development, UI/UX design, and software engineering.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 mb-24 max-w-3xl w-full"
      >
        {[
          { count: "5+", label: "Hackathons", color: "text-amber-400" },
          { count: "4+", label: "Certifications", color: "text-purple-400" },
          { count: "7+", label: "Projects", color: "text-[#3DDC84]" }
        ].map((stat) => (
          <motion.div 
            key={stat.label}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.08)" }}
            className="backdrop-blur-md bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4 text-center transition-colors duration-200"
          >
            <span className={`text-2xl md:text-3xl font-black block ${stat.color}`}>{stat.count}</span>
            <span className="text-xs text-slate-500 font-bold tracking-wide mt-1 block uppercase">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <div ref={timelineRef} className="mb-24 relative pl-6 md:pl-10 space-y-12 max-w-5xl">
        <div className="flex items-center gap-2 mb-4 -ml-6 md:-ml-10">
          <span className="text-lg">🏆</span>
          <h3 className="text-xl font-black text-white uppercase tracking-wider">Hackathon Journey</h3>
        </div>

        <div className="absolute top-14 bottom-2 left-2.5 md:left-3 w-[2px] bg-white/[0.04] rounded-full overflow-hidden">
          <motion.div 
            style={{ height: timelineHeight }}
            className="w-full bg-gradient-to-b from-amber-400 via-yellow-300 to-[#3DDC84] origin-top shadow-[0_0_8px_#fbbf24]"
          />
        </div>

        {hackathons.map((hack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
            className="relative group pl-2"
          >
            <div className="absolute -left-[21px] md:-left-[24px] top-1.5 w-3 h-3 rounded-full bg-[#0b1120] border-2 border-slate-700 group-hover:border-amber-400 transition-colors duration-300 z-10" />

            <div className="flex items-start flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-black text-amber-400 bg-amber-400/5 border border-amber-400/20 px-2 py-0.5 rounded">
                  {hack.year}
                </span>
                <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors duration-200">
                  {hack.title}
                </h4>
              </div>

              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                {hack.org} • <span className="text-slate-400 italic font-medium lowercase">{hack.date}</span>
              </span>
              
              <p className="text-sm text-slate-400 leading-relaxed font-semibold max-w-3xl mt-1">
                {hack.desc}
              </p>

              <a 
                href={hack.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black text-amber-400 mt-2 hover:underline flex items-center gap-1 group/btn"
              >
                <span>View Certificate</span>
                <span className="inline-block transition-transform group-hover/btn:translate-x-0.5">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-24 w-full">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-lg">🎓</span>
          <h3 className="text-xl font-black text-white uppercase tracking-wider">Certifications</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(61,220,132,0.25)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
              }}
              className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-2xl p-5 flex flex-col justify-between items-start transition-all duration-300"
            >
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono font-black uppercase text-[#3DDC84] bg-[#3DDC84]/5 border border-[#3DDC84]/10 px-2 py-0.5 rounded">
                    {cert.platform}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">{cert.date}</span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-200 leading-snug mb-4 h-10 line-clamp-2">
                  {cert.title}
                </h4>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black text-[#3DDC84] hover:underline flex items-center gap-1 group/cert"
              >
                <span>View Credential</span>
                <span className="inline-block transition-transform group-hover/cert:translate-x-0.5">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-lg">💻</span>
          <h3 className="text-xl font-black text-white uppercase tracking-wider">Coding Profiles</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(241,135,24,0.25)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
          >
            <div>
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <span className="text-[#F18718] font-mono">⚡</span> LeetCode
              </h4>
              <div className="mt-4 space-y-2 text-sm text-slate-400 font-semibold">
                <p>• Advanced Problem Solving</p>
                <p>• Continuous Data Structures & Algorithms Practice</p>
                <p>• Algorithmic Runtime Optimization Learning</p>
              </div>
            </div>
            <a 
              href="https://leetcode.com/u/hitesh_b1501/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-black text-[#F18718] hover:underline mt-8 flex items-center gap-1"
            >
              <span>LeetCode Profile</span>
              <span>→</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
          >
            <div>
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <span className="text-white font-mono">📁</span> GitHub
              </h4>
              <div className="mt-4 space-y-2 text-sm text-slate-400 font-semibold">
                <p>• Open-source software repositories codebase</p>
                <p>• Production Android systems architecture repositories</p>
                <p>• Learning project branches & portfolio source code</p>
              </div>
            </div>
            <a 
              href="https://github.com/Hitesh-1501" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-black text-white hover:underline mt-8 flex items-center gap-1"
            >
              <span>GitHub Profile</span>
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Achievements;