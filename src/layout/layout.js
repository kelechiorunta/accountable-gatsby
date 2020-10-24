import React from "react"
import Header from "../layout/header"
import Footer from "../layout/footer"

import "../styles/global.css"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
