import React from "react"
import ArrowIcon from "../icons/arrow-icon"

const Button = props => {
  return (
    <button
      id={props.id}
      className="w-full bg-theme px-6 py-4 block rounded-lg text-white text-left tracking-tighter font-medium"
    >
      <span>{props.children}</span>
      <div class="float-right">
        <ArrowIcon />
      </div>
    </button>
  )
}

export default Button
