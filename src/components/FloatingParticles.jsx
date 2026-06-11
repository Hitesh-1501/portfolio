import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const FloatingParticles = memo(({ count = 20 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      isGreen: Math.random() > 0.4,
      moveY: Math.random() * -100 - 40,
      moveX: Math.random() * 40 - 20,
      duration: Math.random() * 8 + 10,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full opacity-40 mix-blend-screen ${
            p.isGreen ? "bg-[#3DDC84]" : "bg-slate-300"
          }`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.startX}%`,
            top: `${p.startY}%`,
            // GPU-accelerate each particle
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

export default FloatingParticles;