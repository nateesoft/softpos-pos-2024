import { Helmet } from 'react-helmet-async';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function PageNotFound() {
  return (
    <>
      <Helmet>
        <title> {`404 page not found! | Error - POS Restaurant`}</title>
      </Helmet>

      <Grid container spacing={2} padding={5}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Sorry, page not found!
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>
      </Grid>
    </>
  );
}
