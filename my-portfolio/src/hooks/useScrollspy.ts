import { useState, useEffect } from "react";

const useScrollspy = (sectionIds: string[], offset: number = 0): string => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollspy;
