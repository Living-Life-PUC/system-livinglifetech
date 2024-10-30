/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: "#BFD200",
          orange: "#DD5D27",
          yellow: "#FFFF3F",
          green: "#55A630",
        },
        secondary: {
          lime: "#FBFFD7",
          orange: "#FFF1EB",
          green: "#E5FFDA",
        },
        text: {
          DEFAULT: "#252525", // Primary text color
          secondary: "#5C5C5C", // Secondary text color
        },
      },
    },
  },
  plugins: [],
};
