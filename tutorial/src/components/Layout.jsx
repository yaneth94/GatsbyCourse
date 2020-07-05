import React from "react"
import { Navbar } from "../components/Navbar"
//aplicando CSS GLOBAL
import "./layout.css"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "../sass/layout.scss"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
