module.exports = {
  siteMetadata: {
    title: "The Discography of Nick Cave & the Bad Seeds",
    description: "An overview of the career and albums of Nick Cave & the Bad Seeds",
    author: "Valerie Sleurs",
    siteUrl: "http://nick-cave-discography.local/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://nick-cave-discography.local/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue`,
        ],
        display: 'swap'
      }
    }
  ],
};