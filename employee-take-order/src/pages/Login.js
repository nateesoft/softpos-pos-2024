import React, {useState} from 'react'
import { Button, Grid2, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const numberStyle = {
  borderRadius: "50%",
  height: "65px",
  fontSize: "30px",
  bgcolor: "#123456",
  border: "1px solid gray",
  "&:hover": {
    background: "radial-gradient(circle, #123456, black)",
    color: "snow"
  }
}

const buttonRadius = {
  borderRadius: "50%",
  height: "65px",
  background: "#123456",
  border: "2px solid #aaa",
  fontSize: "36px"
}


const LoginPage = () => {
  const navigate = useNavigate()

  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")

  const handlePin = (keyPad) => {
    if (keyPad === "clear") {
      setPin1("")
      setPin2("")
      setPin3("")
      setPin4("")
      return
    }
    if (keyPad === "<") {
      if (pin4 !== "") {
        setPin4("")
      } else if (pin3 !== "") {
        setPin3("")
      } else if (pin2 !== "") {
        setPin2("")
      } else if (pin1 !== "") {
        setPin1("")
      }
      return
    }
    if (!pin1 || !pin2 || !pin3 || !pin4) {
      if (pin1 === "") {
        setPin1(keyPad)
      } else if (pin2 === "") {
        setPin2(keyPad)
      } else if (pin3 === "") {
        setPin3(keyPad)
      } else if (pin4 === "") {
        setPin4(keyPad)
      }
    }
  }
  const handleSubmitPin = () => {
    navigate('/tables')
  }

  return (
    <Grid2
      container
      direction="column"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "chocolate"
      }}
    >
      <Typography color="white" variant="h4" fontWeight={900} sx={{textShadow: "2px 2px green"}}>
        Employe Take Order
      </Typography>
      <Typography color="white" variant="p" sx={{marginBottom: "20px"}}>
        15/03/2025 08:08:00
      </Typography>
      <Grid2 container marginBottom={1}>
        <Button variant="contained" sx={buttonRadius}>
          {pin1 ? "#" : ""}
        </Button>
        <Button variant="contained" sx={buttonRadius}>
          {pin2 ? "#" : ""}
        </Button>
        <Button variant="contained" sx={buttonRadius}>
          {pin3 ? "#" : ""}
        </Button>
        <Button variant="contained" sx={buttonRadius}>
          {pin4 ? "#" : ""}
        </Button>
      </Grid2>
      <table>
        <tr>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("1")}
            >
              1
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("2")}
            >
              2
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("3")}
            >
              3
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{...numberStyle, background: "darkred"}}
              onClick={() => handlePin("<")}
            >{`<`}</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("4")}
            >
              4
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("5")}
            >
              5
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("6")}
            >
              6
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("+")}
            >
              +
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("7")}
            >
              7
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("8")}
            >
              8
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("9")}
            >
              9
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "#123456",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("-")}
            >
              -
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "14px",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("clear")}
            >
              CLR
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={numberStyle}
              onClick={() => handlePin("0")}
            >
              0
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "#123456",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("_")}
            >
              _
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "14px",
                border: "1px solid gray"
              }}
              onClick={handleSubmitPin}
            >
              OK
            </Button>
          </td>
        </tr>
      </table>
    </Grid2>
  )
}

export default LoginPage
