import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      <Link to="/">back home</Link>Hello from blog page
      <h1> title: {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

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
`

export default blog
