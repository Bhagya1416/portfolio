import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Destination Tracker",
    description:
      "A smart college bus tracking web application that helps students monitor bus routes, destinations, and travel updates in real time through an interactive and user-friendly interface.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/Bhagya1416/DestinationTracker",
    live: "https://destinationtracker.vercel.app/",
    buttonText: "Live Demo",
    image:
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7",
  },
  {
    title: "Hybrid A*–PSO Robot Navigation",
    description:
      "A research-based mobile robot path planning system that combines A* search and Particle Swarm Optimization (PSO) to generate optimized, collision-free paths in structured grid environments.",
    tech: ["Python", "A*", "PSO", "Optimization", "AI"],
    github:
      "https://github.com/Bhagya1416/Hybrid_AStar-PSO_Robot_Navigation",
    live:
      "https://drive.google.com/file/d/11mHyn_RpS36in5J4CN3XLKIkq5uDsJ1T/view?usp=drivesdk",
    buttonText: "Research Paper",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-3 sm:px-6 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-violet-400 uppercase tracking-[5px] text-xs md:text-sm mb-3">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text">
            Projects
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          className="creativeSwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  group
                  mx-auto
                  max-w-[95%]
                  sm:max-w-full
                "
              >
                {/* IMAGE */}
                <div className="relative h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent"></div>

                  <div className="absolute top-3 sm:top-4 right-4 sm:right-5 text-4xl sm:text-5xl md:text-6xl font-black text-white/10">
                    0{index + 1}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6 md:p-10">

                  <h3 className="text-lg sm:text-xl md:text-4xl font-bold mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-6 md:leading-7 text-xs sm:text-sm md:text-base text-justify">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-5 md:mt-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-2
                          rounded-full
                          bg-violet-500/10
                          border border-violet-500/20
                          text-violet-300
                          text-[10px] sm:text-xs md:text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS (SIDE BY SIDE, NATURAL SIZE) */}
<div className="flex flex-row gap-3 mt-6 md:mt-8 flex-wrap">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="
      flex items-center justify-center gap-2
      bg-gradient-to-r from-violet-600 to-blue-600
      px-4 sm:px-5 py-2.5 sm:py-3
      rounded-xl
      hover:scale-105 transition duration-300
      text-xs sm:text-sm
    "
  >
    <FaGithub />
    GitHub
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="
      flex items-center justify-center gap-2
      border border-violet-500
      px-4 sm:px-5 py-2.5 sm:py-3
      rounded-xl
      hover:bg-violet-500 transition duration-300
      text-xs sm:text-sm
    "
  >
    <FaExternalLinkAlt />
    {project.buttonText}
  </a>

</div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DOTS */}
        <div className="custom-pagination mt-6 md:mt-8 flex justify-center"></div>

      </div>
    </section>
  );
}

export default Projects;