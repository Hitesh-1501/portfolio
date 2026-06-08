import { motion } from "framer-motion";

const FloatingParticles = ({ count = 25 }) => {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full z-10">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 3;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
       
        const isGreen = Math.random() > 0.4;
        const bgColor = isGreen ? "bg-[#3DDC84]" : "bg-slate-300";

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-40 mix-blend-screen ${bgColor}`}
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              y: [0, Math.random() * -120 - 60, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 12, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;