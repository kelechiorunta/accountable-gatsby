module.exports = {
  siteMetadata: {
    title: `Accountable.org.ng`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `dm sans\:400,400i,500,500i,700,700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
}