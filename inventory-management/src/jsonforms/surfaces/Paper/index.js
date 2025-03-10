import React, { memo } from 'react'
import { Paper } from '@mui/material';

const PaperSurfaces = withJsonFormsControlProps((props) => {
  return (
    <Paper elevation={3} />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const paperTester = rankWith(3, uiTypeIs("Paper"))
export default memo(PaperSurfaces, customComparator)
