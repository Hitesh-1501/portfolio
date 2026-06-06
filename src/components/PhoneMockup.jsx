import analytics from "../assets/images/analytics.png"

const PhoneMockup = () => {
  return (
    <div
      className="
      relative
      w-[250px]
      lg:w-[270px]
      mx-auto
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

        px-4
        py-2
        text-center
        "
      >
        <p className="text-xs text-slate-400">
          FEATURED PROJECT
        </p>

        <h3 className="font-semibold text-lg">
          AI Expense Tracker
        </h3>

        <p className="text-xs text-[#3DDC84]">
          Gemini AI • Firebase • Compose
        </p>
      </div>

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-[#3DDC84]
        blur-[120px]
        opacity-20
        "
      />

      {/* Phone */}
      <div
        className="
        relative
        rounded-[40px]
        border
        border-white/10
        bg-black
        p-3
        shadow-2xl
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