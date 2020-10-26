module.exports = {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1367px",
      // => @media (min-width: 1367px) { ... }
    },
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
