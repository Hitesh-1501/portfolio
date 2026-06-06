import { motion } from "framer-motion";
import profile from "../assets/images/hitesh_photo.png";

const ProfilePhoto = () => {
  return (
    <motion.div
      animate={{
        y: [-6, 6, -6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative block"
    >
      <div
        className="
        relative
        w-28
        h-28
        rounded-full
        overflow-hidden
        border-4
        border-[#3DDC84]
        shadow-[0_0_40px_rgba(61,220,132,0.3)]
        "
      >
        <img
          src={profile}
          alt="Hitesh"
          className="
          w-full
          h-full
          object-cover
          "
        />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto