import React, { useCallback, useEffect, useState } from "react"
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"
import SendIcon from "@mui/icons-material/CheckBox"

import apiClient from "../../../httpRequest"

const items = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    menuName: "ก๋วยเตี๋ยวหมู",
    options: [
      { id: "101", label: "ใหญ่", price: 0 },
      { id: "102", label: "น้ำ", price: 0 },
      { id: "103", label: "เผ็ดปกติ", price: 0 }
    ],
    menuPrice: 60,
    qty: 1
  }
]

const CartItems = ({ onClose, orderId }) => {
  console.log('Show cart items:', orderId)
  const [orderInfo, setOrderInfo] = useState({})
  const handleSendKitchen = () => {
    onClose()
  }

  const initLoadOrder = useCallback(()=> {
    console.log('initLoadOrder')
    apiClient
    .post(`/api/integration/booking/getOrder`, { reserveNo: orderId })
    .then((response) => {
      console.log(response)
      if (response.data.status === 2000) {
        const appData = response.data.data
        setOrderInfo(appData)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [orderId])

  useEffect(()=> {
    initLoadOrder()
  }, [initLoadOrder])

  return (
    <>
      <Box padding={1}>
        <Typography fontSize={20} fontWeight="bold" color="#123456">
          รายการที่จองในระบบ
        </Typography>
        <Typography color="warning">
          Note: *{orderInfo.customer_note}*
        </Typography>
      </Box>
      <Divider />
      {orderInfo.line_items &&
        orderInfo.line_items.map((item) => (
          <div key={item.id}>
            <Box padding={1}>
              <table width="100%">
                <tbody>
                  <tr>
                    <td>
                      <img src={item.image.src} alt="" width="auto" height={80} />
                    </td>
                    <td align="left" valign="top">
                      <div>{item.name}</div>
                      {/* {item.options.map((itt) => (
                        <div key={itt.id}>- {itt.label}</div>
                      ))} */}
                    </td>
                    <td align="right" valign="top">
                      ฿{item.price}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td align="left"></td>
                    <td>
                      <Grid2 spacing={1} container justifyContent="flex-end">
                        <Typography sx={{ fontWeight: "bold" }}>
                          จำนวน {item.quantity}
                        </Typography>
                      </Grid2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Divider />
          </div>
        ))}
      <Box padding={1}>
        <Grid2 padding={1} container justifyContent="space-between">
          <Typography fontSize={16}>
            จำนวนรายการ
          </Typography>
          <Typography fontSize={16}>
            {orderInfo.line_items && orderInfo.line_items.length}
          </Typography>
        </Grid2>
        <Grid2 padding={1} container justifyContent="space-between">
          <Typography fontWeight="bold" fontSize={16}>
            รวมราคาสินค้า
          </Typography>
          <Typography fontWeight="bold" fontSize={16}>
            ฿{orderInfo.total}
          </Typography>
        </Grid2>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handleSendKitchen}
          endIcon={<SendIcon />}
        >
          ยืนยันข้อมูล
        </Button>
      </Box>
    </>
  )
}

export default CartItems
