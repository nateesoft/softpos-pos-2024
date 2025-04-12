import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Grid2 from "@mui/material/Grid2"
import useMediaQuery from "@mui/material/useMediaQuery"
import { motion } from "framer-motion"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import { Alert, Snackbar, Typography } from "@mui/material"

import apiClient from "../../httpRequest"
import AppbarMenu from "./AppbarMenu"
import ProductMenu from "./ProductMenu"
import OrderItem from "./addOrderItem/OrderItem"
import Footer from "../Footer"
import { useAlert } from "../../contexts/AlertContext"
import { POSContext } from "../../AppContext"

function MainSalePage() {
  const { tableNo } = useParams()
  const { handleNotification } = useAlert()
  const { appData } = useContext(POSContext)
  const { macno, socket } = appData

  const matches = useMediaQuery("(min-width:1024px)")
  const [messageAlert, setMessageAlert] = useState("")
  const [showClient, setShowClient] = useState(false)

  const [orderType, setOrderType] = useState("E")
  const [ProductList, setProductList] = useState([])
  const [balanceProductGroup, setBalanceProductGroup] = useState([])
  const [ProductA, setProductA] = useState([])
  const [ProductB, setProductB] = useState([])
  const [ProductC, setProductC] = useState([])
  const [ProductD, setProductD] = useState([])
  const [ProductE, setProductE] = useState([])
  const [ProductF, setProductF] = useState([])

  const [orderList, setOrderList] = useState([])
  const [orderEList, setOrderEList] = useState([])
  const [orderTList, setOrderTList] = useState([])
  const [orderDList, setOrderDList] = useState([])

  // Load summary tablefile
  const [summaryTable, setSummaryTable] = useState({})

  const initLoadMenu = () => {
    apiClient
      .get("/api/menu_setup")
      .then((response) => {
        if (response.status === 200) {
          const productList = response.data.data
          setProductList(
            productList.filter((product) => product.tab_group !== "")
          )

          setProductA(
            productList.filter((product) => product.tab_group === "A")
          )
          setProductB(
            productList.filter((product) => product.tab_group === "B")
          )
          setProductC(
            productList.filter((product) => product.tab_group === "C")
          )
          setProductD(
            productList.filter((product) => product.tab_group === "D")
          )
          setProductE(
            productList.filter((product) => product.tab_group === "E")
          )
          setProductF(
            productList.filter((product) => product.tab_group === "F")
          )
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const initLoadTableCheckIn = () => {
    apiClient
      .get(`/api/table_checkin/${tableNo}/lastCheckIn`)
      .then((response) => {
        if (response.status === 200) {
          const tableCheckInData = response.data.data
          setOrderType(tableCheckInData?.table_order_type_start || "E")
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const initLoadOrder =async () => {
    const responseMenuSetup = await apiClient.get(`/api/menu_setup/all`)
    const listMenuSetup = responseMenuSetup.data.data
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          const dataEList = dataList.filter((item) => item.R_ETD === "E")
          const dataTList = dataList.filter((item) => item.R_ETD === "T")
          const dataDList = dataList.filter((item) => item.R_ETD === "D")
          setOrderList(
            dataList.map((item) => {
              const menu = listMenuSetup.find(
                (a) => a.menu_code === item.R_PluCode
              )
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderEList(
            dataEList.map((item) => {
              const menu = listMenuSetup.find(
                (a) => a.menu_code === item.R_PluCode
              )
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderTList(
            dataTList.map((item) => {
              const menu = listMenuSetup.find(
                (a) => a.menu_code === item.R_PluCode
              )
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderDList(
            dataDList.map((item) => {
              const menu = listMenuSetup.find(
                (a) => a.menu_code === item.R_PluCode
              )
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const initLoadBalanceProductGroup = () => {
    apiClient
      .get(`/api/balance/${tableNo}/groupProduct`)
      .then((response) => {
        if (response.status === 200) {
          setBalanceProductGroup(response.data.data)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const summaryTableFileBalance = () => {
      apiClient
        .post("/api/balance/summaryBalance", { tableNo, macno })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.data
            setSummaryTable({
              subTotalAmount: data.TAmount,
              discountAmount: data.DiscountAmount,
              service: data.Service,
              serviceType: data.ServiceType,
              serviceAmount: data.ServiceAmt,
              vat: data.Vat,
              vatType: data.VatType,
              vatAmount: data.VatAmount,
              netTotalAmount: data.NetTotal,
              productAndService: data.ProductAndService,
              printRecpMessage: data.PrintRecpMessage,
              productNoneVat: data.ProductNonVat,
            })
          }
        })
        .catch((err) => handleNotification(err.message))
    }

  useEffect(() => {
    initLoadMenu()
    initLoadOrder()
    initLoadTableCheckIn()
    initLoadBalanceProductGroup()
    summaryTableFileBalance()
  }, [])

  useEffect(() => {
    socket.connect()

    // รับข้อความจาก server
    socket.on("message", (newMessage) => {
      console.log(newMessage)
    })
    socket.on("customerMessage", (newMessage) => {
      console.log(newMessage)
      setShowClient(true)
      setMessageAlert(newMessage)
    })

    socket.on("reply", (newMessage) => {
      console.log(newMessage)
    })

    // ทำความสะอาดการเชื่อมต่อเมื่อ component ถูกทำลาย
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppbarMenu tableNo={tableNo} 
        setProductList={setProductList} 
        setProductA={setProductA} 
        setProductB={setProductB} 
        setProductC={setProductC} 
        setProductD={setProductD} 
        setProductE={setProductE} 
        setProductF={setProductF} 
        initLoadMenu={initLoadMenu}
      />
      <Grid2
        container
        sx={{ background: "radial-gradient(circle, #003, #000)", backgroundSize: "10px 10px" }}
      >
        <Grid2 size={matches ? 8 : 12}>
          <ProductMenu
            tableNo={tableNo}
            orderType={orderType}
            ProductList={ProductList}
            ProductA={ProductA}
            ProductB={ProductB}
            ProductC={ProductC}
            ProductD={ProductD}
            ProductE={ProductE}
            ProductF={ProductF}
            OrderList={orderList}
            OrderEList={orderEList}
            OrderTList={orderTList}
            OrderDList={orderDList}
            initLoadMenu={initLoadMenu}
            initLoadOrder={initLoadOrder}
            handleNotification={handleNotification}
            initLoadBalanceProductGroup={initLoadBalanceProductGroup}
            summaryTableFileBalance={summaryTableFileBalance}
          />
        </Grid2>
        <Grid2 size={4} sx={{
            backgroundColor: "white",
            border: "2px solid #ddd",
            display: { xs: "none", md: "flex" },
            marginTop: "65px"
          }}
        >
          <OrderItem
            tableNo={tableNo}
            balanceProductGroup={balanceProductGroup}
            orderType={orderType}
            OrderList={orderList}
            OrderEList={orderEList}
            OrderTList={orderTList}
            OrderDList={orderDList}
            initLoadMenu={initLoadMenu}
            initLoadOrder={initLoadOrder}
            typePopup={false}
            handleNotification={handleNotification}
            initLoadBalanceProductGroup={initLoadBalanceProductGroup}
            summaryTable={summaryTable}
            summaryTableFileBalance={summaryTableFileBalance}
          />
        </Grid2>
      </Grid2>
      <Footer />
      {showClient && (
        <Snackbar
          open={showClient}
          autoHideDuration={10000}
          onClose={() => setShowClient(false)}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
        >
          <Alert
            sx={{ background: "orange" }}
            icon={<NotificationsActiveIcon fontSize="large" color="error" />}
            severity="success"
          >
            <Typography fontWeight="bold" fontSize={20}>
              ลูกค้า: {messageAlert}
            </Typography>
          </Alert>
        </Snackbar>
      )}
    </motion.div>
  )
}

export default MainSalePage
