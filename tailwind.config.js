/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg_hero.svg')",
      },
      colors: {
        muted: "#878787",
        darkgrey: "#929292",
        lightgrey: "#e5e5e5",
        black: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        mobile: { max: "1023px" },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#F3C951",
          secondary: "#374572",
          accent: "#E52F2F",
        },
      },
    ],
  },
};
