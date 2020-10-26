import React from "react"

const Email = ({ id, placeholder }) => {
  return (
    <input
      className="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter theme-input"
      type="email"
      placeholder={placeholder}
      id={id}
    />
  )
}

export default Email
