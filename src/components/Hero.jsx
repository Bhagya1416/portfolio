import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (

    <section
      id="home"
      className="min-h-screen flex items-center px-4 md:px-8 pt-20"
    >

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          flex
          flex-row
          items-center
          justify-between
          gap-5
        "
      >

        {/* LEFT IMAGE */}

<motion.div
  initial={{ opacity:0, x:-50 }}
  animate={{ opacity:1, x:0 }}
  transition={{ duration:1 }}
  className="
    w-[40%]
    md:w-[45%]
    flex
    justify-center
  "
>

  <div className="relative">

    {/* Glow */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-violet-600
        to-blue-600
        rounded-full
        blur-3xl
        opacity-40
      "
    ></div>

    {/* Image Container */}

    <div
      className="
        relative
        w-[150px]
        h-[150px]
        sm:w-[200px]
        sm:h-[200px]
        md:w-[360px]
        md:h-[360px]
        rounded-full
        overflow-hidden
        border-4
        border-violet-500
        shadow-2xl
        bg-white
      "
    >

      <img
        src={profile}
        alt="profile"
        className="
          w-full
          h-full
          object-cover
        "
      />

    </div>

  </div>

</motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="
            w-[60%]
            md:w-[55%]
          "
        >

          <p className="text-violet-400 text-xs sm:text-sm md:text-lg mb-2">
            Hello, I'm
          </p>

          <h1
            className="
              text-2xl
              sm:text-4xl
              md:text-7xl
              font-bold
              leading-tight
              gradient-text
            "
          >
            Bhagya Lakshmi Narapareddy
          </h1>

          {/* TYPEWRITER */}

          <div
            className="
              mt-3
              text-sm
              sm:text-xl
              md:text-4xl
              font-semibold
              text-gray-300
            "
          >

            <TypeAnimation
              sequence={[
                "Aspiring AI/ML Engineer",
                2000,
                "Python Developer",
                2000,
                "Robotics & Intelligent Systems Enthusiast",
                2000,
                "Designer & Video Editor",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              text-gray-400
              leading-6
              md:leading-8
              text-xs
              sm:text-sm
              md:text-lg
            "
          >

            I build intelligent AI/ML systems that turn data into practical, real-world solutions through prediction, automation, and smart decision-making. I’m also curious about robotics and how machines think and act, and I relax by editing videos, which keeps my creativity active alongside coding.

          </p>

          {/* RESUME BUTTON */}

          <div className="mt-5 md:mt-7">

            <a
              href="https://drive.google.com/file/d/1hN5E711FoLnUHTWpYaEnUzj9TMWV8iqY/view?usp=drivesdk"
              target="_self"
              className="
                inline-block
                bg-gradient-to-r
                from-violet-600
                to-blue-600
                px-4
                sm:px-5
                md:px-7
                py-2
                md:py-3
                rounded-xl
                hover:scale-105
                transition
                duration-300
                text-xs
                sm:text-sm
                md:text-base
                font-medium
                shadow-lg
                shadow-violet-500/20
              "
            >
              View Resume
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;