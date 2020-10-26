import React from "react"

const Caption = props => {
  return (
    <h1 class="text-theme text-4xl font-medium leading-tight tracking-tightest">
      {props.children}
    </h1>
  )
}

export default Caption
