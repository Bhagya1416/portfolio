import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function SocialSidebar() {

  return (

    <div className="fixed right-5 bottom-20 z-50 flex flex-col items-center gap-4">


    
       {/* Gmail */}

      <a
        href="mailto:narapareddybhagyalakshmi@gmail.com"
        className="social-icon"
      >
        <MdEmail />
      </a>



      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/bhagyalakshmi-narapareddy/"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaLinkedinIn />
      </a>

     

      {/* GitHub */}

      <a
        href="https://github.com/Bhagya1416"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaGithub />
      </a>

      {/* Instagram */}

      <a
        href="https://instagram.com/_thesmurf._"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialSidebar;