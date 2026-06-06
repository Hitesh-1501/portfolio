import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

import { SiLeetcode } from "react-icons/si"

import Container from "../components/Container"
import HeroStats from "../components/HeroStats"
import PhoneMockup from "../components/PhoneMockup"

import { personalInfo } from "../data/portfolioData"

const Hero = () => {
  return (
    <section
        className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        pt-34
      "
      >
      {/* Background */}
      <div
       className="
        absolute
        top-0
        left-0
        w-full
        h-full
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          top-20
          left-20
          w-[500px]
          h-[500px]
          bg-[#3DDC84]
          opacity-10
          blur-[180px]
        "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          bg-cyan-500
          opacity-10
          blur-[180px]
        "
        />
      </div>

      <Container>
        <div
          className="
          grid
          lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
        "
        >
          {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col loop"
            >
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
              text-[#3DDC84]
              uppercase
              tracking-[0.35em]
              text-sm
              font-semibold
              "
            >
              Welcome To My Portfolio
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              mt-6

              text-5xl
              md:text-6xl
              lg:text-7xl

              font-black
              leading-[1.1]
              "
            >
              <span className="text-slate-400">
                I'm
              </span>

              <br />

              <span
                className="
                bg-gradient-to-r
                from-white
                via-white
                to-[#3DDC84]
                bg-clip-text
                text-transparent
                "
              >
                Hitesh Badgujar
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="
              mt-6

              text-2xl
              md:text-3xl

              font-semibold
              text-slate-300
              "
            >
              Android Kotlin Developer
            </motion.h2>

            <p
             className="
              text-lg
              lg:text-xl
              text-slate-400
              mt-6
              leading-relaxed
              max-w-xl
              "
            >
              Building modern Android applications with Kotlin,
              Jetpack Compose, Firebase and AI-powered experiences.
            </p>

            {/* Buttons */}
            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-8
            "
            >
              <a
                href="/hitesh_resume.pdf"
                className="
                bg-[#3DDC84]
                text-black
                font-semibold
                px-8
                py-4
                rounded-2xl
                shadow-[0_0_30px_rgba(61,220,132,0.25)]
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(61,220,132,0.4)]
                transition-all
                duration-300
                "
              >
                Resume
              </a>

              <a
              href="#projects"
               className="
                border
                border-white/10
                px-8
                py-4
                rounded-2xl
                hover:border-[#3DDC84]
                hover:text-[#3DDC84]
                transition-all
                duration-300
                "
              >
                Projects
              </a>
            </div>

            {/* Social */}
            <div
              className="
              flex
              gap-6
              text-3xl
              mt-8
              "
            >
              <a
                href={personalInfo.github}
                className="
                w-12
                h-12

                rounded-full

                bg-white/[0.04]
                border
                border-white/10

                flex
                items-center
                justify-center

                hover:border-[#3DDC84]
                hover:bg-[#3DDC84]/10

                hover:-translate-y-1

                transition-all
                duration-300
                "
                > 
                <FaGithub />
              </a>

              <a href={personalInfo.linkedin}
               className="
                w-12
                h-12

                rounded-full

                bg-white/[0.04]
                border
                border-white/10

                flex
                items-center
                justify-center

                hover:border-[#3DDC84]
                hover:bg-[#3DDC84]/10

                hover:-translate-y-1

                transition-all
                duration-300
                "
              >
                <FaLinkedin />
              </a>

              <a href={personalInfo.leetcode}
                className="
                w-12
                h-12

                rounded-full

                bg-white/[0.04]
                border
                border-white/10

                flex
                items-center
                justify-center

                hover:border-[#3DDC84]
                hover:bg-[#3DDC84]/10

                hover:-translate-y-1

                transition-all
                duration-300
                "
              >
                <SiLeetcode />
              </a>
            </div>

            {/* Stats Wrapper Component */}
            <HeroStats />
          </motion.div>

          {/* Right */}
          <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [-10, 10, -10]
              }}
              transition={{
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
            <PhoneMockup />
          </motion.div>
        </div>
      </Container>

      <motion.div
      animate={{
        y: [0, 10, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      text-slate-500
      text-sm
      "
    >
      ↓ Scroll to Explore
    </motion.div>        
    </section>
  )
}

export default Hero