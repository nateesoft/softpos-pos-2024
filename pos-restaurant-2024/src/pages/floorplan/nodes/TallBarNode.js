import { Box, Typography } from "@mui/material";

function TallBarNode({ data }) {
  console.log('TallBarNode:', data)
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ border: "1px solid", height: '400px', width: '100px', backgroundColor: "sandybrown", boxShadow: "3px 2px chocolate" }}>
      <Typography variant="h5">{ data.label }</Typography>
    </Box>
  )
}

export default TallBarNode
