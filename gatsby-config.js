module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mandmdemo.netlify.app`,
    title: `M and M Electronics`,
    titleTemplate: `Leaders in automation`,
    description: `Leaders in automation`,
    author: `Christopher Maisch`,
    contact: {
      tel: `+27 21 872 2218`,
      fax: `+27 21 872 4805`,
      email: {
        info: `info@mandmelec.co.za`,
      },
      map: `https://www.google.com/maps/place/M+and+M+Electronics/@-33.7119894,18.9746,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcd07f2f679697d:0x7a86ea7263601aeb!8m2!3d-33.7119894!4d18.976794`,
      social: {
        faceBook: `https://www.facebook.com/MM-electronics-112297240473303`,
        linkedIn: `https://www.linkedin.com/company/mandmelectronics`,
      },
    },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M and M Electronics`,
        short_name: `Start`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
