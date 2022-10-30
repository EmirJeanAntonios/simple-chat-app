/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1000px",
        },
      },
      fontSize:{
        "xxs":".7rem"
      }
    },
  },
  plugins: [],
};
