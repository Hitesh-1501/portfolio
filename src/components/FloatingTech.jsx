import { motion } from "framer-motion";
import { SiAndroid, SiKotlin, SiFirebase } from "react-icons/si";

const techs = [
  {
    icon: <SiAndroid />,
    label: "Android",
    position: "top-24 -right-16 md:-right-20",
    color: "text-[#3DDC84]",
    border: "border-[#3DDC84]/30",
    shadowColor: "rgba(61,220,132,"
  },
  {
    icon: <SiKotlin />,
    label: "Kotlin",
    position: "top-56 -right-20 md:-right-24", 
    color: "text-[#7F52FF]",
    border: "border-[#7F52FF]/30",
    shadowColor: "rgba(127,82,255,"
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    position: "bottom-36 -left-16 md:-left-20",
    color: "text-[#FFCA28]",
    border: "border-[#FFCA28]/30",
    shadowColor: "rgba(255,202,40,"
  },
];

const FloatingTech = () => {
  return (
    <>
      {techs.map((tech, index) => (
        <motion.div
          key={tech.label}
          animate={{
            y: [-8, 8, -8],
            rotate: [-3, 3, -3],
            scale: [1, 1.05, 1],
            boxShadow: [
              `0 4px 12px ${tech.shadowColor}0.1)`,
              `0 12px 24px ${tech.shadowColor}0.25)`,
              `0 4px 12px ${tech.shadowColor}0.1)`
            ]
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${tech.position} z-40 rounded-full`}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-black/75 border style-inject ${tech.border}">
            <div className={tech.color}>{tech.icon}</div>
            <span className={`text-sm font-semibold tracking-wide ${tech.color}`}>
              {tech.label}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingTech;