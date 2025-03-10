import { Pagination } from '@mui/material'
import React, { memo } from 'react'

const PaginationNavigation = withJsonFormsControlProps((props) => {
  return (
    <Pagination count={10} variant="outlined" color="primary" />
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const paginationTester = rankWith(3, uiTypeIs("Pagination"))
export default memo(PaginationNavigation, customComparator)
