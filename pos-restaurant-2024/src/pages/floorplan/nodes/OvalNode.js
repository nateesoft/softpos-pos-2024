import { Box, Typography } from "@mui/material";

function OvalNode() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "2px solid", borderRadius: "50%", width: '120px', height: '120px' }}>
      <Typography variant="h5">โต๊ะกลม</Typography>
    </Box>
  )
}

export default OvalNode
