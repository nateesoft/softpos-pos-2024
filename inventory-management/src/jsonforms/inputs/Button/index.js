import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Button } from "@mui/material"

const ButtonControl = withJsonFormsControlProps((props) => {
  const newProps = {}
  
  return (
    <Button {...newProps} />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const buttonTester = rankWith(3, uiTypeIs("Button"))
export default memo(ButtonControl, customComparator)
