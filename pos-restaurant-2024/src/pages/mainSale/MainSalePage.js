import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Grid from "@mui/material/Grid2"
import useMediaQuery from "@mui/material/useMediaQuery"
import { motion } from "framer-motion"

import apiClient from '../../httpRequest'
import AppbarMenu from "./AppbarMenu"
import ProductMenu from "./ProductMenu"
import OrderItem from "./addOrderItem/OrderItem"
import ShowNotification from "../ui-utils/ShowNotification"
import Footer from '../Footer'

function MainSalePage() {
  console.log('MainSalePage')
  const { tableNo } = useParams();

  const matches = useMediaQuery("(min-width:1024px)")
  
  const [orderType, setOrderType] = useState("E")
  const [ProductList, setProductList] = useState([])
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

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type="error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const initLoadMenu = useCallback(() => {
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
  }, [])

  const initLoadTableCheckIn = useCallback(() => {
    apiClient
      .get(`/api/table_checkin/${tableNo}/lastCheckIn`)
      .then((response) => {
        if (response.status === 200) {
          const tableCheckInData = response.data.data
          setOrderType(tableCheckInData.table_order_type_start)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [tableNo])

  const initLoadOrder = useCallback(async () => {
    const responseMenuSetup = await apiClient.get(`/api/menu_setup/all`)
    const listMenuSetup = responseMenuSetup.data.data
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          const dataEList = dataList.filter(item => item.R_ETD === "E")
          const dataTList = dataList.filter(item => item.R_ETD === "T")
          const dataDList = dataList.filter(item => item.R_ETD === "D")
          setOrderList(
            dataList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderEList(
            dataEList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderTList(
            dataTList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if (!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderDList(
            dataDList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
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
  }, [tableNo])

  useEffect(() => {
    initLoadMenu()
    initLoadOrder()
    initLoadTableCheckIn()
  }, [initLoadMenu, initLoadOrder, initLoadTableCheckIn])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppbarMenu tableNo={tableNo} />
      <Grid container sx={{background: "radial-gradient(circle, #001, #000)"}}>
        <Grid size={matches ? 8 : 12}>
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
          />
        </Grid>
        {matches && (
          <Grid size={4} sx={{ backgroundColor: "white", border: "2px solid #ddd" }}>
            <OrderItem
              tableNo={tableNo}
              orderType={orderType}
              OrderList={orderList}
              OrderEList={orderEList}
              OrderTList={orderTList}
              OrderDList={orderDList}
              initLoadMenu={initLoadMenu}
              initLoadOrder={initLoadOrder}
              typePopup={false}
              handleNotification={handleNotification}
            />
          </Grid>
        )}
      </Grid>
      <Footer />
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  )
}

export default MainSalePage
