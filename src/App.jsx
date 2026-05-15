import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#050816] dark:text-white transition-colors duration-300">

      <SocialSidebar />

      <Navbar />

      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Education />

      <div id="contact" className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Let's Connect & Collaborate!
        </h2>

        <p className="text-violet-400 mt-4 text-sm md:text-base">
          Reach out through my social platforms.
        </p>
      </div>

      <ScrollTop />
      <Footer />

    </div>
  );
}

export default App;