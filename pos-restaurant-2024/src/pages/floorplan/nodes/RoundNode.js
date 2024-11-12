import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function RoundNode({ data }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '256px',
        width: '256px',
        backgroundColor: `${data.bgColor ? data.bgColor: 'none'}`,
        backgroundImage: `url(${data.image ? data.image: 'images/floorplan/round-table.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}>
      <Grid container spacing={2}>
        <Grid size={12} display="flex" justifyContent="center">
          <Typography variant="h5">{data.label}</Typography>
        </Grid>
        {data.customerCount && <Grid size={12} display="flex" justifyContent="center">
          <Typography variant="h4">{data.customerCount}</Typography>
        </Grid>}
      </Grid>
    </Box>
  )
}

export default RoundNode
