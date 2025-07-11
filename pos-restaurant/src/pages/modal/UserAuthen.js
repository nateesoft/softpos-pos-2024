import React, { useContext, useState } from "react"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import { useAlert } from "../../contexts/AlertContext"
import { loginAuth } from "../../api/userLoginApi"

const UserAuthen = ({ setAuthenUser, handleShowConfirm, onClose }) => {
  const { appData } = useContext(POSContext)
  const { encryptData } = appData
  const { handleNotification } = useAlert()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleCancel = () => {
    setUsername("")
    setPassword("")
    onClose()
  }

  const handleConfirm = () => {
    if (username && password) {
      const { data: posUser, error } = loginAuth({
        username,
        password: encryptData(password)
      })
      if(posUser) {
        if (posUser.Sale2 === "Y") {
          setAuthenUser(posUser)
          handleShowConfirm()
          onClose()
        } else {
          handleNotification("ข้อมูล Authentication Login ไม่ถูกต้อง!")
        }
      } else {
        setUsername("")
        setPassword("")
        handleNotification(error)
      }
    }
  }

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid2
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid2 container spacing={1} padding={1}>
          <Typography>User Authentication</Typography>
        </Grid2>
        <Grid2 container spacing={1} padding={1} direction="column">
          <TextField
            variant="filled"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </Grid2>
        <Grid2 container spacing={1} padding={1}>
          <Button variant="contained" color="error" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            endIcon={<LoginIcon />}
          >
            Ok
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default UserAuthen
