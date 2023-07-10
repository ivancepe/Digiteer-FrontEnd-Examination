/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      vibur: ['Vibur'],
      mont: ['Montserrat']
    },
    screens: {
      'xm': {'min': '390px', 'max': '600px'},
      'sm': {'min': '601px', 'max': '800px'}
    }
  },
  plugins: [],
}

