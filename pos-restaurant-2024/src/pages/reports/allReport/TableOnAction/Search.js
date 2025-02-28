import React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import { Grid2 } from "@mui/material"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import HomeIcon from "@mui/icons-material/Home"
import PrintIcon from "@mui/icons-material/Print"
import { useNavigate } from "react-router-dom"

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
      width: "22ch",
      "&:focus": {
        width: "40ch"
      }
    }
  }
}))

const AppbarSearch = ({ search, setSearch, handleLoad }) => {
  console.log("TableOnAction:AppbarSearch")
  const navigate = useNavigate()

  const backHomePage = () => {
    navigate("/floorplan")
  }

  const printTable = () => {}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ReceiptLongIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            รายงานโต๊ะค้าง (ยังไม่ได้ชำระเงิน)
          </Typography>
          <Grid2 container spacing={1}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search …"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Search>
          </Grid2>
          <Grid2 container margin={1}>
            <IconButton onClick={printTable}>
              <PrintIcon fontSize="large" sx={{ color: "snow" }} />
            </IconButton>
            <IconButton onClick={backHomePage}>
              <HomeIcon fontSize="large" sx={{ color: "snow" }} />
            </IconButton>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarSearch
