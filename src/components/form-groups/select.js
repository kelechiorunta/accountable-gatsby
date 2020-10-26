import React from "react"
import Label from "../controls/label"
import Select from "../controls/select"

const SelectGroup = ({ id, name, data }) => {
  return (
    <>
      <Label for={id}>{name}</Label>
      <Select id={id} data={data} />
    </>
  )
}

export default SelectGroup
