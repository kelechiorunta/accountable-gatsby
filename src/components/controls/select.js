import React from "react"

const Select = ({ id, data }) => {
  return (
    <select
      id={id}
      className="w-full bg-primary text-secondary mt-3 p-4 rounded-lg tracking-tighter theme-input"
    >
      {Object.entries(data).map(([key, value], i) => (
        <option key={i} value={key}>
          {value}
        </option>
      ))}
    </select>
  )
}

export default Select
