import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Rating, Typography } from "@mui/material"
import { getLabelValue } from "../../utils"

const RatingControl = withJsonFormsControlProps((props) => {
  return (
    <>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const ratingTester = rankWith(3, uiTypeIs("Rating"))
export default memo(RatingControl, customComparator)
