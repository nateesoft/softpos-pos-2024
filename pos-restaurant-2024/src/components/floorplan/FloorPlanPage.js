import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal'
import { Box } from "@mui/material";
import CustomerCheckin from "./CustomerCheckin";

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
  width: "85px",
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

const buttonPink = {
  width: "100px", height: "50px", backgroundColor: "pink"
}

const emptyTable = "Free Table"
const fullTable = "Full Table"
const instuctTable = "Instruct"
const notUseTable = "Not Use"
const reserveTable = "Reserve"

function FloorPlanPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [tableStatus, setTableStatus] = useState("")

  const openTable = () => {
    navigate("/sale");
  }

  const handleClick = (tableNumber, status) => {
    setTableNo(tableNumber)
    setTableStatus(status)
    setOpen(true)
  }
  const backLogin = () => {
    navigate("/");
  }

  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>

      <div style={{ padding: "10px" }}>
        <table width="100%">
          <tr>
            <td align="left">
              <button style={{ backgroundColor: "gray", fontWeight: "bold", width: "200px", height: "30px", marginLeft: "15px", color: "snow" }}>Floor: VIP Floor</button>
            </td>
            <td align="right">
              <div>
                <button style={{...button, width: "150px"}}>แยกโต๊ะ/รวมโต๊ะ</button>
                <button style={button}>จัดการโต๊ะ</button>
                <button style={{ ...button, backgroundColor: "red", color: "snow" }} onClick={backLogin}>Logout</button>
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
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black", marginRight: "15px" }} onClick={() => handleClick("T-1", fullTable)}>T-1</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", border: "1px solid black", borderRadius: "2px", color: "white" }} onClick={() => handleClick("T-4", emptyTable)}>T-4</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T-5", fullTable)}>T-5</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T-6", fullTable)}>T-6</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-1", reserveTable)}>R-1</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "blue", borderRadius: "2px", border: "1px solid black", color: "white" }} onClick={() => handleClick("T-8", notUseTable)}>T-8</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-9", fullTable)}>T-9</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-10", fullTable)}>T-10</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "red", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-11", instuctTable)}>T-11</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-12", fullTable)}>T-12</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "orange", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-13", instuctTable)}>T-13</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid black", color: "white", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-2", emptyTable)}>R-2</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <button style={{ width: "350px", height: "50px", backgroundColor: "white", borderRadius: "2px", border: "1px solid black", color: "black", fontSize: "22px" }} onClick={() => handleClick("Bar-1", reserveTable)}>Bar-1</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-19", fullTable)}>T-19</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-20", fullTable)}>T-20</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-3", reserveTable)}>R-3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid gray", color: "black" }} onClick={() => handleClick("T-22", fullTable)}>T-22</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid gray", color: "black" }} onClick={() => handleClick("T-23", fullTable)}>T-23</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white" }} onClick={() => handleClick("T-26", emptyTable)}>T-26</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white" }} onClick={() => handleClick("T-27", emptyTable)}>T-27</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid gray", color: "white", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-4", emptyTable)}>R-4</button>
            </td>
          </tr>
        </table>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
          <CustomerCheckin openTable={openTable} tableNo={tableNo} status={tableStatus} />
        </Box>
      </Modal>
    </div>
  )
}

export default FloorPlanPage
