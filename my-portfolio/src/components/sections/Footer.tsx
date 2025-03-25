// Footer.tsx
import React from "react";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../common/Logo";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <footer className={`py-8 border-t ${borderColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* Gradient logo */}
            <Code
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500"
              size={20}
            />
            <span className="font-bold">
              <Logo />
            </span>
          </div>
          <div className="flex space-x-6">
            {/* Contact icons - Always white in dark mode */}
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
              href="mailto:awesomerenaldo@gmail.com"
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
        <div className="text-center mt-4">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Yiqi Li. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
