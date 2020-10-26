import React from "react"
import Label from "../controls/label"
import Date from "../controls/date"

const DateGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <Date id={id} placeholder={placeholder} />
    </>
  )
}

export default DateGroup
