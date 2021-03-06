import React from "react"
import Layout from "../components/Layout"
/*import Images from "../examples/Images"*/
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="blog" description="this is description"></SEO>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
      {/*<h1> title: {data.site.siteMetadata.title}</h1>*/}
      {/*<Images></Images>*/}
      <BlogList></BlogList>
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
export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
