import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Checkbox } from "@mui/material"

const CheckBoxControl = withJsonFormsControlProps((props) => {
  const newProps = {}

  return (
    <Checkbox size='small' {...newProps} />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const checkboxTester = rankWith(3, uiTypeIs("Checkbox"))
export default memo(CheckBoxControl, customComparator)
