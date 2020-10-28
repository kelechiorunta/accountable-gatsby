import React from "react"
import { Link } from "gatsby"
import LogoImage from "../../images/logo.png"

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={LogoImage}
          width="50"
          className="absolute top-0 left-0 ml-6 sm:ml-10 xl:ml-20 xxl:ml-40 mt-4 sm:mt-8 xxl:mt-12"
          alt="Logo"
        />
      </Link>
    </>
  )
}

export default Logo
