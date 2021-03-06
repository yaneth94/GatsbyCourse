/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "BackRoads",
        description: "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
        author: "@johndoe",
        twitterUsername: "@john_smilga",
        image: "defaultBcg.jpeg",
        siteUrl: "https://gatsby-backroad-project.netlify.com",
        data: {
            name: "jhon",
            age: 24,
        },
    },
    plugins: [{
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://gatsby-backroad-project.netlify.com",
                sitemap: "https://gatsby-backroad-project.netlify.com/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
    ],
}