import { Box, Typography } from "@mui/material";

function SquareNode() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "2px solid", height: '150px', width: '150px' }}>
      <Typography variant="h5">โต๊ะเหลี่ยม</Typography>
    </Box>
  )
}

export default SquareNode
