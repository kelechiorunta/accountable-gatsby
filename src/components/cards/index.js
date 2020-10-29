import { Link } from "gatsby"
import React from "react"
import LogoIcon from "../icons/logo"

const Record = ({ victim, offender, crime }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xxl:w-1/4 p-4 sm:p-8 mt-10">
      <Link to="/crime">
        <div className="bg-primary text-secondary w-full py-16 px-3 text-center rounded-xl relative">
          <div className="theme-icon w-full flex justify-center absolute">
            <LogoIcon />
          </div>
          <h1 className="font-bold text-2xl text-theme">{victim}</h1>
          <p className="text-gray-900 mt-10">Offender</p>
          <p className="mt-2">{offender}</p>
          <p className="text-gray-900 mt-10">Crime Committed</p>
          <p className="mt-2">{crime}</p>
        </div>
      </Link>
    </div>
  )
}

export default Record
