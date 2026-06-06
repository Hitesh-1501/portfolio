import analytics from "../assets/images/analytics.png"
import FloatingTech from "./FloatingTech";
import ProfilePhoto from "./ProfilePhoto";
import { SiAndroid } from "react-icons/si";

const PhoneMockup = () => {
  return (
    <div
      className="
      relative
      w-[260px]
      lg:w-[300px]
      mx-auto
      
      /* Base tilted position */
      rotate-[-4deg]
      
      /* Smoothly resets to normal upright position on hover */
      hover:rotate-0
      hover:scale-[1.03]
      
      transition-all
      duration-500
      ease-out
      cursor-pointer
      z-10
      "
    >
      {/* Profile Photo Wrapper Container */}
      <div className="absolute -left-14 top-28 z-30 group/avatar">
        {/* Step 2: Android Developer Badge above the photo */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0b0f19]/90 border border-[#3DDC84]/40 text-[#3DDC84] text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md pointer-events-none transition-transform duration-300 group-hover/avatar:-translate-y-1">
          <SiAndroid className="text-xs" />
          <span>ANDROID DEVELOPER</span>
        </div>
        {/* Step 1: Profile Photo embedded inside Phone Area */}
        <ProfilePhoto />
      </div>

      {/* Featured Project Card */}
      <div
        className="
        absolute
        -top-8
        left-1/2
        -translate-x-1/2
        z-20

        backdrop-blur-xl
        bg-white/[0.04]
        border
        border-white/10
        rounded-2xl
        w-[250px]
        p-5
        text-center
        "
      >
        <p className="text-xs uppercase tracking-widest text-slate-400">
          FEATURED PROJECT
        </p>
        <h3
          className="
          text-2xl
          font-bold
          mt-2
          "
        >
          AI Expense Tracker
        </h3>

        <p
          className="
          text-sm
          text-slate-400
          mt-2
          "
        >
          AI Powered Personal Finance App
        </p>

        <p
          className="
          text-xs
          text-[#3DDC84]
          mt-3
          "
        >
          Gemini AI • Firebase • Compose
        </p>
      </div>

      {/* Glow Backdrop */}
      <div
        className="
        absolute
        inset-0
        bg-[#3DDC84]
        blur-[150px]
        opacity-30
        pointer-events-none
        "
      />

      <FloatingTech />

      {/* Phone Shell Container */}
      <div
          className="
          relative
          rounded-[40px]
          border
          border-white/10
          bg-black
          p-3
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]
          "
        >
        <img
          src={analytics}
          alt="AI Expense Tracker"
          className="
          rounded-[30px]
          w-full
          "
        />
      </div>

    </div>
  )
}

export default PhoneMockup