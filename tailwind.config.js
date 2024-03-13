/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backPrimary_color: "#1f2937",    // black white
        darkBackPrimary_color: "#1f283e",    // black white
        backsecondary_color: "#f8fafc",  // White
        darkBackSecondary_color: "#f8fafc",  //dark White
        backteritiary_color: "#e5e7eb",  // gray
        darkBackTeritiary_color: "#1a2035",  //dark gray
        text_color1: "#ffffff",
        text_color2: "#6b7280",
        text_color3: "#374151",
      },
    },
  },
  plugins: [],
};