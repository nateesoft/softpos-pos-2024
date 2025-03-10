import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"

const DividerControl = withJsonFormsControlProps((props) => {
  return <Divider />
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const dividerTester = rankWith(3, uiTypeIs("Divider"))
export default memo(DividerControl, customComparator)
