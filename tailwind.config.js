/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlowCon: ["BarlowCondensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      boxShadow: {
        linkHover: "0px 0px 80px 50px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
