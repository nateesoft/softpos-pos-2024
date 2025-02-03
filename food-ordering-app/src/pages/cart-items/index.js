import React, { useState } from "react"
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"
import AddCircle from "@mui/icons-material/AddCircle"
import RemoveCircle from "@mui/icons-material/RemoveCircle"
import MenuDetailModal from "../modal/MenuDetailModal"

const CartItems = ({ items, onClose, setOpenAlert }) => {
  const [openOptional, setOpenOptional] = useState(false)

  const handleOpenOptional = () => {
    setOpenOptional(true)
  }

  const handleSendKitchen = () => {
    setOpenAlert(true)
    onClose()
  }

  return (
    <>
      <Box padding={1}>
        <Typography fontSize={20} fontWeight="bold" color="#123456">
          รายการในตระกร้า
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
                      ฿{item.menuPrice}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td align="left">
                      <Button
                        variant="outlined"
                        color="warning"
                        onClick={handleOpenOptional}
                      >
                        แก้ไข
                      </Button>
                    </td>
                    <td>
                      <Grid2 spacing={1} container justifyContent="flex-end">
                        <RemoveCircle color="error" />
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "18px" }}
                        >
                          {item.qty}
                        </Typography>
                        <AddCircle color="success" />
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
          <Typography fontWeight="bold" fontSize={16}>
            รวมทั้งหมด
          </Typography>
          <Typography fontWeight="bold" fontSize={16}>
            ฿85.00
          </Typography>
        </Grid2>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={handleSendKitchen}
        >
          สั่ง {items.length} รายการ
        </Button>
      </Box>

      <MenuDetailModal
        openOptional={openOptional}
        setOpenOptional={setOpenOptional}
      />
    </>
  )
}

export default CartItems
