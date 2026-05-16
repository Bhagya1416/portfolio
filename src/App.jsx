import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import ScrollTop from "./components/ScrollTop";

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#050816] dark:text-white transition-colors duration-300 overflow-x-hidden px-3 sm:px-4 md:px-6">

      <SocialSidebar />

      <Navbar />

      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Education />

      <div id="contact" className="text-center py-20 px-4">

  {/* TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold gradient-text">
    Let's Connect & Collaborate!
  </h2>

  {/* SUBTEXT */}
  <p className="text-violet-400 mt-3 text-sm md:text-base">
    Reach out through my social platforms.
  </p>

  {/* ICON CARD (CLEAN SPACING) */}
  <div className="mt-5 sm:mt-6 flex justify-center">

    <div className="
      flex items-center gap-4 sm:gap-5
      px-5 py-3
      rounded-2xl
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      shadow-lg
      shadow-violet-500/10
      transition-all duration-300
      hover:scale-105
    ">

      <a href="mailto:narapareddybhagyalakshmi@gmail.com"
        className="social-icon hover:scale-110"
      >
        <MdEmail />
      </a>

      <a href="https://www.linkedin.com/in/bhagyalakshmi-narapareddy/"
        target="_blank"
        rel="noreferrer"
        className="social-icon hover:scale-110"
      >
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/Bhagya1416"
        target="_blank"
        rel="noreferrer"
        className="social-icon hover:scale-110"
      >
        <FaGithub />
      </a>

      <a href="https://instagram.com/_thesmurf._"
        target="_blank"
        rel="noreferrer"
        className="social-icon hover:scale-110"
      >
        <FaInstagram />
      </a>

    </div>

  </div>

</div>

      <ScrollTop />
      <Footer />

    </div>
  );
}

export default App;