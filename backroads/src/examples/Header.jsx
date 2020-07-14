import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query FirstQuery {
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

const Header = () => {
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = useStaticQuery(getSiteData)
  /*
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = data*/
  console.log(author)
  return (
    <div>
      <h1>title: {title}</h1>
      <h1> author:{author} </h1>
    </div>
  )
}

export default Header
