/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class", // Add this line to enable dark mode with class-based toggling
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
