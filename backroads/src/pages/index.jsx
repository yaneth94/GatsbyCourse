import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/blog">Blog</Link>
      {/*Style inline */}
      {/*
      <h1 style={{ fontSize: "20px", textTransform: "capitalize", color: "red" }}>
      hello styling
      </h1>
      */}
      <div className="container">
        <div className="row">
          <div className="col-4">hello</div>
          <div className="col-4">hello</div>
          <div className="col-4">hello</div>
        </div>
      </div>
    </Layout>
  )
}
