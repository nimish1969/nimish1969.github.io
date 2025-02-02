const {heroui} = require('@heroui/theme');
// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(card|image|ripple).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(),heroui()],
};