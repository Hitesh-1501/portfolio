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
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
              text-[#3DDC84]
              font-semibold
              tracking-widest
            "
            >
              ANDROID KOTLIN DEVELOPER
            </span>

            <h1
              className="
              text-6xl
              lg:text-7xl
              font-black
              mt-4
              leading-tight
            "
            >
              Hitesh
              <br />
              Badgujar
            </h1>

            <p
              className="
              text-xl
              text-slate-400
              mt-8
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
                px-8 py-4
                rounded-2xl
              "
              >
                Resume
              </a>

              <a
                href="#projects"
                className="
                border
                border-white/10
                px-8 py-4
                rounded-2xl
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
              text-2xl
              mt-10
            "
            >
              <a href={personalInfo.github}>
                <FaGithub />
              </a>

              <a href={personalInfo.linkedin}>
                <FaLinkedin />
              </a>

              <a href={personalInfo.leetcode}>
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