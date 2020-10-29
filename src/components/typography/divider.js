import React from "react"

const Divider = props => {
  return (
    <div className="w-full p-4 sm:py-4 xxl:py-8 -mb-4 xxl:-mb-10 mt-4 xxl:-mt-2">
      <h1 className="text-theme text-2xl tracking-tightest font-medium">
        {props.children}
      </h1>
    </div>
  )
}

export default Divider
