import { motion } from "framer-motion";
import profile from "../assets/images/hitesh_photo.png";

const ProfilePhoto = () => {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative block"
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Animated Outer Gradient Border */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#3DDC84]/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary Inner Pulse Ring */}
        <motion.div 
          className="absolute inset-1 rounded-full border border-[#3DDC84] bg-[#3DDC84]/5"
          animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Masked Photo Core Container */}
        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#3DDC84] shadow-[0_0_30px_rgba(61,220,132,0.3)] bg-[#0b0f19]">
          <img
            src={profile}
            alt="Hitesh Portfolio Display Headshot"
            className="w-full h-full object-cover object-[center_22%] rounded-full contrast-[1.02] brightness-[1.03] image-render-auto will-change-transform transform-gpu backface-hidden"          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;