import React from "react"

const Label = props => {
  return (
    <label className="font-medium" for={props.for}>
      {props.children}
    </label>
  )
}

export default Label
