import React, { memo } from "react"
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { JsonFormsDispatch, withJsonFormsControlProps } from "@jsonforms/react"
import { Grid2 } from "@mui/material"

const GridLayout = withJsonFormsControlProps((props) => {
  const { uischema, schema, path, enabled, renderers, cells } = props

  const { direction="column", spacing=1, margin=0 } = uischema?.options
  const elements = uischema?.elements

  return (
    <Grid2 direction={`${direction}`} spacing={spacing} margin={margin}>
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
    </Grid2>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const gridLayoutTester = rankWith(3, uiTypeIs("GridLayout"))
export default memo(GridLayout, customComparator)
