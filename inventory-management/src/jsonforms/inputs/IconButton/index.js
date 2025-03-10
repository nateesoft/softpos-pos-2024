import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { IconButton } from "@mui/material"
import { ZoomIn } from '@mui/icons-material'

const IconButtonControl = withJsonFormsControlProps((props) => {
  return (
    <IconButton>
      <ZoomIn />
    </IconButton>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const iconButtonTester = rankWith(3, uiTypeIs("IconButton"))
export default memo(IconButtonControl, customComparator)
