import React from "react"
import Box from "@mui/material/Box"
import { Button, Card, Grid2, Stack, Typography } from "@mui/material"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import InventoryIcon from "@mui/icons-material/Inventory"
import BadgeIcon from "@mui/icons-material/Badge"
import RememberMeIcon from "@mui/icons-material/RememberMe"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import FlagIcon from "@mui/icons-material/Flag"
import { useNavigate } from "react-router-dom"

const panelStyle = {
  background: "#123456",
  padding: "10px",
  border: "1px solid gray",
  "&:hover": {
    background: "#3989b8"
  }
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px"
}

const AppComponent = ({title, desc, Icon, onClick}) => {
  return (
    <Box onClick={()=>onClick()}>
      <Stack alignItems="center">
        <Icon sx={{ color: "white" }} />
        <Button variant="text" sx={{ color: "white" }}>
          {title}
        </Button>
        <Typography color="gold" sx={{ fontWeight: "bold" }}>
          {desc}
        </Typography>
      </Stack>
    </Box>
  )
}

const DashboardApps = ({ open }) => {
  const navigate = useNavigate()
  const handleOpenApp = (appName) => {
    if(appName === "posconfig") {
      window.location.href = 'http://localhost:5001/pos-control'
    } else if(appName === "inventory") {
      window.location.href = 'http://localhost:5002/inventory'
    } else if(appName === "crm") {
      window.location.href = 'http://localhost:5003/crm-management'
    } else if(appName === "hrm") {
      window.location.href = 'http://localhost:5004/hrm-management'
    } else if(appName === "transport") {
      window.location.href = 'http://localhost:5005/transport'
    } else if(appName === "takeorder") {
      window.location.href = 'http://localhost:5006/takeorder'
    } else if(appName === "report") {
      window.location.href = 'http://localhost:5007/all-report'
    }
  }

  return (
    <Box
      sx={{
        ...modalStyle,
        width: 500,
        background: "none"
      }}
    >
      <Grid2 spacing={1} container padding={2}>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="Restaurant" 
            desc="ร้านอาหาร" 
            onClick={()=>navigate('/floorplan')}
            Icon={RestaurantMenuIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="Minimart" 
            desc="ร้านค้าปลีก" 
            onClick={()=>navigate('/retail')}
            Icon={ShoppingCartIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="Inventory" 
            desc="ระบบคลังสินค้า" 
            onClick={()=>handleOpenApp('inventory')}
            Icon={InventoryIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="POS Config" 
            desc="ระบบควบคุม" 
            onClick={()=>handleOpenApp('posconfig')}
            Icon={InventoryIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="HRM" 
            desc="ระบบพนักงาน" 
            onClick={()=>handleOpenApp('hrm')}
            Icon={BadgeIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="CRM" 
            desc="ระบบสมาชิก" 
            onClick={()=>handleOpenApp('crm')}
            Icon={RememberMeIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="Transport" 
            desc="การจัดส่งสินค้า" 
            onClick={()=>handleOpenApp('transport')}
            Icon={LocalShippingIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="Take Order" 
            desc="รับออเดอร์" 
            onClick={()=>handleOpenApp('takeorder')}
            Icon={MenuBookIcon} />
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          container
          justifyContent="center"
          sx={panelStyle}
        >
          <AppComponent 
            title="All Report" 
            desc="ภาพรวมกิจการ" 
            onClick={()=>handleOpenApp('report')}
            Icon={FlagIcon} />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default DashboardApps
