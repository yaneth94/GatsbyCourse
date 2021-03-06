/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gastbyRemarkPlugins: [{
                    resolve: "gatsby-remark-images",
                }, ],
            },
        },

        `gatsby-plugin-playground`,
    ],
}