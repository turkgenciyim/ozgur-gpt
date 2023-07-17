const defaultTheme = require("tailwindcss/defaultConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.theme.screens,
    },
  },
};
