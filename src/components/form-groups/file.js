import React from "react"
import Label from "../controls/label"
import File from "../controls/file"

const FileGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <File id={id} placeholder={placeholder} />
    </>
  )
}

export default FileGroup
