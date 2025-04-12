import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreIcon from "@mui/icons-material/MoreVert"
import { Button } from "@mui/material"
import Grid from "@mui/material/Grid2"
import FloorPlanMgr from "@mui/icons-material/TableBar"
import SaveIcon from "@mui/icons-material/Save"
import CloseIcon from "@mui/icons-material/Close"

import FloorSelect from "./FloorSelect"

const mobileMenuId = "primary-search-account-menu-mobile"

const AppbarMenu = (props) => {
  const { onSave, onExit, selectFloor, setSelectFloor } = props
  return (
    <AppBar position="fixed">
      <Toolbar>
        <FloorPlanMgr sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            fontWeight: 700
          }}
        >
          จัดการ Floor Plan
        </Typography>
        <FloorSelect
          selectFloor={selectFloor}
          setSelectFloor={setSelectFloor}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Grid container spacing={1}>
          <Button
            variant="contained"
            color="info"
            startIcon={<SaveIcon />}
            onClick={onSave}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={onExit}
          >
            Exit
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

export default AppbarMenu
