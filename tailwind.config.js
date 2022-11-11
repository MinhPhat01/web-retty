/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ' sans-serif'],
      },
      colors: {
        textColor: '#7a7a82',
        colorPrimary: '#ff9f11',
        colorSecondary: '#00a49f',
      },
    },
  },
  plugins: [],
};
