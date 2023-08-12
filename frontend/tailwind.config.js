/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".glass": {
      background: "rgba(255, 255, 255, 0.08)",
      "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
      "backdrop-filter": "blur(1.4px)",
      "-webkit-backdrop-filter": "blur(1.4px)",
    },
    ".mglass": {
      background: "rgba(255, 255, 255, 0.08)",
      "box-shadow": "10px 4px 30px rgba(0, 0, 0, 0.1)",
      "backdrop-filter": "blur(1.4px)",
      "-webkit-backdrop-filter": "blur(1.4px)",
       border: ".5px solid black",
    },
    ".form-glass": {
      background: "rgba(255, 255, 255, 0.24)",
      "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
      "backdrop-filter": "blur(4.1px)",
      "-webkit-backdrop-filter": "blur(4.1px)",
      border: ".5px solid rgba(255, 255, 255, 1)",
    },
    ".head-font": {
      fontFamily: "Cabin Sketch, cursive",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  plugins: [Myclass],
};
