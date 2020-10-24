import React from "react"
import Link from "gatsby-link"

const Navigation = () => {
  return (
    <ul className="fixed bottom-0 top-0 w-3/4 h-full bg-green-500 -mx-12 sm:pl-12 pt-24 lg:w-full lg:h-auto lg:relative lg:visible lg:flex lg:bg-transparent lg:pt-0 lg:mx-0 theme-nav">
      <li className="ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/">Home</Link>
      </li>
      <li className="ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/report">Report Crime</Link>
      </li>
      <li className="ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/crimes">Crimes Database</Link>
      </li>
      <li className="ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/laws">The Constitution</Link>
      </li>
      <li className="ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/volunteer">Join Accountable</Link>
      </li>
      <li className="sm:hidden ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/get-started">Get Started</Link>
      </li>
      <li className="sm:hidden ml-5 sm:ml-10 text-2xl sm:text-4xl tracking-tighter font-medium text-white lg:text-lg lg:font-normal lg:text-gray-900">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )
}

export default Navigation
