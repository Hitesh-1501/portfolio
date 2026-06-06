import { motion } from "framer-motion";
import profile from "../assets/images/hitesh_photo.png";

const ProfilePhoto = () => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="
      absolute
      -left-28
      top-24
      z-30
      "
    >
      <div
        className="
        relative
        w-40
        h-40
        rounded-full
        overflow-hidden

        border-4
        border-[#3DDC84]

        shadow-[0_0_60px_rgba(61,220,132,0.35)]
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

export default ProfilePhoto;