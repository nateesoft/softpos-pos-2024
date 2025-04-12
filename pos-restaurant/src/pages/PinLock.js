import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import {POSContext} from '../AppContext'

const bgImage = (baseName) => {
  return {
    backgroundImage: `url(/${baseName}/images/login_images.jpg)`,
    width: "100vw",
    height: "100vh",
    border: "1px solid",
    padding: "10px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "75%"
  }
}

const bgText = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  fontWeight: "bold",
  border: "1px solid #f1f1f1",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "2px 2px #eee"
}

const button = {
  width: "65px",
  height: "65px",
  borderRadius: "50%",
  fontSize: "48px",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold"
}

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

const PinLock = () => {
  const navigate = useNavigate();

  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")

  const handleClick = () => {
    if (pin1 && pin2 && pin3 && pin4) {
      if (pin1 + pin2 + pin3 + pin4 === "0000") {
        navigate("/floorplan");
      }
    }
  }

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

  return (
    <div>
      <div style={() => bgImage(baseName)}></div>
      <div style={bgText}>
        <h2 style={{ color: "gold", textShadow: "2px 3px black" }}>POS RESTAURANT</h2>
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
              <button style={button} onClick={() => handlePin("1")}>1</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("2")}>2</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("3")}>3</button>
            </td>
            <td>
              <button style={{ ...button, color: "red" }} onClick={() => handlePin("<")}>{`<`}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={button} onClick={() => handlePin("4")}>4</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("5")}>5</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("6")}>6</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("+")}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={button} onClick={() => handlePin("7")}>7</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("8")}>8</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("9")}>9</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("-")}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ ...button, fontSize: "14px", fontWeight: "bold", backgroundColor: "red" }} onClick={() => handlePin("clear")}>CLEAR</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("0")}>0</button>
            </td>
            <td>
              <button style={button} onClick={() => handlePin("_")}>_</button>
            </td>
            <td>
              <button style={{ ...button, fontSize: "14px", fontWeight: "bold", backgroundColor: "blue" }} onClick={handleClick}>LOGIN</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default PinLock
