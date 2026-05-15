import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-white/70 dark:bg-[#050816]/70
        border-b border-black/10 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-violet-500 text-2xl font-bold gradient-text">
          My Portfolio
        </h1>

        {/* DESKTOP MENU (RIGHT SIDE) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto">
          <a href="#home" className="hover:text-violet-500 transition">Home</a>
          <a href="#projects" className="hover:text-violet-500 transition">Projects</a>
          <a href="#skills" className="hover:text-violet-500 transition">Skills</a>
          <a href="#education" className="hover:text-violet-500 transition">Education</a>
          <a href="#contact" className="hover:text-violet-500 transition">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl ml-3"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-[400px] py-6" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 text-sm font-medium">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;