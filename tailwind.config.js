module.exports = {
  theme: {
    textColor: theme => ({
      ...theme("colors"),
      theme: "#1ABF69",
      primary: "#191919",
      secondary: "#707070",
      tertiary: "#999999",
    }),
    backgroundColor: theme => ({
      ...theme("colors"),
      theme: "#1ABF69",
      primary: "#E8F9F0",
    }),
    extend: {},
  },
  future: {},
  purge: [],
  variants: {},
  plugins: [],
}
