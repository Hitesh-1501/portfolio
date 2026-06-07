import { motion } from "framer-motion";

const FloatingParticles = ({ count = 15 }) => {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // Random sizes between 2px and 6px
        const startX = Math.random() * 100; // Left offset percentage
        const startY = Math.random() * 100; // Top offset percentage
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3DDC84]/20"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              y: [0, Math.random() * -80 - 40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 8, // 8s to 16s
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