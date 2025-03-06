import React from "react"
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid2
} from "@mui/material"

import bg from "./welcome.jpg"

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
        <Grid2 container justifyContent="center">
          <img src={bg} alt="" width={600} style={{borderRadius: "5px"}} />
        </Grid2>
        <Paper elevation={3} sx={{ p: 4, width: "80%", maxWidth: 400, minHeight: 350, background: "radial-gradient(circle at center, snow, lightgreen)" }}>
          <Typography variant="h5" align="center" gutterBottom>
            POS Minimart
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              type="text"
              variant="filled"
              margin="normal"
              autoComplete="email"
              required
            />
            <TextField
              fullWidth
              label="Password"
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
              Login
            </Button>
          </Box>
        </Paper>
      </Grid2>
    </Box>
  )
}

export default LoginPage
