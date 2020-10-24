import React from "react"
import Navigation from "../components/navigation"

const Header = () => {
  return (
    <>
      <header className="px-6 sm:px-10 py-4 lg:py-12 flex flex-wrap items-center absolute w-full z-20">
        <Navigation />
      </header>
    </>
  )
}

export default Header
