import React, { useContext, useState } from "react"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useNavigate } from "react-router-dom"
import Moment from 'react-moment'
import NoFoodIcon from "@mui/icons-material/NoFood"
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  IconButton
} from "@mui/material"
import Grid from "@mui/material/Grid2"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Cancel"
import VoidIcon from "@mui/icons-material/NotInterested"
import ConfirmIcon from "@mui/icons-material/Check"
import axios from "axios"
import ArrowBack from "@mui/icons-material/TableBar"
import SplitBillIcon from "@mui/icons-material/VerticalSplit"
import PrintIcon from "@mui/icons-material/Print"
import PrintCheckboxIcon from "@mui/icons-material/CheckBox"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from '@mui/icons-material/DoNotDisturbOn';

import SplitBiPayment from "./SplitBillPayment"
import OptionMenuSelect from "./OptionMenuSelect"
import { POSContext } from "../../AppContext"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const ProductCard = ({ tableNo, product, openModal, initLoadMenu, initLoadOrder }) => {
  console.log("OrderItem(ProductCard):", product)
  const { appData } = useContext(POSContext)
  const { macno, userLogin, empCode } = appData
  const [count, setCount] = useState(product.R_Quan || 1)

  const handleRemoveItem = () => {
    const updCount = Math.max(count - 1, 0)
    axios.patch(`/api/balance/updateQty`, {
      tableNo: tableNo,
      rIndex: product.R_Index,
      qty: updCount
    })
      .then(response => {
        console.log('update qty success:', response)
        if (updCount > 0) {
          setCount(updCount)
        }
        initLoadMenu()
        initLoadOrder()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleAddItem = () => {
    axios.post(`/api/balance`, {
      tableNo, menuInfo: {
        menu_code: product.R_PluCode,
        menu_name: product.R_PName,
        menu_price: product.R_Price
      }, qty: 1, macno, userLogin, empCode
    })
      .then(response => {
        initLoadMenu()
        initLoadOrder()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #eee",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "2px 2px #eee",
        backgroundColor: product.R_Pause==='P' ? "#f4fbfc": "snow"
      }}
    >
      <Grid container spacing={2}>
        <Grid size={5}>
          <img
            src={product.image_url}
            alt=""
            height={100}
            style={{ borderRadius: "5px", width: "120px" }}
            onClick={openModal}
          />
        </Grid>
        <Grid size={7}>
          <Grid container direction="column" justifyContent="flex-end">
            <Grid>{product.R_PName}</Grid>
            <Grid display="flex" justifyContent="center">
              <IconButton onClick={handleRemoveItem} disabled={product.R_Pause==='P'}>
                <RemoveCircleIcon sx={{color: product.R_Pause==='P' ? "gray": "red"}} fontSize="large" />
              </IconButton>
              <TextField
                inputProps={{ min: 0, style: { textAlign: "right", width: '35px', fontWeight: "bold" } }}
                variant="outlined"
                type="number"
                value={count}
                disabled
                onChange={(e) => setCount(e.target.value)}
              />
              <IconButton onClick={handleAddItem}>
                <AddCircleIcon color="success" fontSize="large" />
              </IconButton>
            </Grid>
            <Grid>
              <Grid container>
                <Typography>
                  {product.R_Price} x {product.R_Quan}{" "}
                </Typography>
                <Typography>&nbsp;=</Typography>
                <Typography>{product.R_Price * product.R_Quan}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
const ProductDetailCard = ({
  product,
  handleNotification,
  closeModal,
  initLoadOrder,
  initLoadMenu
}) => {
  const [count, setCount] = useState(product.qty || 0)
  const [orderType, setOrderType] = useState("E")

  const handleChange = (event, oType) => {
    setOrderType(oType)
  }

  const handleConfirm = () => {
    if (count === 0) {
      // delete item
      axios.delete(`/api/product_order/${product.id}`).then((response) => {
        if (response.data.code === 200) {
          // update product qty
          axios
            .patch(`/api/product/${product.id}`, { id: product.id, qty: count })
            .then((response2) => {
              if (response2.data.code === 200) {
                initLoadMenu()
                initLoadOrder()
                closeModal()
              }
            })
            .catch((error) => {
              handleNotification(error)
            })
        }
      })
    } else {
      // update item
      product.qty = count
      axios
        .patch(`/api/product_order/${product.id}`, { ...product })
        .then((response) => {
          if (response.data.code === 200) {
            // update product qty
            axios
              .patch(`/api/product/${product.id}`, {
                id: product.id,
                qty: count
              })
              .then((response2) => {
                if (response2.data.code === 200) {
                  initLoadMenu()
                  initLoadOrder()
                  closeModal()
                }
              })
              .catch((error1) => {
                handleNotification(error1)
              })
          }
        })
        .catch((error) => {
          handleNotification(error)
        })
    }
  }

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #eee",
        borderRadius: "10px"
      }}
    >
      <div align="center" style={{ padding: "10px" }}>
        <Box sx={{ padding: "10px" }}>
          <Typography variant="h5">{product.menu_name}</Typography>
        </Box>
        <table width="100%">
          <tr>
            <td colSpan={2} align="center">
              <img
                src={product.image_url}
                width={150}
                alt=""
                style={{ borderRadius: "10px", boxShadow: "2px 3px #ccc" }}
              />
              <br />
            </td>
          </tr>
        </table>
      </div>
      <Alert severity="success" sx={{ width: "100%" }}>
        <Box>
          <Typography variant="span">เวลาสั่ง: 06/11/2024 10.10.000</Typography>
        </Box>
        <Box>
          <Typography variant="span">สถานะส่งครัว: ยังไม่ได้ส่ง</Typography>
        </Box>
      </Alert>
      <div align="center" style={{ padding: "10px" }}>
        <table width="100%">
          <tr>
            <td align="left">
              <u>ราคา {product.menu_price} บาท</u>
            </td>
            <td
              align="right"
              style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}
            >
              อาหารหลัก*
            </td>
          </tr>
        </table>
      </div>
      <Grid container spacing={2} display="flex" justifyContent="space-evenly">
        <IconButton
          size="large"
          sx={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            setCount(Math.max(count - 1, 0))
          }}
        >
          <RemoveIcon fontSize="large" />
        </IconButton>
        <TextField
          variant="outlined"
          type="number"
          value={count}
          onChange={(evt) => setCount(evt.target.value)}
          inputProps={{
            min: 0,
            style: { textAlign: "center", fontSize: "20px", width: "100px" }
          }}
        />
        <IconButton
          size="large"
          sx={{ backgroundColor: "green", color: "white" }}
          onClick={() => {
            setCount(count + 1)
          }}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Grid>
      <OptionMenuSelect productCode={product.R_PluCode} />
      <Box sx={{ padding: "10px" }}>
        <Box>
          <Typography variant="p">ประเภทอาหาร</Typography>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ margin: "10px" }}>
          <ToggleButtonGroup
            color="primary"
            value={orderType}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="E">Dine In</ToggleButton>
            <ToggleButton value="T">Take Away</ToggleButton>
            <ToggleButton value="D">Delivery</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {count === 0 && (
        <Alert severity="error" sx={{ width: "100%", marginBottom: "5px" }}>
          <Box>
            <Typography variant="span">
              คุณต้องการลบรายการอาหารนี้หรือไม่ !!!
            </Typography>
          </Box>
        </Alert>
      )}
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="error"
          onClick={closeModal}
          sx={{ marginRight: "10px" }}
          startIcon={<CloseIcon />}
        >
          CANCEL
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={closeModal}
          sx={{ marginRight: "10px" }}
          startIcon={<VoidIcon />}
        >
          ยกเลิก (VOID)
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleConfirm}
          startIcon={<ConfirmIcon />}
        >
          CONFIRM
        </Button>
      </Grid>
    </div>
  )
}
const TotalBill = ({ tableNo, orderList }) => {
  let totalBill = 0
  for (let i = 0; i < orderList.length; i++) {
    totalBill = totalBill + parseInt(orderList[i].R_Quan*orderList[i].R_Price)
  }
  totalBill = totalBill.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  return (
    <div
      style={{
        padding: "5px",
        backgroundColor: "salmon",
        border: "2px solid #eee",
        borderRadius: "10px",
        margin: "5px"
      }}
    >
      <Grid container spacing={2}>
        <Typography variant="p" sx={{ fontWeight: "bold", margin: "4px" }}>Total Amount</Typography>
      </Grid>
      <Grid container display="flex" justifyContent="flex-end">
        <Typography variant="h2" sx={{ fontWeight: "bold", textShadow: "2px 2px white" }}>{totalBill}</Typography>
      </Grid>
    </div>
  )
}

