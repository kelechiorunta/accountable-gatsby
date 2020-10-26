import React from "react"

const MultiLineText = ({ id, placeholder }) => {
  return (
    <textarea
      rows="8"
      class="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter"
      id={id}
      placeholder={placeholder}
    ></textarea>
  )
}

export default MultiLineText
