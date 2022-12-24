/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/exampleTheme/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', '"sans-serif"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
