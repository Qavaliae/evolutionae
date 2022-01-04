module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'app-yellow': '#FBAD3C',
        'app-yellow-800': '#F9B451',
        'app-yellow-700': '#FDCC89'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
