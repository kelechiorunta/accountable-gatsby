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
          className="opacity-0 overflow-hidden z-10 absolute top-0 bottom-0 left-0 right-0 cursor-pointer"
          type="file"
          placeholder={placeholder}
          id={id}
        />
        <div
          className={`${uploadStyle} w-full bg-primary mt-3 p-4 rounded-lg tracking-tighter border-green-500 border-2 border-dashed theme-file`}
        >
          {uploadedFile}
        </div>
      </div>
    </>
  )
}

export default File
