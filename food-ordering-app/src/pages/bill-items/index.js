import React from 'react'
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"
import Timelapse from "@mui/icons-material/Timelapse"

const BillItems = ({ items, onClose }) => {
  return (
    <>
      <Box padding={1}>
        <Typography fontSize={20} fontWeight="bold" color="#123456">
          บิลอาหาร
        </Typography>
      </Box>
      <Divider />
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <Box padding={1}>
              <table width="100%">
                <tbody>
                  <tr>
                    <td>
                      <img src={item.img} width="auto" height={80} />
                    </td>
                    <td align="left">
                      <div>{item.menuName}</div>
                      {item.options.map((itt) => (
                        <div key={itt.id}>- {itt.label}</div>
                      ))}
                    </td>
                    <td align="right" valign="top">
                      <Typography fontWeight="bold" color='success'>{item.qty} X ฿{item.menuPrice}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td>สั่งโดย {item.orderBy}</td>
                    <td align="left">
                      <Button variant="outlined" color="warning">
                        {item.orderStatus}
                      </Button>
                    </td>
                    <td>
                      <Grid2 spacing={1} container justifyContent="flex-end">
                        <Timelapse color='info' /> {item.orderTime}
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
            <Typography fontWeight="bold" fontSize={16}>รวมทั้งหมด</Typography>
            <Typography fontWeight="bold" fontSize={16}>฿85.00</Typography>
          </Grid2>
          <Button variant="contained" color="warning" fullWidth onClick={()=>onClose()}>
            ดำเนินการต่อ
          </Button>
        </Box>
    </>
  )
}

export default BillItems
