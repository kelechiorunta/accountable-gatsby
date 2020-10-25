module.exports = {
  siteMetadata: {
    title: `Accountable.org.ng`,
    description: `Get justice for your family and friends. Report a crime today and get your world accountable.`,
    author: `Chigozie Orunta`,
    siteUrl: `https://accountable.org.ng`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-htaccess`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `dm sans\:400,400i,500,500i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
