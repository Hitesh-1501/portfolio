import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [toastMessage, setToastMessage] = useState("");

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

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <>
      <section 
        id="contact" 
        className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
      >
        {/* Background Lights */}
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#3DDC84]/[0.012] blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-cyan-500/[0.012] blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* --- SECTION HEADER --- */}
        <div className="mb-12 max-w-3xl text-left">
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
        </div>

        {/* --- QUICK ACTION ROW --- */}
        <div className="flex flex-wrap gap-3 mb-16 pb-6 border-b border-white/[0.04]">
          <a 
            href="mailto:badgujarhitesh1501@gmail.com"
            className="px-5 py-2.5 bg-[#3DDC84] text-black text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#2cb96d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(61,220,132,0.15)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>Send Email</span>
          </a>
          <a 
            href="/hitesh_resume.pdf"
            download="hitesh_resume.pdf"
            onClick={() => showToast("Resume Download Started")}
            className="px-5 py-2.5 bg-white/[0.02] border border-white/10 text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-white/[0.05] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-[#3DDC84]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v2.25a2.25 2.25 0 01-2.25 2.25h-10.5A2.25 2.25 0 014.5 16.5v-2.25m15 0V8.25m0 6 tracking-wideM4.5 8.25l7.5 7.5 7.5-7.5M12 3v12" />
            </svg>
            <span>View Resume</span>
          </a>
          <a 
            href="https://github.com/Hitesh-1501" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.03] transition-all flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/hitesh-badgujar-b5b489346/" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.03] transition-all flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>

        {/* --- MAIN TILES --- */}
        <div className="grid md:grid-cols-3 gap-6 items-start w-full">
          {/* Email Tile */}
          <motion.div 
            {...cardAnimation}
            onClick={handleCopyEmail}
            whileHover={{ y: -6, borderColor: "rgba(61,220,132,0.25)" }}
            className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-3xl p-6 shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[160px] relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500 tracking-wider">Communication Channel</span>
                <span className="text-[#3DDC84] text-sm">✉</span>
              </div>
              <h4 className="text-sm font-mono font-black text-slate-500 uppercase tracking-widest mb-1">Email Address</h4>
              <p className="text-base font-bold text-slate-200 group-hover:text-white transition-colors break-all">
                badgujarhitesh1501@gmail.com
              </p>
            </div>
            <span className="text-[10px] font-black uppercase text-[#3DDC84] tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
              📋 Click to copy address
            </span>
          </motion.div>

          {/* Location Tile */}
          <motion.div 
            {...cardAnimation}
            whileHover={{ y: -6, borderColor: "rgba(34,211,238,0.2)" }}
            className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-3xl p-6 shadow-2xl transition-all duration-300 min-h-[160px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500 tracking-wider">Geographic Region</span>
                <span className="text-cyan-400 text-sm">📍</span>
              </div>
              <h4 className="text-sm font-mono font-black text-slate-500 uppercase tracking-widest mb-1">Location</h4>
              <p className="text-base font-bold text-slate-200">
                Jalgaon, Maharashtra, India
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mt-4">IST (UTC +5:30)</span>
          </motion.div>

          {/* Availability Tile */}
          <motion.div 
            {...cardAnimation}
            whileHover={{ y: -6, borderColor: "rgba(168,85,247,0.2)" }}
            className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-3xl p-6 shadow-2xl transition-all duration-300 min-h-[160px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500 tracking-wider">Current Market Status</span>
                <span className="text-purple-400 text-sm">💼</span>
              </div>
              <h4 className="text-sm font-mono font-black text-slate-500 uppercase tracking-widest mb-1">Availability</h4>
              <p className="text-base font-bold text-slate-200 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC84] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC84]"></span>
                </span>
                Available for Android Internships
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mt-4">Open to Opportunity</span>
          </motion.div>
        </div>

        {/* --- LARGE RESUME DOWNLOAD PANEL --- */}
        <motion.div 
          {...cardAnimation}
          whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.08)" }}
          className="mt-6 w-full backdrop-blur-md bg-white/[0.01] border border-white/[0.04] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
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
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* --- SOCIAL LINKS DECK --- */}
        <div className="mt-16 w-full">
          <span className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase block mb-6">
            🔗 PROFESSIONAL CLOUD CONDUITS
          </span>
          
          <div className="grid sm:grid-cols-3 gap-4 w-full">
            {[
              { name: "LinkedIn", desc: "Connect professionally and view my experience.", path: "https://www.linkedin.com/in/hitesh-badgujar-b5b489346/", icon: <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
              { name: "GitHub", desc: "Explore my Android projects and repositories.", path: "https://github.com/Hitesh-1501", icon: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1" /></svg> },
              { name: "LeetCode", desc: "Follow my problem-solving and DSA journey.", path: "https://leetcode.com/u/hitesh_b1501/", icon: <svg className="w-5 h-5 text-[#FFA116]" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.411L7.11 5.826a1.373 1.373 0 00-.41.964c.003.362.145.708.397.961l4.42 4.419a1.373 1.373 0 002.327-.962V9.016s-2.126 0-3.385-.01c-1.26-.01-1.743-.513-1.743-1.144 0-.63.525-1.239 1.785-1.239h6.358c.84 0 1.371.42 1.371 1.239V22.8c0 .82-.531 1.2-1.371 1.2H4.23c-.841 0-1.371-.38-1.371-1.2V9.016c0-.82.53-1.24 1.371-1.24h2.155a1.373 1.373 0 100-2.745H4.23C1.904 5.031 0 6.917 0 9.22v13.56C0 25.083 1.903 27 4.23 27h15.54c2.327 0 4.23-1.917 4.23-4.22V9.22c0-2.303-1.903-4.189-4.23-4.189v-.62c0-.364-.145-.713-.404-.972l-2.918-2.918A1.374 1.374 0 0013.483 0z"/></svg> }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-md bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.07] rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between min-h-[130px]"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-extrabold text-slate-200">{social.name}</span>
                  {social.icon}
                </div>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed mt-2">{social.desc}</p>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mt-4 flex items-center gap-1">
                  Visit Profile ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIPBOARD NOTIFICATION TOAST --- */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] backdrop-blur-xl bg-slate-900/90 border border-[#3DDC84]/20 px-5 py-3 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 select-none pointer-events-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3ddc84]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-200">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SITE FOOTER --- */}
      <footer className="w-full bg-[#070b14] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-base font-black text-white tracking-tight">Hitesh Jitendra Badgujar</h5>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Android Developer • Jalgaon, Maharashtra • 2027 Graduate
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold text-slate-500 select-none">
            <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-xl transition-all group/up flex items-center gap-2 text-xs font-bold"
            title="Scroll Back To Top Boundary"
          >
            <span>Back To Top</span>
            <motion.span animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-xs">▲</motion.span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Contact;