const OrderItem = ({
  tableNo,
  OrderList,
  OrderEList,
  OrderTList,
  OrderDList,
  initLoadMenu,
  initLoadOrder,
  typePopup = false,
  handleNotification
}) => {
  const navigate = useNavigate()
  const [value, setValue] = React.useState("1")
  const [open, setOpen] = useState(false)
  const [openSplitBill, setOpenSplitBill] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const [showKicPrint, setShowKicPrint] = useState(false)

  // const matches = useMediaQuery('(min-width:600px)');

  const styleMain = {
    typography: "body1",
    marginTop: "8vh"
  }

  const stylePopup = {
    width: "350x",
    height: "85vh",
    typography: "body1"
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = () => {
    navigate(`/payment/${tableNo}`)
  }

  const backFloorPlan = () => {
    navigate("/floorplan")
  }

  const handleOpenMenu = (product) => {
    setProductInfo(product)
    setOpen(true)
  }

  function handlePrint() {
    // update send to Kic
    axios.patch(`/api/balance/printToKic/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          setShowKicPrint(false)
        }
      })
      .catch(err => {
        handleNotification(err)
      })

  }

  return (
    <Box sx={typePopup ? stylePopup : styleMain}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Dine In" value="1" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Take Away" value="2" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Delivery" value="3" sx={{ boxShadow: "2px 2px #eee" }} />
        </TabList>
        <Box textAlign="center" sx={{ marginTop: "10px" }}>
          <Typography variant="h5">รายการอาหารที่สั่ง</Typography>
        </Box>
        <Box textAlign="center" sx={{ marginTop: "10px" }}>
          <Typography 
            variant="p"
            sx={{
              border: "1px solid salmon",
              fontWeight: "bold",
              color: "snow",
              borderRadius: "15px",
              padding: "12px",
              background: "chocolate"
            }}
          >
            โต๊ะ {tableNo}
          </Typography>
        </Box>
        <TabPanel
          value="1"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderEList && OrderEList.map((product) => {
            return (
              <ProductCard
                tableNo={tableNo}
                product={product}
                handleNotification={handleNotification}
                initLoadMenu={initLoadMenu}
                initLoadOrder={initLoadOrder}
                openModal={() => handleOpenMenu(product)}
              />
            )
          })}
          {OrderEList && OrderEList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Dine In
              </Typography>
            </Box>
          )}
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderTList && OrderTList.map((product) => {
            return (
              <ProductCard
                tableNo={tableNo}
                product={product}
                handleNotification={handleNotification}
                initLoadMenu={initLoadMenu}
                initLoadOrder={initLoadOrder}
                openModal={() => handleOpenMenu(product)}
              />
            )
          })}
          {OrderTList && OrderTList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Take Away
              </Typography>
            </Box>
          )}
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderDList && OrderDList.map((product) => {
            return (
              <ProductCard
                tableNo={tableNo}
                product={product}
                handleNotification={handleNotification}
                initLoadMenu={initLoadMenu}
                initLoadOrder={initLoadOrder}
                openModal={() => handleOpenMenu(product)}
              />
            )
          })}
          {OrderDList && OrderDList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Delivery
              </Typography>
            </Box>
          )}
        </TabPanel>
      </TabContext>
      <Grid container spacing={2} margin={3} justifyContent="center">
        <Button
          variant="outlined"
          startIcon={<PrintCheckboxIcon />}
          onClick={() => setShowKicPrint(true)}
          sx={{ marginRight: "10px" }}
        >
          ตรวจสอบปริ้นเตอร์
        </Button>
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          disabled={OrderList.length === 0}
          onClick={() => setShowKicPrint(true)}
        >
          ส่งครัว/ พักโต๊ะ
        </Button>
      </Grid>
      <TotalBill tableNo={tableNo} orderList={OrderList} />
      <Grid container spacing={1} justifyContent="center">
        {typePopup === false && (
          <Button
            variant="contained"
            color="primary"
            onClick={backFloorPlan}
            startIcon={<ArrowBack />}
          >
            Floor Plan
          </Button>
        )}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenSplitBill(true)}
          endIcon={<SplitBillIcon />}
          disabled={OrderList.length === 0}
        >
          แยกชำระ
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
          disabled={OrderList.length === 0}
          endIcon={<PointOfSaleIcon />}
        >
          ชำระเงิน
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ProductDetailCard
            product={productInfo}
            handleNotification={handleNotification}
            closeModal={() => setOpen(false)}
            initLoadMenu={initLoadMenu}
            initLoadOrder={initLoadOrder}
          />
        </Box>
      </Modal>

      <Modal
        open={showKicPrint}
        onClose={() => setShowKicPrint(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }} id="paperPrint">
          <Paper elevation={3} sx={{ padding: "10px" }}>
            <div align="center">*** รายการส่งครัว ***</div>
            <div>Table No: {tableNo}</div>
            <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
            <hr />
            {OrderEList && OrderEList.length > 0 &&
              (<div>
                <div>Dine in</div>
                <hr />
                <table width="100%">
                  {OrderEList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            {OrderTList && OrderTList.length > 0 &&
              (<div>
                <div>Take Away</div>
                <hr />
                <table width="100%">
                  {OrderTList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            {OrderDList && OrderDList.length > 0 &&
              (<div>
                <div>Deliver</div>
                <hr />
                <table width="100%">
                  {OrderDList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
              >
                Print
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>

      <Modal open={openSplitBill} onClose={() => setOpenSplitBill(false)}>
        <Box sx={{ ...modalStyle, width: "80%" }}>
          <SplitBiPayment onClose={() => setOpenSplitBill(false)} />
        </Box>
      </Modal>
    </Box>
  )
}

export default OrderItem
