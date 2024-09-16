import colors from 'tailwindcss/colors'

export default {
  content: ["./**/*.{html,js,ts}"],
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