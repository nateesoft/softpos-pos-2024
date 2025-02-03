import React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { FormControl, FormLabel, Typography } from "@mui/material"

export default function CheckboxLabels({ title, subTitle, items }) {
  return (
    <FormControl fullWidth sx={{ padding: "10px", textAlign: "left" }}>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color: "#123456" }}>
        {title}
      </FormLabel>
      <Typography sx={{ color: "#bbb" }}>{subTitle}</Typography>
      <FormGroup>
        {items &&
          items.map((item) => {
            const showPrice =
              item.price && item.price > 0 ? `+${item.price} บาท` : ""
            return (
              <FormControlLabel
                key={item.id}
                control={<Checkbox value={item.value} />}
                label={`${item.label} ${showPrice}`}
              />
            )
          })}
      </FormGroup>
    </FormControl>
  )
}
