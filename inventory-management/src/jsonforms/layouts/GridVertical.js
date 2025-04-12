import React, { memo } from "react"
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { JsonFormsDispatch, withJsonFormsControlProps } from "@jsonforms/react"
import { Grid, Paper, Typography } from "@mui/material";

const GridVertical = withJsonFormsControlProps((props) => {
  const { uischema, schema, path, enabled, renderers, cells } = props

  return (
    <>
      {uischema.label && (
        <Typography variant="h6" gutterBottom>
          {uischema.label}
        </Typography>
      )}
      <Grid container direction="column" spacing={1}>
        {uischema.elements.map((element, index) => (
          <Grid item key={index}>
            <JsonFormsDispatch
              schema={schema}
              uischema={element}
              path={path}
              enabled={enabled}
              renderers={renderers}
              cells={cells}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const gridVerticalTester = rankWith(3, uiTypeIs("GridVertical"))
export default memo(GridVertical, customComparator)
