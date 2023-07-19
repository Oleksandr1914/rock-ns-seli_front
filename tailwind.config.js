/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textColor: "#e2e8f0",
      burgerColor: "#f1f5f9",
      backgroundBurger: "#18181b",
      activeLink: "#7f1d1d",
      hoverColor: "#fb923c",
    },
    fontFamily: {
      Ysabeau: "Ysabeau SC",
    },
    screens: {
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      rotate: {
        40: "-45deg",
      },
      keyframes: {
        show: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        animation: {
          show: "show 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
