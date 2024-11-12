import { Box, Typography } from "@mui/material";

function LongBarNode({ data }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "2px solid", height: '100px', width: "400px" }}>
      <Typography variant="h5">{ data.label }</Typography>
    </Box>
  )
}

export default LongBarNode
