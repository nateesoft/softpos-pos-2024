import React from "react"
import Box from "@mui/material/Box"
import { Button, Grid2 } from "@mui/material"
import StoreIcon from "@mui/icons-material/Store"
import BusinessIcon from "@mui/icons-material/Business"
import GroupIcon from "@mui/icons-material/Group"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"

const panelStyle = {
  background: "radial-gradient(circle, #123456, #000)",
  borderRadius: "5px",
  padding: "10px",
  border: "1px solid gray",
  "&:hover": {
    background: "radial-gradient(circle, chocolate, #000)"
  }
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px",
  boxShadow: 24
}

const DashboardSetting = ({ setOpen, openSetting }) => {
  return (
    <Box
      sx={{
        ...modalStyle,
        padding: "10px",
        width: "450px",
        background: "none"
      }}
    >
      <Grid2 container spacing={1} justifyContent="space-between">
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <BusinessIcon sx={{ color: "white" }} fontSize="large" />
          <Button variant="text" sx={{ color: "white" }}>
            Company
          </Button>
        </Grid2>
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <StoreIcon sx={{ color: "white" }} fontSize="large" />
          <Button variant="text" sx={{ color: "white" }}>
            Branch
          </Button>
        </Grid2>
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <StoreIcon sx={{ color: "white" }} fontSize="large" />
          <Button variant="text" sx={{ color: "white" }}>
            Shop
          </Button>
        </Grid2>
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <PointOfSaleIcon sx={{ color: "white" }} fontSize="large" />
          <Button variant="text" sx={{ color: "white" }}>
            Terminal
          </Button>
        </Grid2>
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <GroupIcon sx={{ color: "white" }} fontSize="large" />
          <Button variant="text" sx={{ color: "white" }}>
            Employee
          </Button>
        </Grid2>
        <Grid2
          size={4}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <SettingsSuggestIcon sx={{ color: "white" }} fontSize="large" />
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => openSetting(true)}
          >
            Settings
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default DashboardSetting
