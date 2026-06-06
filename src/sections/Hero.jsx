import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

import { SiLeetcode } from "react-icons/si"

import Container from "../components/Container"
import { personalInfo } from "../data/portfolioData"

import profileImage from "../assets/images/hitesh_photo.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background Blob 1 */}
      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        rounded-full
        bg-green-500/10
        blur-3xl
      "
      />

      {/* Background Blob 2 */}
      <div
        className="
        absolute
        bottom-20
        right-20
        w-72
        h-72
        rounded-full
        bg-sky-500/10
        blur-3xl
      "
      />

      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="
              text-green-400
              font-medium
              mb-4
            "
            >
              Android Developer
            </p>

            <h1
              className="
              text-5xl
              lg:text-7xl
              font-bold
              leading-tight
            "
            >
              {personalInfo.name}
            </h1>

            <h2
              className="
              text-slate-400
              text-xl
              lg:text-2xl
              mt-4
            "
            >
              {personalInfo.title}
            </h2>

            <p
              className="
              text-slate-300
              mt-6
              text-lg
              leading-relaxed
              max-w-xl
            "
            >
              {personalInfo.tagline}
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
                target="_blank"
                className="
                px-6
                py-3
                rounded-xl
                bg-green-500
                text-black
                font-semibold
                hover:scale-105
                transition
              "
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="
                px-6
                py-3
                rounded-xl
                border
                border-slate-700
                hover:bg-slate-800
                transition
              "
              >
                View Projects
              </a>

            </div>

            {/* Socials */}

            <div
              className="
              flex
              gap-6
              mt-8
              text-2xl
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

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
            flex
            justify-center
          "
          >

            <div
              className="
              relative
            "
            >

              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-green-500/20
                blur-3xl
              "
              />

              <img
                src={profileImage}
                alt="Hitesh"
                className="
                relative
                w-80
                h-80
                object-cover
                rounded-full
                border-4
                border-green-400
              "
              />

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  )
}

export default Hero