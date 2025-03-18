import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { InputAdornment, TextField, Typography } from "@mui/material"

import { getLabelValue } from '../../utils'

const TextFieldControl = withJsonFormsControlProps((props) => {
  let label = getLabelValue(props.label, props.data)
  const options = props?.uischema?.options

  let inputProps = {}

  if(options && options.postfix) {
    inputProps = {
      endAdornment: (
        <InputAdornment position='end'>
          <Typography>{options.postfix}</Typography>
        </InputAdornment>
      )
    }
  }

  return (
    <TextField label={label} variant='outlined' InputProps={inputProps} fullWidth sx />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const textFieldTester = rankWith(3, uiTypeIs("TextField"))
export default memo(TextFieldControl, customComparator)
