// src/components/common/BackToTop.tsx
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50
            bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600
            transform hover:scale-110 transition-all duration-300`}
          aria-label="Back to top"
        >
          <ChevronUp size={24} className="text-white" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
