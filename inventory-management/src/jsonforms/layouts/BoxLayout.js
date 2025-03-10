import React, { memo } from "react"
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { JsonFormsDispatch, withJsonFormsControlProps } from "@jsonforms/react"
import { Box } from "@mui/material"

const BoxLayout = withJsonFormsControlProps((props) => {
  const { uischema, schema, path, enabled, renderers, cells } = props
  const elements = uischema?.elements

  return (
    <Box component="section" sx={{p: 2, border: '1px dashed grey'}}>
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
    </Box>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const boxLayoutTester = rankWith(3, uiTypeIs("BoxLayout"))
export default memo(BoxLayout, customComparator)
