import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="contact" description="this is description"></SEO>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero>
      <Contact></Contact>
    </Layout>
  )
}
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
