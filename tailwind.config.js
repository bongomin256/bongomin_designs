/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headerFonts: ["Audiowide", "sans-serif"],
        bodyFont: ["DM Sans", "sans-serif"],
      },
      colors: {
        "pri-bg": "023047",
        "sec-bg": "045072",
        "body-text": "8ECAE6",
        "heading-text": "219EBC",
        "cta-pri": "FB8500",
        "cta-sec": "FFB703",
      },
      fontSize: {
        "heading1-lg": "3.625rem",
        "heading1-sm": "3rem",
        "heading2-lg": "3rem",
        "heading2-sm": "2.25rem",
        "heading3-lg": "1.5rem",
        "heading3-sm": "1.25rem",
        base1: "1.125rem",
        base2: "1rem",
      },
    },
  },
  plugins: [],
};
