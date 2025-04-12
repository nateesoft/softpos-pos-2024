import React, { useContext, useEffect, useState } from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircle from "@mui/icons-material/AccountCircle"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import MoreIcon from "@mui/icons-material/MoreVert"
import TableBarIcon from "@mui/icons-material/TableBar"
import { Button, Menu, MenuItem, Modal } from "@mui/material"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import Moment from "react-moment"
import { useNavigate } from "react-router-dom"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import QrCodeIcon from "@mui/icons-material/QrCode"
import { io } from "socket.io-client"

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import MenuSetupPage from "./setupMenu"
import { useAlert } from "../../contexts/AlertContext"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const appbarStyle = {
  border: "1px solid gray",
  background: "radial-gradient(circle, #123456, #000)",
  borderRadius: "5px"
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch"
      }
    }
  }
}))

const AppbarMenu = ({ tableNo, 
  setProductList,
  setProductA,
  setProductB,
  setProductC,
  setProductD,
  setProductE,
  setProductF,
  initLoadMenu
 }) => {
  const [search, setSearch] = useState("")
  
  const { appData } = useContext(POSContext)
  const { userLogin, socketHost } = appData

  // เชื่อมต่อกับ Socket.IO server
  const socket = io(socketHost, {
    autoConnect: false
  })

  const { handleNotification } = useAlert()

  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const mobileMenuId = "primary-search-account-menu-mobile"
  const [open, setOpen] = useState(false)
  const [openMenuSetup, setOpenMenuSetup] = useState(false)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const setupMenuPage = () => {
    setAnchorEl(null)
    setOpenMenuSetup(true)
  }

  const createQRCode = () => {
    apiClient.post("/api/customer/order", {
      branchCode: "xxx", // wait for get branch_code 
      tableNo: tableNo
    })
    .then(response => {
      if (response.status === 200) {
        const data = response.data.data
        socket.emit("createQRCode", data.redirectUrl)
        setAnchorEl(null)
      }
    })
    .catch((error) => {
      handleNotification(error.message)
    })
    
  }

  const navigate = useNavigate()
  const backFloorPlan = () => {
    navigate("/floorplan")
  }

  const handleEnterSearch = (evt) => {
    if (evt.key === "Enter") {
      seachProductMenu()
    }
  }

  const seachProductMenu = ()=> {
    if (search !== "") {
      apiClient
        .post("/api/menu_setup/search", { search })
        .then((response) => {
          setProductList([])
          setProductA([])
          setProductB([])
          setProductC([])
          setProductD([])
          setProductE([])
          setProductF([])
          if (response.status === 200) {
            const productList = response.data.data
            setProductList(
              productList.filter((product) => product.tab_group !== "")
            )
          } else {
            setProductList([])
          }
        }).catch((error) => {
          handleNotification(error.message)
        })
      } else {
        initLoadMenu()
      }
  }

  useEffect(() => {
    socket.connect()

    // ทำความสะอาดการเชื่อมต่อเมื่อ component ถูกทำลาย
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem
          onClick={() => setupMenuPage()}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box display="flex" justifyContent="center">
            <MenuBookIcon sx={{ marginRight: "10px" }} />
            <Typography variant="p">Menu Setup</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={createQRCode}>
          <Box display="flex" justifyContent="center">
            <QrCodeIcon sx={{ marginRight: "10px" }} />
            <Typography variant="p">QR สั่งอาหาร</Typography>
          </Box>
        </MenuItem>
      </Menu>
      <AppBar position="fixed" sx={appbarStyle}>
        <Toolbar>
          <div onClick={handleClick}>
            <PointOfSaleIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          </div>
          <Button
            variant="text"
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: "18px",
              color: "white"
            }}
            onClick={handleClick}
          >
            POS RESTUARANT ({tableNo})
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ค้นหาเมนู…"
              inputProps={{ "aria-label": "search" }}
              autoFocus
              value={search}
              onChange={e=>setSearch(e.target.value)}
              onKeyDown={handleEnterSearch}
            />
          </Search>
          <Button variant="contained" color="info" sx={{marginLeft: 1}} onClick={seachProductMenu}>ค้นหา</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
              <Typography sx={{ fontSize: "14px" }}>{userLogin}</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccessTimeIcon />
              <Typography sx={{ fontSize: "14px" }}>
                <Moment format="DD/MM/YYYY HH:mm" />
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={backFloorPlan}
            >
              <TableBarIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...modalStyle, width: "80%", borderRadius: "10px" }}>
          <div
            align="center"
            style={{
              backgroundColor: "yellow",
              padding: "20px",
              borderRadius: "10px",
              color: "gray",
              fontSize: "22px"
            }}
          >
            Special Menu 2024 ... Comming soon...
          </div>
        </Box>
      </Modal>
      <MenuSetupPage open={openMenuSetup} setOpen={setOpenMenuSetup} />
    </Box>
  )
}

export default AppbarMenu
