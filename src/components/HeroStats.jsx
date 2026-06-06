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
      sm:grid-cols-4
      gap-4
      w-full
      max-w-xl
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
          rounded-2xl
          p-4
          flex
          flex-col
          justify-center
          items-center
          aspect-square
          hover:-translate-y-1.5
          hover:border-[#3DDC84]/40
          transition-all
          duration-300
          "
        >
         <h3
            className="
            text-2xl
            md:text-3xl
            font-black
            text-[#3DDC84]
            tracking-tight
            "
            >
            {item.value}
          </h3>

          <p
            className="
            text-slate-400
            mt-1
            text-xs
            md:text-sm
            tracking-wide
            font-medium
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