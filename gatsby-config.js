/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:"/warminster-basketball",
  plugins: ['gatsby-transformer-remark', {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'content',
      path: `${__dirname}/src/content`
    },
  },],
}
