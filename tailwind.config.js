/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#6429E4",
      active: "#7B4CE7",
      disabled: "#421B98",
      white: colors.white,
      black: colors.black,
      gray: {
        100: "#d9dae8",
        300: "#d9dae8",
        500: "#999AA5",
        600: "#66676E",
        700: "#39393f",
        800: "#242529",
        900: "#191B1F",
        950: "#101215",
      },
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [],
};
