import React, { memo } from 'react'
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { getLabelValue } from "../../utils"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const RadioGroupControl = withJsonFormsControlProps((props) => {
  console.log("RadioGroupControl:", props)
  const { row, label } = props.uischema?.options
  let titleDisplay =getLabelValue(label, props.data)
  const { enum: getEnum } = props.schema ?? []

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{titleDisplay}</FormLabel>
      <RadioGroup
        row={row ?? false}
        aria-labelledby="demo-radio-buttons-group-label"
        value={"Y"}
        name="radio-buttons-group"
      >
        {getEnum && getEnum.map(item => <FormControlLabel value={item.key} control={<Radio checked={item.value==="Y"} />} label={item.label} />)}
      </RadioGroup>
    </FormControl>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const radioGroupTester = rankWith(3, uiTypeIs("RadioGroup"))
export default memo(RadioGroupControl, customComparator)
