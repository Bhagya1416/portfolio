const educationData = [
  {
    year: "2024 - 2028",
    title: "B.Tech in AI & ML",
    place: "Aditya College of Engineering and Technology, Surampalem",
    stats: [{ label: "CGPA", value: "9.27" }],
  },

  {
    year: "2022 - 2024",
    title: "Intermediate (MPC)",
    place: "Pragati Junior College, Samarlakota",
    stats: [{ label: "Percentage", value: "98.1%" }],
  },

  {
    year: "2021 - 2022",
    title: "SSC",
    place: "Sri Vignan EM School, Samarlakota",
    stats: [{ label: "Percentage", value: "89.17" }],
  },
];

function Education() {
  return (
    <section id="education" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-20 gradient-text">
          Education
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-violet-500 ml-4">

          {educationData.map((item, index) => (
            <div key={index} className="mb-12 ml-10 relative">

              {/* DOT */}
              <div className="absolute -left-[50px] top-2 w-5 h-5 bg-violet-500 rounded-full border-4 border-[#050816]"></div>

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-lg hover:border-violet-500 transition duration-300">

                {/* TOP ROW */}
                <div className="flex items-center justify-between flex-wrap gap-3">

                  <span className="text-violet-400 font-semibold">
                    {item.year}
                  </span>

                  {/* CGPA / PERCENTAGE BADGE */}
                  {item.stats.map((s, i) => (
                    <div
                      key={i}
                      className="
                        px-3 py-1
                        rounded-full
                        bg-violet-500/10
                        border border-violet-500/20
                        text-xs
                        flex gap-1
                      "
                    >
                      <span className="text-gray-400">{s.label}:</span>
                      <span className="text-violet-300 font-semibold">
                        {s.value}
                      </span>
                    </div>
                  ))}

                </div>

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-bold mt-3">
                  {item.title}
                </h3>

                {/* PLACE */}
                <h4 className="text-gray-400 mt-2 text-sm md:text-base">
                  {item.place}
                </h4>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;