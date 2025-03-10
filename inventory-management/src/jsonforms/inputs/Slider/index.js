import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Slider } from '@mui/material'

const SliderControl = withJsonFormsControlProps((props) => {
  return (
    <Slider aria-label="Volume" />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const sliderTester = rankWith(3, uiTypeIs("Slider"))
export default memo(SliderControl, customComparator)
