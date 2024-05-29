const primary = {};
const secondary = {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
      },
      borderRadius: {},
      boxShadow: {},
      lineHeight: {},

      fontFamily: {
        Figtree: ["Figtree", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
