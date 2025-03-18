import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Button } from "@mui/material"

import { getLabelValue } from "../../utils"

const ButtonControl = withJsonFormsControlProps((props) => {
  let label = getLabelValue(props.label, props.data)
  const newProps = {}
  
  return (
    <Button variant='contained' color='info' sx={{marginTop: "10px", marginBottom: "10px"}} {...newProps}>{label}</Button>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const buttonTester = rankWith(3, uiTypeIs("Button"))
export default memo(ButtonControl, customComparator)
