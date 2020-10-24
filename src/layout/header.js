import React from "react"
import GetStartedButton from "../components/get-started-button"
import Navigation from "../components/navigation"

const Header = () => {
  return (
    <>
      <header className="px-6 sm:px-10 py-4 lg:py-12 flex flex-wrap items-center absolute w-full z-20">
        <Navigation />
        <GetStartedButton />
      </header>
    </>
  )
}

export default Header
