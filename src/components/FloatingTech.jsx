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
    position: "top-20 -right-16",
  },
  {
    icon: <SiKotlin />,
    label: "Kotlin",
    position: "top-40 -left-20",
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    position: "bottom-40 -left-16",
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
            border-white/10
          "
          >
            {tech.icon}
            <span>{tech.label}</span>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingTech;