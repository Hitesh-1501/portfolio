import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { numericTarget: 7, suffix: "+", title: "Projects" },
  { numericTarget: 5, suffix: "+", title: "Hackathons" },
  { numericTarget: 4, suffix: "+", title: "Certificates" },
  { isText: true, textValue: "Final", title: "Year Student" }
];

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 Seconds
    const totalFrames = 60;
    const frameDuration = duration / totalFrames;
    const increment = target / totalFrames;

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counterInterval);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameDuration);

    return () => clearInterval(counterInterval);
  }, [target]);

  return <>{count}</>;
};

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl mt-12 z-10">
      {stats.map((item) => (
        <div
          key={item.title}
          className="backdrop-blur-md bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center aspect-square hover:-translate-y-1.5 hover:border-[#3DDC84]/30 hover:bg-white/[0.04] transition-all duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-black text-[#3DDC84] tracking-tight">
            {item.isText ? (
              item.textValue
            ) : (
              <AnimatedCounter target={item.numericTarget} />
            )}
            {!item.isText && item.suffix}
          </h3>

          <p className="text-slate-400 mt-1 text-xs md:text-sm tracking-wide font-medium text-center">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;