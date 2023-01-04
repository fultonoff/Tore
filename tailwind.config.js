/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'Charcoal': '#304659',
        'Blue': '#3A6AD4',
        'yellow': '#FFB020',
        'Green': '#34A59F',
        'Tahiti': '#3ab7bf',
        'grayinsh': '#FAFBFC',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
})