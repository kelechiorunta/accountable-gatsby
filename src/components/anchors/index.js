import React from "react"
import { Link } from "gatsby"
import ArrowIcon from "../icons/arrow-icon"

const Anchor = props => {
  return (
    <Link
      className={`bg-theme block rounded-lg px-6 py-4 text-white font-medium ${props.bgcolor}`}
      to={props.url}
    >
      <span>{props.children}</span>
      <div className="float-right">
        <ArrowIcon />
      </div>
    </Link>
  )
}

export default Anchor
