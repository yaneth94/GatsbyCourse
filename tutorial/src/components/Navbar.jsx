import React from "react"
import { Link } from "gatsby"
//import styles from "./navbar.module.scss"

export const Navbar = () => {
  {
    /*
    className={styles.navbar}
   */
  }
  return (
    <nav>
      <h2>company</h2>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/blog"> Blog </Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
        <li>
          <Link to="/images/">Images</Link>
        </li>
      </ul>
    </nav>
  )
}
