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
          gap-20
          items-center
        "
        >
          {/* Left */}

          <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [-10, 10, -10]
              }}
              transition={{
                opacity: {
                  duration: 0.8
                },
                x: {
                  duration: 0.8
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
          >
            <p
              className="
              text-[#3DDC84]
              font-semibold
              tracking-[0.2em]
              text-sm
              mb-4
            "
            >
              ANDROID KOTLIN DEVELOPER
            </p>
            <h1
              className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-none

              bg-gradient-to-r
              from-white
              via-slate-100
              to-[#3DDC84]

              bg-clip-text
              text-transparent
              "
            >
              Hitesh
              <br />
              Badgujar
            </h1>

            <p
             className="
              text-lg
              lg:text-xl
              text-slate-400
              mt-10
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
              mt-10
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
              mt-10
              "
            >
              <a
                href={personalInfo.github}
                className="
                hover:text-[#3DDC84]
                hover:-translate-y-1
                transition-all
                duration-300
                "> 
                <FaGithub />
              </a>

              <a href={personalInfo.linkedin}
               className="
                hover:text-[#3DDC84]
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                <FaLinkedin />
              </a>

              <a href={personalInfo.leetcode}
                className="
                hover:text-[#3DDC84]
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                <SiLeetcode />
              </a>
            </div>

            <HeroStats />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero