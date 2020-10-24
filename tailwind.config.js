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
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {},
  },
  future: {},
  purge: [],
  variants: {},
  plugins: [],
}
