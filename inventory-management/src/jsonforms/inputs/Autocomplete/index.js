import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { Autocomplete, TextField } from "@mui/material"

import top100Films from './top100Films';

const AutocompleteControl = withJsonFormsControlProps((props) => {
  const newProps = {}
  
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const autocompleteTester = rankWith(3, uiTypeIs("Autocomplete"))
export default memo(AutocompleteControl, customComparator)
