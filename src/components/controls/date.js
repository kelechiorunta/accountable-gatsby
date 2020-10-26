import React from "react"

const Date = ({ id, placeholder }) => {
  return (
    <input
      class="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter"
      type="date"
      placeholder={placeholder}
      id={id}
    />
  )
}

export default Date
