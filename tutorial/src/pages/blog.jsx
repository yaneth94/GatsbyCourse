import React from "react"
import { Layout } from "../components/Layout"
import styles from "../components/blog.module.css"

console.log(styles)
export default function Blog() {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1 className={styles.title}>this is our blog page</h1>
        <h2>this second hedding</h2>
      </div>
    </Layout>
  )
}
