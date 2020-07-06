import React from "react"
import { HeaderHook } from "../examples/Header-Hooks"
import { HeaderStatic } from "../examples/Header-Static"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"

export default function Examples(props) {
  const { name, age } = props.data.site.siteMetadata.person
  console.log(props)
  return (
    <Layout>
      examples page
      <HeaderHook></HeaderHook>
      <HeaderStatic></HeaderStatic>
      <div>
        this is our person
        <h4> name: {name}</h4>
        <h4>age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        person: data {
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
