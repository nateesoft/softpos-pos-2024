import React from "react"
import InputMask from "react-input-mask"
import TextField from "@mui/material/TextField"

const MaskedInput = ({ label }) => {
  return (
    <InputMask mask="99/99/99" maskChar="_">
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
