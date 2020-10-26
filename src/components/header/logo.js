import React from "react"
import LogoImage from "../../images/logo.png"

const Logo = () => {
  return (
    <>
      <img
        src={LogoImage}
        width="50"
        className="absolute top-0 left-0 ml-6 sm:ml-10 xxl:ml-40 mt-4 sm:mt-8 xxl:mt-12"
        alt="Logo"
      />
    </>
  )
}

export default Logo
