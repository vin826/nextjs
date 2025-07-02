/** @type {import('tailwindcss').Config} */
const aceternity = require("aceternity-ui/plugin"); // Only if Aceternity UI provides a plugin

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    aceternity, // Only if needed
  ],
}