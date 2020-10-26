import React from "react"

const Label = props => {
  return (
    <label class="font-medium" for={props.for}>
      {props.children}
    </label>
  )
}

export default Label
