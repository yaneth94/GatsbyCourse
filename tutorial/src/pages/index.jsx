import React from "react"
import { Layout } from "../components/Layout"
import { Button } from "../components/button"

export default function Home() {
  return (
    <Layout>
      {/*CSS INLINE */}
      {/*style={{ color: "red", textTransform: "capitalize" }} */}
      <h1 className="title">this is our home pages</h1>
      <h2 className="title">another heading</h2>
      <Button>styled button</Button>
      {/*
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
        </div>
      </div>
      */}
    </Layout>
  )
}
