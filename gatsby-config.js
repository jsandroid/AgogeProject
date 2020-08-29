/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
module.exports = {
  siteMetadata: {
    title: 'The Agoge Project',
    titleTemplate: '%s',
    description: 'The Agoge Project is focused on using Boxing and Martial Arts as a vehicle to cultivate self-empowerment, discipline, academic excellence, and a sense of community in our youth.',
    image: 'images/agoge-large-black.png',
    url: 'https://www.theagogeproject.org/',
    siteUrl: 'https://www.theagogeproject.org/'
  },

  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve : `gatsby-remark-images`,
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/agoge_white.png`,
      },
    },
  ]
}