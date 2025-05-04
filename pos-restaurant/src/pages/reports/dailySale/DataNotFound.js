import { Box, Typography } from '@mui/material'
import React from 'react'

const DataNotFound = () => {
  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Typography variant="h4" align="center">
      ไม่พบข้อมูลในระบบ !!!
    </Typography>
  </Box>
}

export default DataNotFound
