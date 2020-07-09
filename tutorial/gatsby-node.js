/*exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`

    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}*/

//para crear paginas dinamicamente
exports.createPage = async({ actions, graphql }) => {
    const { createPage } = actions
    const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    data.tours.edges.forEach(({ node }) => {
        createPage({
            path: `tours/${node.slug}`,
            component: path.resolve("./src/templates/tour-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })
}