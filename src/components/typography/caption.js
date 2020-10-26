import React from "react"

const Caption = props => {
  return (
    <h1 className="text-theme text-4xl xxl:text-6xl font-medium leading-tight tracking-tightest">
      {props.children}
    </h1>
  )
}

export default Caption
