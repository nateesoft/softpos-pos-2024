import React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Fab from "@mui/material/Fab"
import ArrowBack from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  margin: "0 auto",
  background: "green"
})

const BackGroupMenu = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <AppBar
      position="fixed"
      color="primary"
    >
      <StyledFab color="success" aria-label="back" onClick={handleBack}>
        <ArrowBack fontSize="large" />
      </StyledFab>
    </AppBar>
  )
}

export default BackGroupMenu
