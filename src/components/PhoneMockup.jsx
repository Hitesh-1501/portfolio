import analytics from "../assets/images/analytics.png"
import FloatingTech from "./FloatingTech";

const PhoneMockup = () => {
  return (
    <div
      className="
      relative
      w-[260px]
      lg:w-[300px]

      mx-auto

      rotate-[-4deg]
      "
    >

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
        w - [250px]
        p- 5
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

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-[#3DDC84]
        blur-[150px]
        opacity-30
        "
      />

      <FloatingTech />

      {/* Phone */}
      <div
          className="
          relative

          rounded-[40px]

          border
          border-white/10

          bg-black

          p-3

          shadow-[0_40px_120px_rgba(0,0,0,0.6)]

          hover:rotate-0
          hover:scale-105

          transition-all
          duration-500
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