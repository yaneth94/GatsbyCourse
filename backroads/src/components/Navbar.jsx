import React from "react"
import { Link } from "gatsby"
import { FaRProject } from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
      <h1>i'm navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/rooms">Rooms</Link>
    </div>
  )
}

export default Navbar
