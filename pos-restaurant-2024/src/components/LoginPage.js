import React from "react"
import styled from "styled-components"

const background = {
  backgroundImage: `url(/)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  border: "1px solid",
  padding: "10px"
}

function LoginPage() {
  return (
    <div style={background}>
      <div style={{ float: "left" }}>Left</div>
      <div>Right</div>
    </div>
  )
}

export default LoginPage
