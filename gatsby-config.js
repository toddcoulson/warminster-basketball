/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:"/warminster-basketball",
  plugins: [`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark', {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'content',
      path: `${__dirname}/src/content`
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'images',
      path: `${__dirname}/src/images/`
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'sponsors',
      path: `${__dirname}/src/images/sponsors`
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
    }
  }],
}
