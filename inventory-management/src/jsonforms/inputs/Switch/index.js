import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Switch } from '@mui/material'

const SwitchControl = withJsonFormsControlProps((props) => {
  return (
    <Switch defaultChecked />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const switchTester = rankWith(3, uiTypeIs("Switch"))
export default memo(SwitchControl, customComparator)
