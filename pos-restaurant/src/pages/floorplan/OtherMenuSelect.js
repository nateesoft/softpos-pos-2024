import React from "react"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import { Divider, IconButton, Menu, Typography } from "@mui/material"
import MoneyIcon from "@mui/icons-material/MonetizationOn"
import Splitscreen from "@mui/icons-material/Splitscreen"
import PrintIcon from "@mui/icons-material/Print"
import RefundIcon from "@mui/icons-material/ReceiptLong"
import TableBar from "@mui/icons-material/TableBar"
import EmplyIcon from "@mui/icons-material/People"
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"

const OtherMenuSelect = ({
  handleChange,
  handleClose,
  handleClick,
  open,
  anchorEl
}) => {
  return (
    <>
      <IconButton onClick={handleClick}>
        <PointOfSaleIcon fontSize="large" sx={{ color: "snow" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={() => handleChange("CashDrawer")}>
          <Box display="flex" justifyContent="center">
            <MoneyIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">นำเงินเข้า/ออกลิ้นชัก</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleChange("CheckTableStatus")}>
          <Box display="flex" justifyContent="center">
            <TableRestaurantIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">ตรวจสอบโต๊ะค้างชำระ</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleChange("MgrTable")}>
          <Box display="flex" justifyContent="center">
            <Splitscreen sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">แยกโต๊ะ / รวมโต๊ะ</Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => handleChange("RefundBill")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box display="flex" justifyContent="center">
            <RefundIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">ยกเลิกบิล (Refund Bill)</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleChange("CopyPrint")}>
          <Box display="flex" justifyContent="center">
            <PrintIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">พิมพ์สำเนาบิล</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleChange("CashierStatus")}>
          <Box display="flex" justifyContent="center">
            <EmplyIcon sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">ตรวจสอบพนักงาน</Typography>
          </Box>
        </MenuItem>
        <Divider sx={{ display: { xs: "none", md: "block" } }} />
        <MenuItem
          onClick={() => handleChange("SetupTableFlorPlan")}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box display="flex" justifyContent="center">
            <TableBar sx={{ marginRight: "10px" }} />{" "}
            <Typography variant="p">จัดการโต๊ะ</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  )
}

export default OtherMenuSelect
