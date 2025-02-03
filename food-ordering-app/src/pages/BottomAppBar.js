import React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Fab from "@mui/material/Fab"
import Badge from "@mui/material/Badge"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
  background: "orange"
})

const BottomAppBar  = ({setOpenItemProgress}) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0, background: "radial-gradient(circle at center, #282c34, #000)" }}>
      <Toolbar>
        <StyledFab color="warning" aria-label="add" onClick={()=>setOpenItemProgress(true)}>
          <Badge badgeContent={4} color="error" sx={{
          "& .MuiBadge-badge": {
            fontSize: 16,
            fontWeight: "bold"
          }
        }}>
            <ShoppingBasketIcon />
          </Badge>
        </StyledFab>
      </Toolbar>
    </AppBar>
  )
}

export default BottomAppBar
