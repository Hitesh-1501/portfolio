const stats = [
  {
    value: "7+",
    title: "Projects"
  },
  {
    value: "5+",
    title: "Hackathons"
  },
  {
    value: "4+",
    title: "Certificates"
  },
  {
    value: "Final",
    title: "Year"
  }
]

const HeroStats = () => {
  return (
    <div
      className="
      grid
      grid-cols-2
      lg:grid-cols-4
      gap-4
      text-center
      mt-12
    "
    >
      {stats.map((item) => (
        <div
          key={item.title}
          className="
          backdrop-blur-xl
          bg-white/[0.04]

          border
          border-white/10

          rounded-3xl

          px-8
          py-10

          text-center

          hover:-translate-y-2
          hover:border-[#3DDC84]/40

          transition-all
          duration-300
          "
        >
         <h3
            className="
            text-5xl
            font-black
            text-[#3DDC84]
            "
            >
            {item.value}
          </h3>

          <p
            className="
            text-slate-400
            mt-4
            text-sm
            tracking-wide
            "
          >
          {item.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default HeroStats