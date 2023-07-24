/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
