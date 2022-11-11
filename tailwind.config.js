/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['GILROY', 'sans-serif'],
        gilroysemibold: ['GILROYSEMIBOLD', 'sans-serif'],
        monolisa: ['MONOLISA', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
