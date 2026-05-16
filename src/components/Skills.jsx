const skills = [
  "Python",
  "Artificial Intelligence",
  "Machine Learning",
  "React.js",
  "Java",
  "Full-Stack Development",
  "UI/UX Design",
  "Git & GitHub",
  "Figma",
  "Video Editing",
];

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-xl

                px-3 py-4 sm:py-5 md:py-6

                text-center
                text-xs sm:text-sm md:text-base

                flex items-center justify-center

                min-h-[70px] sm:min-h-[80px] md:min-h-[90px]

                hover:border-violet-500
                hover:-translate-y-1

                transition duration-300
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;