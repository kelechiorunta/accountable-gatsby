import React from "react"

const Text = ({ id, placeholder }) => {
  return (
    <input
      className="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter theme-input"
      type="text"
      placeholder={placeholder}
      id={id}
    />
  )
}

export default Text
