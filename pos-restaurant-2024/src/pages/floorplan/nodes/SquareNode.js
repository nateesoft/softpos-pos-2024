import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function SquareNode({ data }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '256px',
        width: '256px',
        backgroundImage: `url(${data.image ? data.image: 'images/floorplan/rectangle-table.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}>
      <Grid container spacing={2}>
        <Grid size={12} display="flex" justifyContent="center">
          <Typography variant="h5">{data.label}</Typography>
        </Grid>
        {data.customerCount && <Grid size={12} display="flex" justifyContent="center">
          <Typography variant="span">({data.customerCount})</Typography>
        </Grid>}
      </Grid>
    </Box>
  )
}

export default SquareNode