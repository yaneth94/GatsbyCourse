import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        data {
          name
          age
        }
        description
        author
        sitetitle: title
      }
    }
  }
`

export const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        //console.log(data)
        return (
          <div>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}
