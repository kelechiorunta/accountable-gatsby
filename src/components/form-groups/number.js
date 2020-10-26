import React from "react"
import Label from "../controls/label"
import Number from "../controls/number"

const NumberGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <Number id={id} placeholder={placeholder} />
    </>
  )
}

export default NumberGroup
