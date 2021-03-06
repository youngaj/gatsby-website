module.exports = {
   siteMetadata: {
      title: `Andre Young Website`,
      description: `Public website and tech playground for Andre Young.  Includes resume, podcasts, dev group sessions and much more. Currently powered by Gatsby`,
      author: `Andre Young`,
   },
   plugins: [
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-react-helmet`,
      require.resolve(`./source-plugin`),
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/blogs`,
            name: `blogs`,
         },
      },
      `gatsby-transformer-remark`,
      {
         resolve: `gatsby-plugin-mdx`,
         options: {
            extensions: [`.mdx`, `.md`],
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
         },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
}
