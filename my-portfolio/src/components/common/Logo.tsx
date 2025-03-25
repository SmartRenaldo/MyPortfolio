import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="logo-container h-10 w-28 cursor-pointer">
      <svg
        viewBox="0 0 140 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Decorative element - left swoosh - made thicker */}
        <path
          d="M15 10C8 15 5 25 8 35C9 38 10 40 12 42"
          stroke="url(#gradientPrimary)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Y letter - increased stroke width from 4 to 6 */}
        <path
          d="M30 10L40 25L50 10"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 25L40 40"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* i letter - larger dot */}
        <circle
          cx="60"
          cy="15"
          r="4"
          fill={theme === "dark" ? "white" : "black"}
        />
        <path
          d="M60 25L60 40"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* q letter - thicker stroke */}
        <circle
          cx="80"
          cy="32"
          r="10"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
        />
        <path
          d="M87 39L95 47"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* i letter - larger dot */}
        <circle
          cx="110"
          cy="15"
          r="4"
          fill={theme === "dark" ? "white" : "black"}
        />
        <path
          d="M110 25L110 40"
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Decorative element - right accent - made thicker */}
        <path
          d="M120 30C125 25 130 25 135 30"
          stroke="url(#gradientSecondary)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="gradientPrimary"
            x1="5"
            y1="10"
            x2="12"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9333EA" /> {/* purple-600 */}
            <stop offset="1" stopColor="#6366F1" /> {/* indigo-500 */}
          </linearGradient>
          <linearGradient
            id="gradientSecondary"
            x1="120"
            y1="30"
            x2="135"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9333EA" /> {/* purple-600 */}
            <stop offset="1" stopColor="#6366F1" /> {/* indigo-500 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
