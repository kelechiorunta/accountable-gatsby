import React from "react"
import Link from "gatsby-link"

const GetStartedButton = () => {
  return (
    <Link
      className="bg-theme block rounded-lg px-6 py-3 text-white font-medium hidden lg:inline-block lg:flex absolute right-0 mr-10 w-48"
      to="/get-started"
    >
      <span>Get Started</span>
      <div class="absolute right-0 mr-6">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          clip-rule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </Link>
  )
}

export default GetStartedButton
