module.exports = {
  siteMetadata: {
    title: `Accountable.org.ng`,
    description: `Get justice for your family and friends. Report a crime today and get your world accountable.`,
    author: `Chigozie Orunta`,
    siteUrl: `https://accountable.org.ng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`DM Sans\:400,400i,500,500i,700,700i`],
        display: "swap",
      },
    },
  ],
}
