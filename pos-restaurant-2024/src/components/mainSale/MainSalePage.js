import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import axios from 'axios'
import { motion } from 'framer-motion'

import AppbarMenu from './AppbarMenu'
import ProductMenu from './ProductMenu'
import OrderItem from './OrderItem'

function MainSalePage() {
  const [productList, setProductList] = useState([])
  const [orderList, setOrderList] = useState([])

  const initLoadMenu = () => {
    axios.get("/api/product")
      .then((response) => {
        console.log(response)
        if (response.data.code === 200) {
          setProductList(response.data.data)
        }
      })
  }
  const initLoadOrder = () => {
    axios.get("/api/product_order")
      .then((response) => {
        console.log(response)
        if (response.data.code === 200) {
          setOrderList(response.data.data)
        }
      })
  }

  useEffect(() => {
    initLoadMenu()
    initLoadOrder()
  }, [])
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <AppbarMenu />
      <Grid container spacing={2}>
        <Grid size={8}>
          <ProductMenu ProductList={productList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
        </Grid>
        <Grid size={2}>
          <OrderItem OrderList={orderList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default MainSalePage;