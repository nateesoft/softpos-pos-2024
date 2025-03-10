import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { TextField } from "@mui/material"

const TextFieldControl = withJsonFormsControlProps((props) => {
  const newProps = {}

  return (
    <TextField size='small' {...newProps} />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const textFieldTester = rankWith(3, uiTypeIs("TextField"))
export default memo(TextFieldControl, customComparator)
