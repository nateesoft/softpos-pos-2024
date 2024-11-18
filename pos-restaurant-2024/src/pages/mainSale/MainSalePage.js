import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import axios from 'axios'
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';

import AppbarMenu from './AppbarMenu'
import ProductMenu from './ProductMenu'
import OrderItem from './OrderItem'
import { POSContext } from "../../AppContext";

function MainSalePage() {
  console.log('MainSalePage')
  const { appData } = useContext(POSContext)
  const { tableNo } = appData.tableInfo

  const matches = useMediaQuery('(min-width:1024px)');
  const [ProductList, setProductList] = useState([])
  const [ProductA, setProductA] = useState([])
  const [ProductB, setProductB] = useState([])
  const [ProductC, setProductC] = useState([])
  const [ProductD, setProductD] = useState([])
  const [ProductE, setProductE] = useState([])
  const [ProductF, setProductF] = useState([])

  const [orderList, setOrderList] = useState([])

  const initLoadMenu = useCallback(() => {
    axios.get("/api/product")
      .then((response) => {
        console.log('initLoadMenu:', response)
        if (response.data.code === 200) {
          const productList = response.data.data
          setProductList(productList.filter(product => product.group !== "A"))

          setProductA(productList.filter(product => product.group === "A"))
          setProductB(productList.filter(product => product.group === "B"))
          setProductC(productList.filter(product => product.group === "C"))
          setProductD(productList.filter(product => product.group === "D"))
          setProductE(productList.filter(product => product.group === "E"))
          setProductF(productList.filter(product => product.group === "F"))
        }
      })
  },[])

  const initLoadOrder = useCallback(() => {
    axios.get("/api/product_order")
      .then((response) => {
        console.log('initLoadOrder:', response)
        if (response.data.code === 200) {
          setOrderList(response.data.data)
        }
      })
  }, [])

  useEffect(() => {
    initLoadMenu()
    initLoadOrder()
  }, [initLoadMenu, initLoadOrder])

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <AppbarMenu tableNo={tableNo} />
      <Grid container>
        <Grid size={matches ? 8 : 12}>
          <ProductMenu 
            ProductList={ProductList} 
            ProductA={ProductA} 
            ProductB={ProductB} 
            ProductC={ProductC} 
            ProductD={ProductD} 
            ProductE={ProductE} 
            ProductF={ProductF} 
            OrderList={orderList} 
            initLoadMenu={initLoadMenu} 
            initLoadOrder={initLoadOrder} />
        </Grid>
        {matches && <Grid size={4} sx={{backgroundColor: "white", border: "2px solid #ddd"}}>
          <OrderItem 
            tableNo={tableNo} 
            OrderList={orderList} 
            initLoadMenu={initLoadMenu} 
            initLoadOrder={initLoadOrder} 
            typePopup={false} />
        </Grid>}
      </Grid>
    </motion.div>
  )
}

export default MainSalePage;