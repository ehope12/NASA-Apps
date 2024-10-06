/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        customFont: ['"YourCustomFont"', 'serif'], // For a custom font
      },
    },
  },
  plugins: [],
}

