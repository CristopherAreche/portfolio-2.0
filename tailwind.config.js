/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsPhone: "370px",
        phone: "380px",
        tablet: "768px",
        tabletLandscape: "1024px",
        laptop: "1440px",
      },
      fontFamily: {
        "main-font": ["Oswald", "sans-serif"],
      },
      colors: {
        dark_mode_text: "#ecf0f3",
        green_text: "#53E766",
        grey_text: "#374151",
        dark_bg: "#000",
        light_text: "#ECF0F3",
        light_bg: "#ECF0F3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
