import colors from 'tailwindcss/colors'

export default {
  content: ["./src/**/*.{html,js,ts}"],
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