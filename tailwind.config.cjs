const { breakpointsInPixels } = require("./vite/style");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  screens: breakpointsInPixels(),
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Atomic\\ Age"', "cursive"],
      },
      colors: {
        scheme: {
          a: {
            a: "#eeedeb",
            b: "#e0ccbe",
            c: "#747264",
            d: "#3c3633",
          },
          b: {
            a: "#3e3232",
            b: "#503c3c",
            c: "#7e6363",
            d: "#a87c7c",
          },
        },
        accent: {
          DEFAULT: "#006ce9",
          50: "#edfaff",
          100: "#d6f1ff",
          200: "#b5e9ff",
          300: "#83ddff",
          400: "#48c8ff",
          500: "#1ea8ff",
          600: "#068aff",
          700: "#006ce9",
          800: "#085ac5",
          900: "#0d4f9b",
          950: "#0e305d",
        },
        text: "#181818",
      },
    },
  },
  plugins: [
    {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
