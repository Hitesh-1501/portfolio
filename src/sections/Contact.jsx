import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.15 
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const cardHoverProps = {
  y: -8,
  scale: 1.015,
  borderColor: "rgba(61,220,132,0.3)", 
  backgroundColor: "rgba(15,23,42,0.65)",
  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(61,220,132,0.03)"
};

const Contact = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setIndiaTime(formatter.format(new Date()));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("badgujarhitesh1501@gmail.com");
    showToast("Email Copied Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section 
        id="contact" 
        className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
      >
        <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-[#3DDC84]/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col"
        >
          <motion.div variants={fadeUpVariants} className="mb-14 max-w-3xl text-left">
            <span className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#3DDC84] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
              I'm currently looking for Android Developer Internship and Android Developer opportunities. Feel free to reach out if you'd like to discuss projects, internships, collaborations, or technology.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-3 mb-16 pb-8 border-b border-white/[0.04]"
          >
            <motion.a 
              href="mailto:badgujarhitesh1501@gmail.com"
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 30px rgba(61,220,132,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-[#3DDC84] text-black text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Send Email</span>
            </motion.a>

            <motion.a 
              href = {`${import.meta.env.BASE_URL}hitesh_resume.png`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-white/[0.02] border border-white/10 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 text-[#3DDC84]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span>View Resume</span>
            </motion.a>

            <motion.a 
              href="https://github.com/Hitesh-1501" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-2.5 bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white rounded-xl transition-all flex items-center justify-center h-9 w-9"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/hitesh-badgujar-b5b489346/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-2.5 bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white rounded-xl transition-all flex items-center justify-center h-9 w-9"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch w-full mb-6">
            <motion.div 
              variants={fadeUpVariants}
              onClick={handleCopyEmail}
              whileHover={cardHoverProps}
              className="backdrop-blur-xl bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[165px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono font-black uppercase text-slate-500 tracking-wider">Communication Channel</span>
                  <span className="text-[#3DDC84] text-xs font-mono font-bold group-hover:scale-110 transition-transform">EMAIL</span>
                </div>
                <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-1.5">Email Address</h4>
                <p className="text-[15px] font-extrabold text-slate-200 group-hover:text-white transition-colors break-all leading-tight">
                  badgujarhitesh1501@gmail.com
                </p>
              </div>
              <span className="text-[10px] font-black uppercase text-[#3DDC84] tracking-wider mt-5 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1">
                📋 Click to copy address
              </span>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              whileHover={{
                ...cardHoverProps,
                borderColor: "rgba(34,211,238,0.3)",
                boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(34,211,238,0.03)"
              }}
              className="backdrop-blur-xl bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 shadow-2xl transition-all duration-300 min-h-[165px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono font-black uppercase text-slate-500 tracking-wider">Geographic Region</span>
                  <span className="text-cyan-400 text-xs font-mono font-bold">LOC</span>
                </div>
                <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-1.5">Location</h4>
                <p className="text-[15px] font-extrabold text-slate-200 leading-tight">
                  Jalgaon, Maharashtra, India
                </p>
              </div>
              <span className="text-[10px] font-mono font-black text-cyan-400 tracking-wide mt-5 uppercase">
                IST: {indiaTime || "Loading Clock..."}
              </span>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              whileHover={{
                ...cardHoverProps,
                borderColor: "rgba(168,85,247,0.3)",
                boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(168,85,247,0.03)"
              }}
              className="backdrop-blur-xl bg-slate-900/40 border border-white/[0.06] rounded-3xl p-6 shadow-2xl transition-all duration-300 min-h-[165px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono font-black uppercase text-slate-500 tracking-wider">Current Market Status</span>
                  <span className="text-purple-400 text-xs font-mono font-bold">STATUS</span>
                </div>
                <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-1.5">Availability</h4>
                <p className="text-[15px] font-extrabold text-slate-200 flex items-center gap-2 leading-tight">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC84] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC84]"></span>
                  </span>
                  Available for Android Internships
                </p>
              </div>
              <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest mt-5">Open to Opportunity</span>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeUpVariants}
            whileHover={{ 
              scale: 1.008,
              borderColor: "rgba(255,255,255,0.1)", 
              backgroundColor: "rgba(255,255,255,0.02)",
              boxShadow: "0 25px 55px -15px rgba(0,0,0,0.8)"
            }}
            className="w-full backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-300 shadow-lg mb-16"
          >
            <div>
              <h4 className="text-lg font-black text-white tracking-tight mb-1">Curriculum Vitae / Resume</h4>
              <p className="text-sm font-semibold text-slate-400 max-w-xl">
                View my projects, technical skills, achievements, and Android development experience in a printable PDF document.
              </p>
            </div>
            <a 
              href="/hitesh_resume.pdf"
              download="hitesh_resume.pdf"
              onClick={() => showToast("Resume Download Started")}
              className="px-6 py-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shrink-0 group/dl"
            >
              <svg className="w-3.5 h-3.5 text-[#3DDC84] transition-transform group-hover/dl:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="w-full">
            <span className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase block mb-6">
              🔗 PROFESSIONAL CLOUD CONDUITS
            </span>
            
           <div className="grid sm:grid-cols-3 gap-4 w-full">
                {[
                  { name: "LinkedIn", desc: "Connect professionally and view my experience.", path: "https://www.linkedin.com/in/hitesh-badgujar-b5b489346/", icon: <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
                  
                  // FIX: Replaced your clipped GitHub SVG path with the complete, functional official path data string
                  { name: "GitHub", desc: "Explore my Android projects and repositories.", path: "https://github.com/Hitesh-1501", icon: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.061.069-.061 1.003.069 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.19 22 16.424 22 12.017 22 6.484 17.522 2 12 2z" /></svg> },
                  
                  { name: "LeetCode", desc: "Follow my problem-solving and DSA journey.", path: "https://leetcode.com/u/hitesh_b1501/", icon: <svg className="w-5 h-5 text-[#FFA116]" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.411L7.11 5.826a1.373 1.373 0 00-.41.964c.003.362.145.708.397.961l4.42 4.419a1.373 1.373 0 002.327-.962V9.016s-2.126 0-3.385-.01c-1.26-.01-1.743-.513-1.743-1.144 0-.63.525-1.239 1.785-1.239h6.358c.84 0 1.371.42 1.371 1.239V22.8c0 .82-.531 1.2-1.371 1.2H4.23c-.841 0-1.371-.38-1.371-1.2V9.016c0-.82.53-1.24 1.371-1.24h2.155a1.373 1.373 0 100-2.745H4.23C1.904 5.031 0 6.917 0 9.22v13.56C0 25.083 1.903 27 4.23 27h15.54c2.327 0 4.23-1.917 4.23-4.22V9.22c0-2.303-1.903-4.189-4.23-4.189v-.62c0-.364-.145-.713-.404-.972l-2.918-2.918A1.374 1.374 0 0013.483 0z"/></svg> }
                ].map((social) => (
                  <motion.a 
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.025,
                      borderColor: "rgba(255,255,255,0.12)", 
                      backgroundColor: "rgba(255,255,255,0.02)",
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"
                    }}
                    className="backdrop-blur-md bg-white/[0.01] border border-white/[0.03] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between min-h-[135px] group/s shadow-sm"
                  >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-extrabold text-slate-200 group-hover/s:text-white transition-colors">{social.name}</span>
                    <div className="transition-transform group-hover/s:scale-110 duration-300">{social.icon}</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 leading-relaxed mt-2">{social.desc}</p>
                  <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider mt-4 flex items-center gap-0.5 group-hover/s:text-white transition-colors">
                    Visit Profile <span className="inline-block transition-transform group-hover/s:translate-x-0.5 group-hover/s:-translate-y-0.5">↗</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>


      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] backdrop-blur-xl bg-slate-900/95 border border-[#3DDC84]/20 px-5 py-3 rounded-xl shadow-[0_12px_45px_rgba(0,0,0,0.6)] flex items-center gap-3 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3ddc84]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-200">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#070b14] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-base font-black text-white tracking-tight">Hitesh Jitendra Badgujar</h5>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Android Developer • Jalgaon, Maharashtra • 2027 Graduate
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold text-slate-600 select-none">
            <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white/[0.01] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-xl transition-all group/up flex items-center gap-2 text-xs font-bold shadow-inner"
            title="Scroll Back To Top Boundary Space"
          >
            <span>Back To Top</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover/up:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Contact;