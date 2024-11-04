import React from "react"
import { useNavigate } from "react-router-dom";

const bgImage = {
  backgroundImage: `url(/images/login_images.jpg)`,
  width: "100vw",
  height: "100vh",
  border: "1px solid",
  padding: "10px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "75%"
}

const bgText = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  fontWeight: "bold",
  border: "3px solid #f1f1f1",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  padding: "20px",
  textAlign: "center"
}

const button = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  fontSize: "48px",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold"
}

const inputPin = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  fontSize: "72px",
  marginBottom: "30px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white"
}

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/floorplan");
  }
  return (
    <div>
      <div style={bgImage}></div>

      <div style={bgText}>
        <h2 style={{color: "orange"}}>SOFTPOS RESTAURANT</h2>
        <table>
          <tr>
            <td>
              <input style={inputPin} type="password" />
            </td>
            <td>
              <input style={inputPin} type="password" />
            </td>
            <td>
              <input style={inputPin} type="password" />
            </td>
            <td>
              <input style={inputPin} type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <button style={button}>1</button>
            </td>
            <td>
              <button style={button}>2</button>
            </td>
            <td>
              <button style={button}>3</button>
            </td>
            <td>
              <button style={button}>{`<`}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={button}>4</button>
            </td>
            <td>
              <button style={button}>5</button>
            </td>
            <td>
              <button style={button}>6</button>
            </td>
            <td>
              <button style={button}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={button}>7</button>
            </td>
            <td>
              <button style={button}>8</button>
            </td>
            <td>
              <button style={button}>9</button>
            </td>
            <td>
              <button style={button}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ ...button, fontSize: "18px", fontWeight: "bold", backgroundColor: "red" }}>CLEAR</button>
            </td>
            <td>
              <button style={button}>0</button>
            </td>
            <td>
              <button style={button}>_</button>
            </td>
            <td>
              <button style={{ ...button, fontSize: "18px", fontWeight: "bold", backgroundColor: "blue" }} onClick={handleClick}>LOGIN</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default LoginPage
