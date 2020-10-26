import React, { useState } from "react"
import GetStartedButton from "../components/header/get-started-button"
import Logo from "../components/header/logo"
import Navigation from "../components/header/navigation"
import Toggle from "../components/header/toggle"

const Header = () => {
  const [toggleState, setToggleState] = useState(true)
  const [toggleClass, setToggleClass] = useState("theme-nav-close")

  const toggle = () => {
    if (toggleState) {
      setToggleState(!toggleState)
      setToggleClass("theme-nav-open")
    } else {
      setToggleState(!toggleState)
      setToggleClass("theme-nav-close")
    }
  }

  return (
    <>
      <header className="px-6 sm:px-10 py-4 lg:py-12 xxl:py-16 xxl:px-40 flex flex-wrap items-center absolute w-full z-20">
        <Logo />
        <Navigation toggleClass={toggleClass} />
        <GetStartedButton />
        <Toggle onToggle={toggle} />
      </header>
    </>
  )
}

export default Header
