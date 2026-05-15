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
    <section id="skills" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500 hover:-translate-y-2 transition"
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