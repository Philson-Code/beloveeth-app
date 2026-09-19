/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f4",
          100: "#fbe5e8",
          600: "#7A2638",
          700: "#6B1E2E",
          800: "#5A1725", // Primary Brand Maroon
        },
        ivory: {
          50: "#FCFBF8",  // Base Background
          100: "#F1F2F3",
        },
        slate: {
          subtle: "#66707A",
          dark: "#20252B",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}