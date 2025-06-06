import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

import LanguageSettings from "./LanguageSettings"

const HeaderAppBar = ({ setOpenDashboard, setOpenBill }) => {
  const menuId = "primary-search-account-menu"
  const { id } = useParams()
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "radial-gradient(circle at center, #282c34, #000)"
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpenDashboard(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            พนักงาน: 1001
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <LanguageSettings />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={() => setOpenBill(true)}
            >
              <ReceiptLongIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="error"
              onClick={handleLogout}
            >
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderAppBar
