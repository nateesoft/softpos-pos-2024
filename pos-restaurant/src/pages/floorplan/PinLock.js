import React, { useContext, useState } from "react"
import { Alert, Box, Button, Grid2, Modal, Typography } from "@mui/material"

import apiClient from "../../httpRequest"
import CustomerCheckin from "./CustomerCheckin"
import { POSContext } from "../../AppContext"
import { useAlert } from "../../contexts/AlertContext"

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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

const numberStyle = {
  borderRadius: "50%",
  height: "65px",
  fontSize: "30px",
  bgcolor: "black",
  border: "1px solid gray",
  "&:hover": {
    background: "radial-gradient(circle, chocolate, #000)"
  }
}

const buttonRadius = {
  borderRadius: "50%",
  height: "65px",
  background: "black",
  border: "2px solid #aaa",
  fontSize: "36px"
}

const PinLock = ({ setOpenPin }) => {
  console.log("PinLock")
  const { appData, setAppData } = useContext(POSContext)
  const { handleNotification } = useAlert()

  const { userLogin, tableInfo } = appData
  const [openCustCheckIn, setOpenCustCheckIn] = useState(false)

  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")
  const [empCode, setEmpCode] = useState("")

  const [showError, setShowError] = useState(false)

  const handleSubmitPin = () => {
    if (pin1 || pin2 || pin3 || pin4) {
      const empCodeInput = pin1 + pin2 + pin3 + pin4
      setEmpCode(empCodeInput)
      apiClient
        .post("/api/employ/getEmployeeByCode", { code: empCodeInput })
        .then(async (response) => {
          const { pinValid } = response.data.data
          if (pinValid === true) {
            await apiClient.patch(
              `/api/tablefile/updateOpenTable/${tableInfo.tableNo}`,
              { Cashier: userLogin, TUser: empCodeInput }
            )
            setAppData({ ...appData, empCode: empCodeInput })
            setShowError(false)
            setOpenCustCheckIn(true)
          } else {
            setShowError(true)
          }
        })
        .catch((error) => {
          handleNotification(error.message)
        })
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

  if (tableInfo.tableNo === "") {
    setOpenPin(false)
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
              sx={numberStyle}
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
              onClick={handleSubmitPin}
            >
              OK
            </Button>
          </td>
        </tr>
      </table>
      <Modal open={openCustCheckIn} onClose={() => setOpenPin(false)}>
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
          <CustomerCheckin
            setOpenPin={setOpenPin}
            openTable={openCustCheckIn}
            empCode={empCode}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default PinLock
