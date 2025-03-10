import React, { memo } from 'react'
import { Link } from '@mui/material'

const LinkNavigation = withJsonFormsControlProps((props) => {
  return (
    <Link href="#">Link</Link>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const linkTester = rankWith(3, uiTypeIs("Link"))
export default memo(LinkNavigation, customComparator)
