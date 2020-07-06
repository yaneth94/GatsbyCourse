import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

export const HeaderHook = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  //console.log(data)
  //console.log(info)
  const title = info.sitetitle
  return (
    <div>
      {/*<h1>author: {data.site.siteMetadata.author}</h1>*/}
      <h1>author: {info.author}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}
