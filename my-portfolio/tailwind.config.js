/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        "floating-1": "floating 3s ease-in-out infinite",
        "floating-2": "floating 4s ease-in-out infinite",
        "floating-3": "floating 5s ease-in-out infinite",
        "floating-4": "floating 6s ease-in-out infinite",
        "floating-5": "floating 7s ease-in-out infinite",
        "floating-6": "floating 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floating: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, 10px)" },
          "50%": { transform: "translate(0, 20px)" },
          "75%": { transform: "translate(-10px, 10px)" },
        },
      },
    },
  },
  plugins: [],
};
