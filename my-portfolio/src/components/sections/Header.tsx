// Header.tsx
import React, { useState } from "react";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../common/Logo";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const secondaryBgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-100";

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-10 ${bgColor} shadow-md`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* Logo with gradient */}
            <Code
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500"
              size={24}
            />
            <span className="text-xl font-bold">
              <Logo />
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500"
                    : ""
                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-400 transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme toggle and contact icons */}
          <div className="flex items-center space-x-4">
            {/* Contact Icons - Always white in dark mode */}
            <div className="hidden sm:flex items-center space-x-3 mr-2">
              <a
                href="https://github.com/SmartRenaldo"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Github
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yiqi-li-56b826234/"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Linkedin
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
              <a
                href="mailto:yiqil.inbox@gmail.com"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Mail
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-purple-400/20 transition-colors"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 hover:text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${secondaryBgColor} py-2`}>
          <div className="px-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Contact icons for mobile menu */}
            <div className="flex justify-start space-x-4 py-2 px-3">
              <a
                href="https://github.com/SmartRenaldo"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Github
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yiqi-li-56b826234/"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Linkedin
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
              <a
                href="mailto:yiqil.inbox@gmail.com"
                target="_blank"
                className="p-1.5 rounded-full hover:bg-purple-400/20 transition-colors"
              >
                <Mail
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600"
                  } transition-colors`}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
