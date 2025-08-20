/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        edu: ['"Edu NSW ACT Cursive"', 'cursive'],
        fraunces: ['"Fraunces", "italic"']
      },
    },
  },
  plugins: [],
}