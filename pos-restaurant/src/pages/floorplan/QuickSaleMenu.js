import React, { useState } from "react"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import Divider from "@mui/material/Divider"
import { IconButton, Menu, Typography } from "@mui/material"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Filter5Icon from '@mui/icons-material/Filter5';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const QuickSaleMenu = ({ setSelectFloor }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (data) => {
    setSelectFloor(data)
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MonetizationOnIcon fontSize="large" sx={{ color: "gold" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem>
          <Box display="flex" justifyContent="center">
            <Filter5Icon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">ขายแบบรอบัตรคิว</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Box display="flex" justifyContent="center">
            <ElectricBoltIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">ขายสินค้าทั่วไป</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  )
}

export default QuickSaleMenu
