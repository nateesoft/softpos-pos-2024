import { Box, Typography } from "@mui/material";

function TallBarNode({ data }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "2px solid", height: '400px', width: '100px' }}>
      <Typography variant="h5">{ data.label }</Typography>
    </Box>
  )
}

export default TallBarNode
