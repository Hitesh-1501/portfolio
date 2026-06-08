import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import analytics from "../assets/images/analytics.png";
import FloatingTech from "./FloatingTech";
import ProfilePhoto from "./ProfilePhoto";
import { SiAndroid } from "react-icons/si";

const PhoneMockup = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-[280px] lg:w-[320px] mx-auto perspective-1000 z-10"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
        animate={{ scale: isHovered ? 1.04 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-full transition-shadow duration-500 rounded-[40px]"
      >
        
        <div 
          className="absolute -left-12 top-28 z-50 group/avatar" 
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#0b0f19]/95 border border-[#3DDC84]/40 text-[#3DDC84] text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md pointer-events-none">
            <SiAndroid className="text-xs animate-pulse" />
            <span>ANDROID DEVELOPER</span>
          </div>
          <ProfilePhoto />
        </div>

        
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl w-[250px] p-4 text-center shadow-2xl"
          style={{ transform: "translateZ(30px)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#3DDC84]">
            FEATURED PROJECT
          </p>
          <h3 className="text-xl font-black text-white mt-1">AI Expense Tracker</h3>
          <p className="text-xs text-slate-400 mt-1">AI Powered Personal Finance App</p>
          <p className="text-[11px] font-mono text-cyan-400 mt-2">Gemini AI • Firebase • Compose</p>
        </div>

       
        <div className="absolute inset-0 bg-[#3DDC84]/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <FloatingTech />

       
        <div className="relative rounded-[40px] border border-white/10 bg-black p-3 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-white/15">
          <img
            src={analytics}
            alt="AI Expense Tracker Dashboard Representation View"
            className="rounded-[30px] w-full block object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;