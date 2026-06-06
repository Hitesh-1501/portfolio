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
      mt-12
    "
    >
      {stats.map((item) => (
        <div
          key={item.title}
          className="
          backdrop-blur-xl
          bg-white/[0.03]
          border
          border-white/10
          rounded-2xl
          p-5
        "
        >
          <h3 className="text-3xl font-bold text-[#3DDC84]">
            {item.value}
          </h3>

          <p className="text-slate-400">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default HeroStats