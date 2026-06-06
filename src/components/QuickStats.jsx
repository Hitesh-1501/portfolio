import { motion } from "framer-motion"

const stats = [
  {
    value: "7+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Hackathons & Events",
  },
  {
    value: "4+",
    label: "Certifications",
  },
  {
    value: "Final",
    label: "Year Student",
  },
]

const QuickStats = () => {
  return (
    <section className="py-12">
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {stats.map((stat) => (
          <motion.div
            whileHover={{
              y: -8,
            }}
            key={stat.label}
            className="
              backdrop-blur-lg
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              text-center
            "
          >
            <h3
              className="
                text-green-400
                text-3xl
                font-bold
              "
            >
              {stat.value}
            </h3>

            <p className="text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default QuickStats