import React, { useCallback, useEffect, useState } from "react"
import Grid from "@mui/material/Grid2"
import axios from "axios"
import { motion } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"

import AppbarMenu from "./AppbarMenu"
import ProductMenu from "./ProductMenu"
import OrderItem from "./OrderItem"
import { useParams } from "react-router-dom"

function MainSalePage() {
  const { tableNo } = useParams();
  console.log("MainSalePage:", tableNo)

  const matches = useMediaQuery("(min-width:1024px)")
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

  const initLoadMenu = useCallback(() => {
    axios
      .get("/api/menu_setup")
      .then((response) => {
        console.log("initLoadMenu:", response)
        if (response.data.code === 200) {
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
        alert(error)
      })
  }, [])

  const initLoadOrder = useCallback(async () => {
    const responseMenuSetup = await axios.get(`/api/menu_setup/all`)
    const listMenuSetup = responseMenuSetup.data.data
    console.log(listMenuSetup)
    axios
      .get(`/api/balance/table/${tableNo}`)
      .then((response) => {
        console.log("initLoadOrder:", response)
        if (response.status === 200) {
          const dataList = response.data.data
          const dataEList = dataList.filter(item => item.R_ETD==="E")
          const dataTList = dataList.filter(item => item.R_ETD==="T")
          const dataDList = dataList.filter(item => item.R_ETD==="D")
          setOrderList(
            dataList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if(!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderEList(
            dataEList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if(!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderTList(
            dataTList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if(!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
          setOrderDList(
            dataDList.map((item) => {
              const menu = listMenuSetup.find((a) => a.menu_code === item.R_PluCode)
              if(!menu) return item
              return {
                ...item,
                image_url: menu.image_url
              }
            })
          )
        }
      })
      .catch((error) => {
        alert('initLoadOrder'+ error)
      })
  }, [tableNo])

  useEffect(() => {
    initLoadMenu()
    initLoadOrder()
  }, [initLoadMenu, initLoadOrder])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppbarMenu tableNo={tableNo} />
      <Grid container>
        <Grid size={matches ? 8 : 12}>
          <ProductMenu
            tableNo={tableNo}
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
          />
        </Grid>
        {matches && (
          <Grid
            size={4}
            sx={{ backgroundColor: "white", border: "2px solid #ddd" }}
          >
            <OrderItem
              tableNo={tableNo}
              OrderList={orderList}
              OrderEList={orderEList}
              OrderTList={orderTList}
              OrderDList={orderDList}
              initLoadMenu={initLoadMenu}
              initLoadOrder={initLoadOrder}
              typePopup={false}
            />
          </Grid>
        )}
      </Grid>
    </motion.div>
  )
}

export default MainSalePage
