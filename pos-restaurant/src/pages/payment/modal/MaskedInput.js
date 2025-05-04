import React, { useState } from "react"
import InputMask from "react-input-mask"
import TextField from "@mui/material/TextField"

const MaskedInput = ({ label, setValue, focusComponent, netTotalAmount }) => {
  const handleChange = (e) => {
    if(e.key === "Enter"){
      let formatAmt = e.target.value.split("/")[0]
      if(formatAmt>0){
        let totalAmount = netTotalAmount * parseInt(formatAmt) / 100
        setValue(totalAmount)
        focusComponent()
      } else {
        setValue(0)
        focusComponent()
      }
    }
  };

  return (
    <InputMask mask="99/99/99" maskChar="0" onKeyDown={handleChange}>
      {(inputProps) => (
        <TextField
          {...inputProps}
          inputProps={{ sx: { textAlign: "center", "&::placeholder": { textAlign: "center" } } }}
          label={label}
          variant="filled"
          sx={{background: "snow"}}
        />
      )}
    </InputMask>
  )
}

export default MaskedInput
