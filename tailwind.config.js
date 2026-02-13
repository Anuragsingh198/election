/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'election-red': '#c62828',
        'election-yellow': '#f4d03f',
        'election-navy': '#1a237e',
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'Mangal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
