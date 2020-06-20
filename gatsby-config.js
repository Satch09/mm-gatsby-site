module.exports = {
  siteMetadata: {
    title: `M and M Electronics`,
    description: `Professional Website`,
    author: `Christopher Maisch`,
    menuLinks: [
      { name: "home", link: "/" },
      { name: "about", link: "/about" },
      { name: "services", link: "/services" },
      { name: "training", link: "/training" },
      { name: "projects", link: "/projects" },
      { name: "contact", link: "/contact" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-plugin-global-styles`,
    //   options: {
    //     props: {
    //       theme: `${__dirname}/src/util/theme`,
    //     },
    //   },
    // },
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
};
