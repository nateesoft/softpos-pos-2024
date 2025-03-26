import { Alert, Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"

const inputPin = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  fontSize: "48px",
  marginBottom: "30px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white"
}

const bgText = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  fontWeight: "bold",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px"
}

const NumberPadLock = ({ nextStep, close }) => {
  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")

  const [showError, setShowError] = useState(false)

  const handleClick = () => {
    if (pin1 && pin2 && pin3 && pin4) {
      if (pin1 + pin2 + pin3 + pin4 === "0000") {
        setShowError(false)
        close()
        nextStep(true)
      } else {
        setShowError(true)
      }
    }
  }

  const handlePin = (keyPad) => {
    setShowError(false)
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

  return (
    <div style={bgText}>
      <h2 style={{ color: "gold", textShadow: "2px 3px black" }}>PIN LOGIN</h2>
      {showError && (
        <Alert
          severity="error"
          sx={{ width: "100%", margin: "5px", background: "none" }}
        >
          <Box display="flex" textAlign="center">
            <Typography variant="span" sx={{ color: "white" }}>
              รหัสอนุมัติไม่ถูกต้อง
            </Typography>
          </Box>
        </Alert>
      )}
      <table>
        <tr>
          <td>
            <input style={inputPin} type="password" value={pin1} readOnly />
          </td>
          <td>
            <input style={inputPin} type="password" value={pin2} readOnly />
          </td>
          <td>
            <input style={inputPin} type="password" value={pin3} readOnly />
          </td>
          <td>
            <input style={inputPin} type="password" value={pin4} readOnly />
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("1")}
            >
              1
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("2")}
            >
              2
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("3")}
            >
              3
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("<")}
            >{`<`}</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("4")}
            >
              4
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("5")}
            >
              5
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("6")}
            >
              6
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
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
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("7")}
            >
              7
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
              onClick={() => handlePin("8")}
            >
              8
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
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
                bgcolor: "black",
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
              sx={{
                borderRadius: "50%",
                height: "65px",
                fontSize: "30px",
                bgcolor: "black",
                border: "1px solid gray"
              }}
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
                bgcolor: "black",
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
              onClick={handleClick}
            >
              OK
            </Button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default NumberPadLock
