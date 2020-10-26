import React from "react"

const File = ({ id, placeholder }) => {
  return (
    <input
      class="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter"
      type="file"
      placeholder={placeholder}
      id={id}
    />
  )
}

export default File
