module.exports = {
  siteMetadata: {
    title: "Nick Cave and the Bad Seeds",
    description: "An overview of the discography of Nick Cave and the Bad Seeds",
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
  ],
};