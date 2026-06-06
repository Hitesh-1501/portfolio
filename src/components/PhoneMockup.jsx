import analytics from "../assets/images/analytics.png"

const PhoneMockup = () => {
  return (
    <div
      className="
      relative
      w-[320px]
      mx-auto
    "
    >
      <div
        className="
        absolute
        inset-0
        bg-[#3DDC84]
        blur-[120px]
        opacity-20
      "
      />

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