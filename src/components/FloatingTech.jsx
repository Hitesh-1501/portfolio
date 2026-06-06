import { motion } from "framer-motion";
import {
  SiAndroid,
  SiKotlin,
  SiFirebase,
} from "react-icons/si";

const techs = [
  {
    icon: <SiAndroid />,
    label: "Android",
    position: "top-20 -right-20",
    color: "text-[#3DDC84]",
    border: "border-[#3DDC84]/30",
  },
  {
    icon: <SiKotlin />,
    label: "Kotlin",
    position: "top-44 -left-24",
    color: "text-[#7F52FF]",
    border: "border-[#7F52FF]/30",
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    position: "bottom-40 -left-24",
    color: "text-[#FFCA28]",
    border: "border-[#FFCA28]/30",
  },
];

const FloatingTech = () => {
  return (
    <>
      {techs.map((tech, index) => (
        <motion.div
          key={tech.label}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`
            absolute
            ${tech.position}
            z-20
          `}
        >
          <div
            className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            backdrop-blur-xl
            bg-white/[0.05]
            border
            ${tech.border}
          "
          >
            <div className={tech.color}>
              {tech.icon}
            </div>
            <span className={tech.color}>
              {tech.label}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingTech;