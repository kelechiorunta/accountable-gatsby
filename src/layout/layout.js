import React from "react"
import Header from "../layout/header"
import Footer from "../layout/footer"

import "../styles/global.css"
import { Helmet } from "react-helmet"

const Layout = props => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Accountable | Report a crime today and get the offenders accountable.
          Get justice for your family and friends.
        </title>
        <meta
          name="keywords"
          content="accountable, justice, crime, lagos, nigeria, abuja, corrupt, politicians, government, officials, family, friends, theft, manslaughter, sue, law, lawyer, constitution, endsars, SARS, police, force, PHCN, EFCC, NDLEA"
        />
        <meta
          name="description"
          content="Accountable | Report a crime today and get the offenders accountable. Get justice for your family and friends."
        />
        <meta name="author" content="Accountable" />
        <link rel="canonical" href="https://accountable.org.ng" />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
