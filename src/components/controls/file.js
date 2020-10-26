import React from "react"

const File = ({ id, placeholder }) => {
  return (
    <>
      <div className="relative">
        <input
          className=" theme-file"
          type="file"
          placeholder={placeholder}
          id={id}
        />
        <div className="w-full bg-primary text-tertiary mt-3 p-4 rounded-lg tracking-tighter border-green-500 border-2 border-dashed">
          Upload File
        </div>
      </div>
    </>
  )
}

export default File
