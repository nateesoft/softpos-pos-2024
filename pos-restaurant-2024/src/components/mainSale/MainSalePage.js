import React, { useEffect, useState } from "react";
import axios from 'axios'

import LeftMenu from './LeftMenu'
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
    <div>
      <table width="100%">
        <tr>
          <td valign="top">
            <LeftMenu />
          </td>
          <td>
            <ProductMenu ProductList={productList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
          </td>
          <td valign="top">
            <OrderItem OrderList={orderList} />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default MainSalePage;