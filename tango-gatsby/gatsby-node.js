const path = require("path")
const slash = require("slash")

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions

    const pageTemplate = path.resolve("./src/templates/page.jsx")

    const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
    }
  `)

    // Check for errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWordpressPage } = result.data

    allWordpressPage.edges.forEach(edge => {
        if (edge.node.status === "publish") {
            createPage({
                path: edge.node.link,
                component: slash(pageTemplate),
                context: {
                    id: edge.node.id,
                    parent: edge.node.wordpress_parent,
                    wpId: edge.node.wordpress_id,
                },
            })
        }
    })
}