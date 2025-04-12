import React, { useState } from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import { Button } from "@mui/material"
import FindInPageIcon from "@mui/icons-material/FindInPage"

import apiClient from "../../../httpRequest"
import { useAlert } from "../../../contexts/AlertContext"

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
        width: "20ch"
      }
    }
  }
}))

const SearchMember = ({ setMemberMasters }) => {
  const { handleNotification } = useAlert()

  const [phone, setPhone] = useState("")
  const [code, setCode] = useState("")
  const [name, setName] = useState("")

  const handleSearchMember = () => {
    if (!phone && !code && !name) {
      return
    }
    apiClient
      .post("/api/crm/member/search", { phone, code, name })
      .then((response) => {
        setMemberMasters(response.data.data)
      })
      .catch((err) => handleNotification(err.message))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: "15px 15px 0px 0px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HowToRegIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="เบอร์โทร…"
              inputProps={{ "aria-label": "search" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Search>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="เลขที่สมาชิก…"
              inputProps={{ "aria-label": "search" }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Search>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ชื่อ-นามสกุล…"
              inputProps={{ "aria-label": "search" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Search>
          <Box margin={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#eee", color: "black" }}
              startIcon={<FindInPageIcon />}
              onClick={handleSearchMember}
            >
              ค้นหาสมาชิก
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchMember
