/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: colors.gray,
      primary: '#cd5654',
    },
    extend: {},
  },
  plugins: [],
};
