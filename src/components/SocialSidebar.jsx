import { useEffect, useState } from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function SocialSidebar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
  const threshold = window.innerHeight * 0.3; // disappears a bit early
  setHide(window.scrollY > threshold);
};

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  if (hide) return null;

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300">

      <a href="mailto:narapareddybhagyalakshmi@gmail.com" className="social-icon active:scale-95">
        <MdEmail />
      </a>

      <a href="https://www.linkedin.com/in/bhagyalakshmi-narapareddy/" target="_blank" rel="noreferrer" className="social-icon active:scale-95">
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/Bhagya1416" target="_blank" rel="noreferrer" className="social-icon active:scale-95">
        <FaGithub />
      </a>

      <a href="https://instagram.com/_thesmurf._" target="_blank" rel="noreferrer" className="social-icon active:scale-95">
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialSidebar;