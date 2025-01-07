/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#668273',
      'primary2': '#00462B',
      'primary3': '#EEFFF6',
      'primary4': '#01A25A',
      'primary5': '#668273',
      'primary6': '#668273',
      'primary7': '#D9D9D9',

      'green-50': '#EEFFF6',

      'gray-200': '#D1D1D1',
      'gray-600': '#5D5D5D',
      'gray-900': '#3D3D3D',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
