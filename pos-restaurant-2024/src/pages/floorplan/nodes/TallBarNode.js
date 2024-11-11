import { Box, Typography } from "@mui/material";

function TallBarNode() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "2px solid", height: '400px', width: '100px' }}>
      <Typography variant="h5">แนวตั้ง</Typography>
    </Box>
  )
}

export default TallBarNode
