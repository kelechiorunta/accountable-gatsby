import React from "react"

const Number = ({ id, placeholder }) => {
  return (
    <input
      className="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter theme-input"
      type="number"
      placeholder={placeholder}
      id={id}
      min="1"
      max="100"
    />
  )
}

export default Number
