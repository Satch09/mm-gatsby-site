module.exports = {
  siteMetadata: {
    siteUrl: `https://mandmelec.co.za`,
    title: `M and M Electronics`,
    keywords: [`industrial`, `automation`, `allen-bradley`],
    titleTemplate: `Leaders in automation`,
    description: `Industrial automation specialists and Recognized System Integrators by Rockwell Automation. Leaders in automation since 1994 and beyond.`,
    author: `Christopher Maisch`,
    contact: {
      tel: `+27 21 872 2218`,
      fax: `+27 21 872 4805`,
      email: {
        info: `info@mandmelec.co.za`,
      },
      address: {
        link: `https://www.google.com/maps/place/M+and+M+Electronics/@-33.7119894,18.9746,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcd07f2f679697d:0x7a86ea7263601aeb!8m2!3d-33.7119894!4d18.976794`,
        street: {
          number: `16`,
          name: `Alkmaar Street`,
          city: `Paarl`,
          province: `Western Cape`,
          code: `7646`,
        },
        postal: {
          number: `PO`,
          name: `Box 7242`,
          city: `Northern Paarl`,
          province: `Western Cape`,
          code: `7623`,
        },
      },
      social: {
        faceBook: `https://www.facebook.com/MM-electronics-112297240473303`,
        linkedIn: `https://www.linkedin.com/company/mandmelectronics`,
      },
    },
    menuLinks: [
      { name: `home`, link: `/` },
      { name: `about`, link: `/about` },
      { name: `services`, link: `/services` },
      { name: `training`, link: `/training` },
      { name: `projects`, link: `/projects` },
      { name: `contact`, link: `/contact` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/projects/*`, `/internal/`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            filter: {
              path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
            }
          ) {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
        output: `/sitemap.xml`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
          })),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
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
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://mandmelec.co.za`,
        sitemap: `https://mandmelec.co.za/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: "/internal/" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
};
