import React from "react"
import Label from "../controls/label"
import MultiLineText from "../controls/multiline"

const MultiLineGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <MultiLineText id={id} placeholder={placeholder} />
    </>
  )
}

export default MultiLineGroup
