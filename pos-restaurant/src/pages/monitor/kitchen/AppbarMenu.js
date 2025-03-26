import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreIcon from "@mui/icons-material/MoreVert"
import { Button } from "@mui/material"
import Grid from "@mui/material/Grid2"
import FilterFramesIcon from "@mui/icons-material/FilterFrames"
import HomeIcon from "@mui/icons-material/Home"
import { useNavigate } from "react-router-dom"

export default function AppbarMenu() {
  const navigate = useNavigate()
  const mobileMenuId = "primary-search-account-menu-mobile"

  const onBackFloorPlan = () => {
    navigate("/floorplan")
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "purple" }}>
      <Toolbar>
        <FilterFramesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            fontWeight: 700
          }}
        >
          Monitor รายการอาหารเข้าครัว
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Grid container spacing={1}>
          <Button
            variant="text"
            sx={{ color: "white" }}
            endIcon={<HomeIcon />}
            onClick={onBackFloorPlan}
          >
            Floor Plan
          </Button>
        </Grid>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
