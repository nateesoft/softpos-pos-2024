import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import axios from 'axios'
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';

import AppbarMenu from './AppbarMenu'
import ProductMenu from './ProductMenu'
import OrderItem from './OrderItem'
import { useLocation } from "react-router-dom";

function MainSalePage() {
  const { state } = useLocation()
  const { tableNo } = state

  const matches = useMediaQuery('(min-width:1024px)');
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
      <AppbarMenu tableNo={tableNo} />
      <Grid container>
        <Grid size={matches ? 8 : 12}>
          <ProductMenu tableNo={tableNo} OrderList={orderList} ProductList={productList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
        </Grid>
        {matches && <Grid size={4} sx={{backgroundColor: "white", border: "2px solid #ddd"}}>
          <OrderItem tableNo={tableNo} OrderList={orderList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} typePopup={false} />
        </Grid>}
      </Grid>
    </motion.div>
  )
}

export default MainSalePage;