// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          orange: '#FFA500',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        lime: colors.lime, // Include the lime color variant
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};
