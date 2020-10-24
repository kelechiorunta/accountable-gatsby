import React from "react"
import GetStartedButton from "../components/get-started-button"
import Logo from "../components/logo"
import Navigation from "../components/navigation"
import Toggle from "../components/toggle"

const Header = () => {
  return (
    <>
      <header className="px-6 sm:px-10 py-4 lg:py-12 flex flex-wrap items-center absolute w-full z-20">
        <Logo />
        <Navigation />
        <GetStartedButton />
        <Toggle />
      </header>
    </>
  )
}

export default Header
