import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        right-4 sm:right-6 bottom-4 sm:bottom-6
        z-50

        w-9
        h-9

        rounded-full
        bg-gradient-to-r
        from-violet-600
        to-blue-600

        flex
        items-center
        justify-center

        text-white
        shadow-lg
        shadow-violet-500/30

        transition-all
        duration-300
        hover:scale-110

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={12} />
    </button>
  );
}

export default ScrollTop;