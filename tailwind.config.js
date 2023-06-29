/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Atomic\\ Age"', "cursive"],
      },
      colors: {
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

      screens: {
        'xsm': '360px',
        // => @media (min-width: 360px) { ... }

      }
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
