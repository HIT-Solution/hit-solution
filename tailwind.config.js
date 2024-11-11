const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#4fd1c5",
          500: "#38b2ac",
          600: "#319795",
          900: "#234e52",
        },
      },
      backgroundImage: {
        "my-gradient": "linear-gradient(135deg, black, #319795)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
