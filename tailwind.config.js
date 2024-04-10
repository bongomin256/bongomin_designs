/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headerFonts: ["Audiowide", "sans-serif"],
        bodyFont: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
