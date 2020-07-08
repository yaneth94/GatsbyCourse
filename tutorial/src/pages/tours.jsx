import React from "react"
import { Layout } from "../components/Layout"
import { ToursComponent } from "../components/Tours/ToursComponent"
import { graphql } from "gatsby"

export default function Tours({ data }) {
  //console.log(data)
  return (
    <Layout>
      <h1>Our Tour</h1>
      <ToursComponent tours={data.tours.edges}></ToursComponent>
    </Layout>
  )
}
export const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          days
          id: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
