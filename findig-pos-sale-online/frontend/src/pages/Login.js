import { useState } from "react"
import { Container, TextField, Button, Typography } from "@mui/material"

import { login } from "../api/auth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await login(email, password)
      localStorage.setItem("token", data.token)
      alert("Login Successful!")
    } catch (error) {
      alert("Invalid Credentials")
    }
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  )
}

export default Login
