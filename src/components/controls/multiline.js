import React from "react"

const MultiLineText = ({ id, placeholder }) => {
  return (
    <textarea
      rows="8"
      className="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter theme-input"
      id={id}
      placeholder={placeholder}
    ></textarea>
  )
}

export default MultiLineText
