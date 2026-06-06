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
    shadowColor: "rgba(61,220,132,"
  },
  {
    icon: <SiKotlin />,
    label: "Kotlin",
    // Repositioned to the right side to prevent clipping behind the Profile Photo
    position: "top-52 -right-24", 
    color: "text-[#7F52FF]",
    border: "border-[#7F52FF]/30",
    shadowColor: "rgba(127,82,255,"
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    position: "bottom-36 -left-20",
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
            y: [-10, 10, -10],
            rotate: [-4, 4, -4],
            // Upgrade Floating Pills Animations
            scale: [1, 1.08, 1],
            boxShadow: [
              `0 0 0px ${tech.shadowColor}0)`,
              `0 0 20px ${tech.shadowColor}0.25)`,
              `0 0 0px ${tech.shadowColor}0)`
            ]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`
            absolute
            ${tech.position}
            z-20
            rounded-full
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
            bg-black/60
            border
            ${tech.border}
          "
          >
            <div className={tech.color}>
              {tech.icon}
            </div>
            <span className={`text-sm font-medium ${tech.color}`}>
              {tech.label}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingTech;