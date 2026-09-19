/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          900: '#5A1725', // Deep Burgundy / Primary
          800: '#6B1E2E',
          700: '#7A2638',
        },
        ivory: {
          50: '#FCFBF8', // Warm White / Base
          100: '#FFFFFF',
        },
        neutral: {
          soft: '#F1F2F3',
          cool: '#D9DCE0',
          slate: '#66707A',
          charcoal: '#20252B',
        },
        semantic: {
          emerald: '#10B981',
          amber: '#F59E0B',
          blue: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}