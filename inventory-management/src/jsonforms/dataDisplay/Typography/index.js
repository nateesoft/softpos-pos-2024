import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Typography } from "@mui/material"

import { getLabelValue } from "../../utils"

const TypographyControl = withJsonFormsControlProps((props) => {
  let label = getLabelValue(props.label, props.data)
  return <Typography sx={{margin: "10px"}}>{label}</Typography>
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const typographyTester = rankWith(3, uiTypeIs("Typography"))
export default memo(TypographyControl, customComparator)
