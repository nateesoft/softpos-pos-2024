import React from "react"
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid2} from "@mui/material"
import moment from 'moment'

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    console.log("Login clicked")
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        margin: 0,
        background: "linear-gradient(to bottom right, #00C0FF, red)"
      }}
    >
      <Grid2 container spacing={1} direction="row">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            เข้าสู่ระบบ
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            (POS Backoffice)
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="รหัสผู้ใช้งาน"
              type="text"
              variant="filled"
              margin="normal"
              autoComplete="email"
              required
            />
            <TextField
              fullWidth
              label="รหัสผ่าน"
              type="password"
              variant="filled"
              margin="normal"
              autoComplete="new-password"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, py: 1 }}
            >
              เข้าสู่ระบบ
            </Button>
          </Box>
          <Grid2 container marginTop={1} justifyContent="center" direction="column">
            <Typography>สำหรับ : HENG GETSU</Typography>
            <Typography>Date : {moment().format('DD/MM/YYYY HH:mm:ss')}</Typography>
          </Grid2>
        </Paper>
      </Grid2>
    </Box>
  )
}

export default LoginPage
