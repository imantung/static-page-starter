const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.lime,
      neutral: colors.gray,
    },
    extend: {},
  },
  plugins: [],
}