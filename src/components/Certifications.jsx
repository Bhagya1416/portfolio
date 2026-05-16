import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Creathon Participation",
    issuer: "EDC & IIC",
    year: "21 April 2025",
    link:
      "https://drive.google.com/file/d/1VF5SlViT21pKCcc8TK-yItB62vNriHnF/view?usp=drivesdk",
  },
  {
    title: "Aideathon Participation",
    issuer: "Aditya University",
    year: "16 September 2025",
    link:
      "https://drive.google.com/file/d/1NBhvnPmj3dPJe19d0DVl8MNvewOCsuVf/view?usp=drivesdk",
  },
  {
    title: "Oracle Generative AI Certification",
    issuer: "Oracle",
    year: "26 October 2025",
    link:
      "https://drive.google.com/file/d/1_snhJ5N8Yk-TTlM6cT2DBbckJREutGp5/view?usp=drivesdk",
  },
  {
    title: "HackSprint Participation",
    issuer: "GeeksforGeeks",
    year: "11 December 2025",
    link:
      "https://drive.google.com/file/d/1a1EPaW-MtpEz-szSrCVs2YMa3mEPAMbW/view?usp=drivesdk",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    year: "28 December 2025",
    link:
      "https://drive.google.com/file/d/1ajZv4ZOxqdQCWZJZzGKQDtgXXfn5br0U/view?usp=drivesdk",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco",
    year: "7 January 2026",
    link:
      "https://drive.google.com/file/d/1cxVnI754Ok-DRYz8sOypAl-X6ER27bpi/view?usp=drivesdk",
  },
  {
    title: "Quantum Fundamentals Certification",
    issuer: "WISER, Amaravati Quantum Valley & Qubitech",
    year: "22 February 2026",
    link:
      "https://1drv.ms/i/c/6f1033271cedc1a5/IQBGxhClNdGEQ5Tibe7lrOZMAQt6hEoDtvdJLgM0DIUgei4?e=mrXVqo",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="w-full max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <p className="text-violet-400 uppercase tracking-[4px] text-[11px] mb-2">
            Achievements
          </p>

          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Certifications
          </h2>
        </div>

        {/* MAIN CONTAINER */}
        <div className="rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

          {certifications.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-between
                gap-4

                p-4 md:p-5

                border-b border-white/10
                last:border-none

                hover:bg-white/[0.03]
                transition duration-300
              "
            >

              {/* LEFT SIDE */}
              <div className="flex gap-3 items-start flex-1 min-w-0">

                {/* ICON */}
                <div className="min-w-[42px] h-[42px] rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-lg">
                  <FaAward />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">

                  <h3 className="text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    {item.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex gap-2 mt-2 flex-wrap">

                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-[11px]">
                      {item.issuer}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-[11px]">
                      {item.year}
                    </span>

                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  flex-shrink-0
                  flex
                  items-center
                  gap-1

                  px-3 py-2
                  rounded-lg

                  bg-gradient-to-r from-violet-600 to-blue-600

                  text-xs
                  whitespace-nowrap

                  hover:scale-105
                  transition duration-300
                "
              >
                View <FaExternalLinkAlt size={12} />
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;