import React from "react"

const Toggle = () => {
  return (
    <div className="w-12 absolute right-0 top-0 mt-6 sm:mt-12 mr-6 sm:mr-12 lg:hidden cursor-pointer toggle">
      <span className="block py-1 mb-1 bg-theme"></span>
      <span className="block py-1 mb-1 bg-theme"></span>
      <span className="block py-1 mb-0 bg-theme"></span>
    </div>
  )
}

export default Toggle
