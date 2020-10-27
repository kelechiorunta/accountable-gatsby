import React, { useState } from "react"

const File = ({ id, placeholder }) => {
  const [uploadedFile, setUploadedFile] = useState("Upload File")
  const [uploadStyle, setUploadStyle] = useState("text-tertiary")

  const onSelect = e => {
    setUploadedFile(e.target.value)
    setUploadStyle("text-secondary")
  }

  return (
    <>
      <div className="relative">
        <input
          onChange={onSelect}
          className=" theme-file"
          type="file"
          placeholder={placeholder}
          id={id}
        />
        <div
          className={`${uploadStyle} w-full bg-primary mt-3 p-4 rounded-lg tracking-tighter border-green-500 border-2 border-dashed`}
        >
          {uploadedFile}
        </div>
      </div>
    </>
  )
}

export default File
