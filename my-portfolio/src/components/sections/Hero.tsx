import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer with 5 years of experience";

  // Use refs to maintain timer references between renders
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  // Typing animation effect
  useEffect(() => {
    setIsLoaded(true);

    // Fixed typing speeds
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 1000;

    // Start the typing animation
    const startTyping = () => {
      let i = 0;

      const typeCharacter = () => {
        if (i <= fullText.length) {
          setTypedText(fullText.substring(0, i));
          i++;
          timerRef.current = setTimeout(typeCharacter, typingSpeed);
        } else {
          // When typing is complete, pause then start deleting
          timerRef.current = setTimeout(startDeleting, pauseAfterTyping);
        }
      };

      typeCharacter();
    };

    // Start the deleting animation
    const startDeleting = () => {
      let i = fullText.length;

      const deleteCharacter = () => {
        if (i >= 0) {
          setTypedText(fullText.substring(0, i));
          i--;
          timerRef.current = setTimeout(deleteCharacter, deletingSpeed);
        } else {
          // When deleting is complete, pause then start typing again
          timerRef.current = setTimeout(startTyping, pauseAfterDeleting);
        }
      };

      deleteCharacter();
    };

    // Initialize animation
    startTyping();

    // Clean up all timers on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [fullText]);

  // Handle highlighting for 5 years" text
  const renderTypedText = () => {
    const beforeHighlight = "Software Developer with ";
    const highlight = "5 years";

    if (!typedText) return null;

    // Determine how to split and highlight the current text
    if (typedText.length <= beforeHighlight.length) {
      // Not yet reached the highlight section
      return (
        <>
          <span>{typedText}</span>
          <span className="animate-pulse">|</span>
        </>
      );
    } else if (typedText.length <= beforeHighlight.length + highlight.length) {
      // Currently typing the highlight section
      const regularPart = beforeHighlight;
      const highlightPart = typedText.substring(beforeHighlight.length);

      return (
        <>
          <span>{regularPart}</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            {highlightPart}
          </span>
          <span className="animate-pulse">|</span>
        </>
      );
    } else {
      // Text after the highlight section
      const regularPartBefore = beforeHighlight;
      const highlightPart = highlight;
      const regularPartAfter = typedText.substring(
        beforeHighlight.length + highlight.length
      );

      return (
        <>
          <span>{regularPartBefore}</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            {highlightPart}
          </span>
          <span>{regularPartAfter}</span>
          <span className="animate-pulse">|</span>
        </>
      );
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content container */}
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span>Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
                Yiqi Li
              </span>
            </h1>

            {/* Fixed-space container with invisible full text to reserve space */}
            <div className="relative h-16 mb-12">
              {/* Invisible text to maintain consistent width */}
              <span className="invisible text-2xl md:text-3xl">{fullText}</span>

              {/* Visible animated text positioned absolutely */}
              <div className="absolute top-0 left-0 text-2xl md:text-3xl">
                {renderTypedText()}
              </div>
            </div>

            {/* Added clear spacing above the paragraph */}
            <p
              className={`text-lg mb-8 max-w-xl transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              I build exceptional digital experiences that are fast, accessible,
              and responsive. My focus is creating clean, elegant solutions to
              complex problems.
            </p>
            <div
              className={`flex space-x-4 transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-6 py-3 border ${borderColor} rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:border-transparent transform hover:scale-105 transition-all`}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Avatar section */}
          <div
            className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${borderColor} animate-float`}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
