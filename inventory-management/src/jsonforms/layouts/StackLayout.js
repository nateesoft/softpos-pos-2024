import React, { memo } from "react"
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { JsonFormsDispatch, withJsonFormsControlProps } from "@jsonforms/react"
import { Stack } from "@mui/material"

const StackLayout = withJsonFormsControlProps((props) => {
  const { uischema, schema, path, enabled, renderers, cells } = props

  const { direction, spacing, margin=0 } = uischema?.options
  const elements = uischema?.elements

  return (
    <Stack direction={`${direction}`} spacing={spacing} margin={margin}>
      {elements.map((child, index) => {
        return (
          <JsonFormsDispatch
            uischema={child}
            schema={schema}
            path={path}
            enabled={enabled}
            renderers={renderers}
            cells={cells}
          />
        )
      })}
    </Stack>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const stackLayoutTester = rankWith(3, uiTypeIs("StackLayout"))
export default memo(StackLayout, customComparator)
