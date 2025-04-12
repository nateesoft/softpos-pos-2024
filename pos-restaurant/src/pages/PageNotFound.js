import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"

import { POSContext } from '../AppContext'

const PageNotFound = () => {
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  return (
    <>
      <Helmet>
        <title> {`404 page not found! | Error - POS Restaurant`}</title>
      </Helmet>

      <Grid container spacing={2} padding={5}>
        <Grid size={12} display="flex" justifyContent="center">
          <Typography variant="h3" sx={{ mb: 2 }}>
            Sorry, page not found!
          </Typography>
        </Grid>
        <Grid size={12} display="flex" justifyContent="center">
          <Box
            component="img"
            src={`/${baseName}/assets/illustration-404.svg`}
            sx={{
              width: 320,
              height: "auto",
              my: { xs: 5, sm: 10 }
            }}
          />
        </Grid>
        <Grid size={12} display="flex" justifyContent="center">
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default PageNotFound
