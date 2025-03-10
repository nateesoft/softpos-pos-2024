import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Button, ButtonGroup } from "@mui/material"

const ButtonGroupControl = withJsonFormsControlProps((props) => {
  const newProps = {}
  
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const buttonGroupTester = rankWith(3, uiTypeIs("ButtonGroup"))
export default memo(ButtonGroupControl, customComparator)
