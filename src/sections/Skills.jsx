import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Android Core",
    icon: (
      <svg className="w-5 h-5 text-[#3DDC84]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5M10.5 22.5H13.5M4.5 4.5H19.5M4.5 19.5H19.5M4.5 4.5V19.5M19.5 4.5V19.5" />
      </svg>
    ),
    description: "Native mobile development utilities.",
    revealDirection: "left",
    skills: [
      { name: "Kotlin", level: "Primary", glowColor: "rgba(127,82,255,0.25)" },
      { name: "Jetpack Compose", level: "Primary", glowColor: "rgba(61,220,132,0.25)" },
      { name: "Android SDK", level: "Strong", glowColor: "rgba(61,220,132,0.15)" },
      { name: "XML Layouts", level: "Strong", glowColor: "rgba(148,163,184,0.15)" },
      { name: "Material Design 3", level: "Strong", glowColor: "rgba(61,220,132,0.15)" },
      { name: "Python", level: "Strong", glowColor: "rgba(251,146,60,0.15)" }
    ]
  },
  {
    title: "Architecture & Core",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l12 5.25" />
      </svg>
    ),
    description: "App structural patterns and concurrency.",
    revealDirection: "bottom",
    skills: [
      { name: "MVVM Architecture", level: "Primary", glowColor: "rgba(129,140,248,0.25)" },
      { name: "Repository Pattern", level: "Primary", glowColor: "rgba(129,140,248,0.25)" },
      { name: "Kotlin Coroutines", level: "Primary", glowColor: "rgba(127,82,255,0.25)" },
      { name: "StateFlow & SharedFlow", level: "Primary", glowColor: "rgba(127,82,255,0.25)" },
      { name: "Advanced Architecture", level: "Learning", glowColor: "rgba(34,211,238,0.15)" }
    ]
  },
  {
    title: "Firebase & Backend",
    icon: (
      <svg className="w-5 h-5 text-[#FFCA28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description: "Cloud integration and structured backend frameworks.",
    revealDirection: "right",
    skills: [
      { name: "Firebase Auth", level: "Primary", glowColor: "rgba(255,202,40,0.25)" }, 
      { name: "Firestore Database", level: "Primary", glowColor: "rgba(255,202,40,0.25)" },
      { name: "Firebase Storage", level: "Primary", glowColor: "rgba(255,202,40,0.25)" },
      { name: "Cloud Messaging (FCM)", level: "Primary", glowColor: "rgba(255,202,40,0.25)" },
      { name: "REST API Integration", level: "Strong", glowColor: "rgba(96,165,250,0.15)" }
    ]
  },
  {
    title: "Libraries & Tools",
    icon: (
      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.3-5.3m5.3 5.3l4.5-4.5M5.3 5.3V2.25L2.25 5.3H5.3z" />
      </svg>
    ),
    description: "Development workflows and asset design.",
    revealDirection: "bottom",
    skills: [
      { name: "Retrofit (Networking)", level: "Primary", glowColor: "rgba(45,212,191,0.25)" },
      { name: "Room (Local Database)", level: "Primary", glowColor: "rgba(61,220,132,0.25)" },
      { name: "Figma (UI/UX Design)", level: "Primary", glowColor: "rgba(244,114,182,0.15)" },
      { name: "Git & GitHub Workflow", level: "Strong", glowColor: "rgba(255,255,255,0.1)" },
      { name: "WorkManager", level: "Primary", glowColor: "rgba(61,220,132,0.15)" },
      { name: "Flutter Ecosystem", level: "Learning", glowColor: "rgba(34,211,238,0.15)" }
    ]
  }
];

const getLevelBadgeStyles = (level) => {
  switch (level) {
    case "Primary": 
      return "bg-[#3DDC84]/10 text-[#3DDC84] border-[#3DDC84]/20";
    case "Strong": 
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    case "Learning": 
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    default: 
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen py-32 px-6 max-w-7xl mx-auto relative overflow-hidden flex flex-col justify-center border-t border-white/5 bg-[#0b1120]"
    >
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-cyan-500/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-[#3DDC84]/[0.02] blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="mb-20 max-w-3xl text-left">
        <span className="text-[#3DDC84] uppercase tracking-[0.4em] text-xs font-black block mb-4">
          Skills & Technologies
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Technologies I Use To Build <br />
          <span className="bg-gradient-to-r from-white via-slate-100 to-[#3DDC84] bg-clip-text text-transparent">
            Modern Android Applications
          </span>
        </h2>
        <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
          My primary focus is Android development using Kotlin, Jetpack Compose, Firebase, and modern Android architecture patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full items-start">
        {skillCategories.map((category, catIdx) => {
          const getDirectionalOffset = () => {
            if (category.revealDirection === "left") return { x: -40, y: 0 };
            if (category.revealDirection === "right") return { x: 40, y: 0 };
            return { x: 0, y: 40 };
          };

          const offset = getDirectionalOffset();

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: offset.x, y: offset.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.05, ease: "easeOut" }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
              className="backdrop-blur-md bg-slate-900/40 border border-white/[0.05] rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden group h-full flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3DDC84]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-semibold text-slate-500 mb-6 tracking-wide">
                {category.description}
              </p>

              <div className="grid gap-2.5 flex-grow">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      x: 4, 
                      backgroundColor: "rgba(255,255,255,0.02)",
                      boxShadow: `0 0 20px ${skill.glowColor || "rgba(255,255,255,0.03)"}`
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-white/[0.02] bg-white/[0.01] transition-all duration-200 group/item cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: skill.glowColor ? skill.glowColor.replace('0.25', '1').replace('0.15', '1') : '#fff' }} 
                      />
                      <span className="text-sm md:text-base font-bold text-slate-300 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <span className={`text-[9px] font-mono font-black uppercase px-2.5 py-1 rounded-md border tracking-wider transition-colors ${getLevelBadgeStyles(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;