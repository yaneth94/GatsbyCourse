import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
/*import Images from "../examples/Images"*/

const blog = () => {
  return (
    <Layout>
      <Link to="/">back home</Link>Hello from blog page
      {/*<h1> title: {data.site.siteMetadata.title}</h1>*/}
      {/*<Images></Images>*/}
    </Layout>
  )
}

/*
export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        data {
          age
        }
        description
        title
      }
    }
  }
`*/

export default blog
