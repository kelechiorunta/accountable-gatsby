import React from "react"
import Link from "gatsby-link"
import ArrowIcon from "../../components/icons/arrow-icon"

const GetStartedButton = () => {
  return (
    <Link
      className="bg-theme rounded-lg px-6 py-3 text-white font-medium hidden lg:inline-block absolute right-0 mr-10 w-48"
      to="/get-started"
    >
      <span>Get Started</span>
      <div class="absolute right-0 top-0 mt-3 mr-6">
        <ArrowIcon />
      </div>
    </Link>
  )
}

export default GetStartedButton
