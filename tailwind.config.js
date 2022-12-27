/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/MWykaTheme/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', '"sans-serif"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
