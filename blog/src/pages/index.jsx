import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <Link to="/post">Post Page</Link>
      Hola
    </Layout>
  )
}
