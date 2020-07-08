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
        title: "tutorial",
        description: "just some description about our site",
        author: "@jhondoe",
        data: {
            name: "jhon",
            age: 25,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
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
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-playground`,
    ],
}