import React from "react"
import { Layout } from "../components/Layout"
import { ToursComponent } from "../components/Tours/ToursComponent"

export default function Tours() {
  return (
    <Layout>
      <h1>Our Tour</h1>
      <ToursComponent></ToursComponent>
    </Layout>
  )
}
