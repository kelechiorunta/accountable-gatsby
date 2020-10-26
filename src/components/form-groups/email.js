import React from "react"
import Label from "../controls/label"
import Email from "../controls/email"

const EmailGroup = ({ id, name, placeholder }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <Email id={id} placeholder={placeholder} />
    </>
  )
}

export default EmailGroup
