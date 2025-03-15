import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { Typography } from "@mui/material"

export default function RadioButtonsGroup({ title, subTitle, items, required }) {
  return (
    <FormControl fullWidth sx={{padding: "10px", textAlign: "left"}} required={required||false}>
      <FormLabel id="demo-radio-buttons-group-label" sx={{color: "#123456"}}>{title}</FormLabel>
      <Typography sx={{color: "#bbb"}}>{subTitle}</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {items &&
          items.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  )
}
