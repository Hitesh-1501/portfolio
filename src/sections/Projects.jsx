import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: "featured-1",
    title: "AI Expense Tracker",
    tagline: "AI-Powered Personal Finance Management Application",
    category: "aiml",
    tag: "Featured Project",
    description: "A modern Android application that helps users manage expenses, analyze spending patterns, track budgets, automate recurring payments, scan receipts using AI, and synchronize data securely with Firebase.",
    tech: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "WorkManager", "Firebase", "Gemini AI", "Vico Charts"],
    metrics: { "AI Capability": "Receipt Scanning", "Sync Layer": "Cloud Firestore" },
    github: "https://github.com/Hitesh-1501/AIExpenseTracker",
    isFeatured: true
  },
  {
    id: "featured-2",
    title: "TrenNex",
    tagline: "Modern Android E-Commerce Application",
    category: "android",
    tag: "Featured Project",
    description: "A native Android e-commerce application that enables users to browse products, search categories, manage wishlists, save collections, authenticate with phone OTP, and manage delivery addresses using Google Maps and Places APIs.",
    tech: ["Kotlin", "Android SDK", "XML", "Firebase Auth", "Room Database", "Retrofit", "Google Maps & Places", "Coroutines"],
    metrics: { "Authentication": "Phone OTP Auth", "Location API": "Google Maps Sync" },
    github: "https://github.com/Hitesh-1501/Trennex-App",
    isFeatured: true
  },
  {
    id: 3,
    title: "NoteWise AI",
    tagline: "AI-Powered Note Transformation Application",
    category: "aiml",
    tag: "AI App",
    description: "Transforms lengthy notes into concise summaries, simplified explanations, and structured bullet points using Gemini AI while storing data locally with Room Database.",
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM", "Retrofit", "Gemini API"],
    metrics: { "AI Processing": "Summaries & Bullets" },
    github: "https://github.com/Hitesh-1501/ainotesummarizer",
    isFeatured: false
  },
  {
    id: 4,
    title: "Elevate AI",
    tagline: "Gemini-Powered Android Chatbot",
    category: "aiml",
    tag: "AI Chat",
    description: "A modern Android chatbot application powered by Google Gemini, offering intelligent conversations, voice input, authentication, streaming responses, and persistent chat history.",
    tech: ["Kotlin", "Firebase Realtime DB", "Gemini API", "Material Design 3", "MVVM", "Coroutines & Flow"],
    metrics: { "UI Streaming": "Flow Response" },
    github: "https://github.com/Hitesh-1501/Elevate-AI",
    isFeatured: false
  },
  {
    id: 5,
    title: "ProjeManag",
    tagline: "Trello-Inspired Project Management Application",
    category: "android",
    tag: "Management Platform",
    description: "An Android project management platform inspired by Trello that helps teams organize work through boards, task lists, cards, labels, due dates, and collaborative member management.",
    tech: ["Kotlin", "Firebase Auth", "Firestore", "Firebase Storage", "FCM", "Retrofit", "ViewBinding"],
    metrics: { "Real-time Alerts": "FCM Push Notif" },
    github: "https://github.com/Hitesh-1501/TrelloClone",
    isFeatured: false
  },
  {
    id: 6,
    title: "DailyScope News",
    tagline: "Modern News & Headlines Application",
    category: "android",
    tag: "News Utility",
    description: "Delivers top headlines, category-based browsing, global news search, and offline favorite article management through a clean single-activity architecture.",
    tech: ["Kotlin", "Room Database", "Retrofit", "NewsAPI", "RecyclerView", "ViewBinding", "SharedPreferences"],
    metrics: { "Architecture": "Single-Activity" },
    github: "https://github.com/Hitesh-1501/DailyScopeNewsApp",
    isFeatured: false
  },
  {
    id: 7,
    title: "TrenNex UI/UX Case Study",
    tagline: "E-Commerce Mobile App Design in Figma",
    category: "uiux",
    tag: "UI/UX Case Study",
    description: "A complete UI/UX case study designed in Figma focusing on e-commerce user flows, mobile shopping experiences, Material Design principles, and Android-ready interface design.",
    tech: ["Figma", "Material Design", "Design Systems", "Typography", "Color Systems", "Mobile UX"],
    metrics: { "Design Assets": "Android Ready Layouts" },
    github: "https://github.com/Hitesh-1501/TrenNex-UI-UX",
    isFeatured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectData.filter(project => {
    if (filter === "all") return true;
    if (filter === "android") return project.category === "android";
    if (filter === "aiml") return project.category === "aiml";
    return true;
  });

  return (
    <section 
      id="projects" 
      className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
    >
      {/* Background Neon Canvas Lighting */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#3DDC84]/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Main Section Header */}
      <div className="mb-16 max-w-3xl text-left">
        <span className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black block mb-4">
          My Creations
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Featured Engineering Projects & <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-[#3DDC84] bg-clip-text text-transparent">
            Mobile Software Architectures
          </span>
        </h2>
        <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
          An overview of production-ready applications, intelligent systems, and comprehensive technical case studies.
        </p>
      </div>

      {/* Filter Navigation Tab Bar */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.04] pb-4">
        {[
          { id: "all", label: "All Projects" },
          { id: "android", label: "Android Apps" },
          { id: "aiml", label: "AI/ML Systems" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 outline-none select-none ${
              filter === tab.id ? "text-[#3DDC84]" : "text-slate-400 hover:text-white"
            }`}
          >
            {filter === tab.id && (
              <motion.span
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-[#3DDC84]/10 border border-[#3DDC84]/20 rounded-xl"
                transition={{ type: "spring", stiffness: 240, damping: 28 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 🚀 SUB-SECTION: FEATURED HERO PROJECTS DECK */}
      {filter === "all" && (
        <div className="mb-12 flex flex-col gap-6">
          <span className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase block">
            ⭐ STAR FEATURED ENTERPRISES
          </span>
          <div className="grid lg:grid-cols-2 gap-6 w-full items-stretch">
            {projectData.filter(p => p.isFeatured).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(61,220,132,0.3)",
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(61,220,132,0.05)"
                }}
                className="backdrop-blur-xl bg-gradient-to-b from-slate-900/50 to-slate-900/20 border border-white/[0.08] rounded-3xl p-6 md:p-8 transition-all duration-400 shadow-2xl relative overflow-hidden flex flex-col group justify-between"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3DDC84]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-black uppercase text-black bg-[#3DDC84] px-3 py-1 rounded-md tracking-wider shadow-[0_0_15px_rgba(61,220,132,0.3)]">
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-cyan-400">CORE ARCHITECTURE</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-[#3DDC84] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 mb-4 font-sans tracking-wide italic">
                    "{project.tagline}"
                  </p>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-semibold mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] mb-6 shadow-inner">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[9px] font-mono font-black uppercase text-slate-500 tracking-wider">{key}</span>
                        <span className="text-xs font-extrabold text-slate-200 mt-1">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((item) => (
                      <span key={item} className="text-[10px] md:text-xs font-bold text-[#3DDC84] bg-[#3DDC84]/5 border border-[#3DDC84]/10 px-2.5 py-1 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black text-slate-300 hover:text-white transition-colors group/link">
                      <svg className="w-4 h-4 transition-transform group-hover/link:rotate-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <span>Repository Resource</span>
                    </a>
                    <span className="text-xs font-bold text-[#3DDC84] flex items-center gap-1">
                      Production Ready
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-ping" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 🚀 SUB-SECTION: DYNAMIC SCROLL GRID MATRIX FOR GENERAL DEVELOPMENT BUILDS */}
      <div className="mt-6 flex flex-col gap-6">
        {filter === "all" && (
          <span className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase block">
            📁 REPOSITORY DEPLOYMENTS & UTILITIES
          </span>
        )}
        
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.filter(p => !p.isFeatured).map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -5,
                  borderColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)"
                }}
                className="backdrop-blur-md bg-slate-900/30 border border-white/[0.05] rounded-3xl p-6 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col group justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-center mb-3.5">
                    <span className="text-[9px] font-mono font-black uppercase text-slate-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-md tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 font-bold">PROJECT MODULE</span>
                  </div>

                  <h4 className="text-xl font-black text-white tracking-tight mb-1 group-hover:text-[#3DDC84] transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-500 mb-3 block truncate">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] md:text-[10px] font-bold text-slate-400 bg-white/[0.01] border border-white/[0.03] px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.03]">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-black text-slate-400 hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 items 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                    
                    <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#3DDC84] group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
};

export default Projects;