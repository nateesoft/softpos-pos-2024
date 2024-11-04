import React from "react"
import { useNavigate } from "react-router-dom";

const bgImage = {
  backgroundImage: `url(/images/floorplan_bg.jpg)`,
  width: "100vw",
  height: "100vh",
  border: "1px solid",
  padding: "10px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

const button = {
  height: "30px",
  marginRight: "5px",
  backgroundColor: "black",
  color: "white",
  width: "75px",
  border: "1px solid snow",
  fontWeight: "bold",
  borderRadius: "5px",
  cursor: "pointer"
}

const tableCust = {
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  padding: "20px",
  textAlign: "center",
  top: "55%",
  left: "50%",
  width: "90%",
  height: "75vh"
}

function FloorPlanPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sale");
  }
  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>

      <div style={{ padding: "10px" }}>
        <table width="100%">
          <tr>
            <td align="left">
              <span style={{ fontWeight: "bold", color: "white" }}>{`< Back`}</span>
            </td>
            <td align="left">
              <button style={{ backgroundColor: "gray", fontWeight: "bold", width: "200px", height: "30px", marginLeft: "15px", color: "snow" }}>Floor: VIP Floor</button>
            </td>
            <td align="right">
              <div>
                <button style={button}>Extra</button>
                <button style={button}>Reload</button>
                <button style={button}>Exit</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div style={bgImage}></div>
      <div style={tableCust}>
        <table border="0">
          <tr>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", border: "1px solid black", borderRadius: "2px", color: "black", marginRight: "15px"}}>T-1</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "green", border: "1px solid black", borderRadius: "2px", color: "white"}}>T-4</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", border: "1px solid black", borderRadius: "2px", color: "black"}}>T-5</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", border: "1px solid black", borderRadius: "2px", color: "black"}}>T-6</button>
            </td>
            <td>
              <button style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px"}}>R-1</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "blue", borderRadius: "2px", border: "1px solid black", color: "white"}}>T-8</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-9</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-10</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "red", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-11</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-12</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "orange", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-13</button>
            </td>
            <td>
              <button style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid black", color: "white", borderRadius: "50%", fontSize: "24px"}} onClick={handleClick}>R-2</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <button style={{width: "350px", height: "50px", backgroundColor: "white", borderRadius: "2px", border: "1px solid black", color: "black", fontSize: "22px"}}>Bar-1</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-19</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid black", color: "black"}}>T-20</button>
            </td>
            <td>
              <button style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px"}}>R-3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid gray", color: "black"}}>T-22</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "pink", borderRadius: "2px", border: "1px solid gray", color: "black"}}>T-23</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white"}}>T-26</button>
            </td>
            <td>
              <button style={{width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white"}}>T-27</button>
            </td>
            <td>
              <button style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid gray", color: "white", borderRadius: "50%", fontSize: "24px"}}>R-4</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default FloorPlanPage
