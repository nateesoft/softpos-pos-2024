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
        background: "linear-gradient(to bottom right, #00C0FF, green)"
      }}
    >
      <Grid2 container spacing={1} direction="row">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            ระบบสมาชิก
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            (Customer Management)
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
          <Grid2 container margin={1} padding={1} justifyContent="center">
            <Typography>สำหรับ : HENG GETSU</Typography>
            <Typography>Date : {moment().format('DD/MM/YYYY HH:mm:ss')}</Typography>
          </Grid2>
        </Paper>
      </Grid2>
    </Box>
  )
}

export default LoginPage
