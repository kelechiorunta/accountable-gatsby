import React from "react"
import Label from "../controls/label"
import Text from "../controls/text"

const TextGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <Text id={id} placeholder={placeholder} />
    </>
  )
}

export default TextGroup
