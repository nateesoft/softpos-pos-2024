import React from "react"
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid2
} from "@mui/material"

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
        height: "100vh"
      }}
    >
      <Grid2 container spacing={1} direction="row">
        <Paper elevation={3} sx={{ p: 4, width: "80%", maxWidth: 400, minHeight: 350 }}>
          <Typography variant="h5" align="center" gutterBottom>
            ระบบคลังสินค้า
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            (Inventory Management)
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
        </Paper>
      </Grid2>
    </Box>
  )
}

export default LoginPage
