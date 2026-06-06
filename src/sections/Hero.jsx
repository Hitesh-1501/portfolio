import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

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
      {/* Background Grid Globs */}
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
          {/* Left Column Text details */}
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
            <TypeAnimation
              sequence={[
                "Android Developer",
                1500,
                "Jetpack Compose Developer",
                1500,
                "Firebase Developer",
                1500,
                "Kotlin Developer",
                1500,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="
              text-2xl
              md:text-3xl
              font-semibold
              text-slate-300
              "
            />
            </motion.h2>

            {/* Step 5: Premium Description Variant */}
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
              Final-year Computer Science student specializing in Android development, Jetpack Compose, Firebase, and AI-powered mobile applications.
            </p>

            {/* Buttons UI actions */}
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

            {/* Social Anchor Nodes */}
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

                transition-all[cite: 3, 6, 9]
                duration-300
                "
              >
                <SiLeetcode />
              </a>
            </div>

            {/* Metrics Counters */}
            <HeroStats />
          </motion.div>

          {/* Right Column Phone presentation wrapper layout */}
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

      {/* Step 3: Premium Mouse Outline Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] text-slate-500 font-bold uppercase">
          SCROLL
        </span>
        <div className="w-[20px] h-[32px] border-2 border-slate-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.2, 1]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-2 bg-[#3DDC84] rounded-full"
          />
        </div>
      </div>      
    </section>
  )
}

export default Hero