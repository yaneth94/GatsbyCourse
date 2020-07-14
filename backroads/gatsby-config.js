/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "BackRoads",
        description: "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
        author: "@johndoe",
        data: {
            name: "jhon",
            age: 24,
        },
    },
    plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}