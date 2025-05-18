import React, {useState} from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Drawer,
  CssBaseline,
  Box,
  useMediaQuery,
  Modal,
  Button,
  Grid2} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import TableBar from "@mui/icons-material/TableBar"

import DashboardContent from "./DashboardContent"
// load all modal reports
import TableOnAction from "../reports/dailySale/modal/TableOnAction"
import CashierReport from "../reports/dailySale/modal/CashierReport"
import CreditReport from "../reports/dailySale/modal/CreditReport"
import CustomerPerHourReport from "../reports/dailySale/modal/CustomerPerHourReport"
import DepartmentGroupReport from "../reports/dailySale/modal/DepartmentGroupReport"
import HourlyPluReport from "../reports/dailySale/modal/HourlyPluReport"
import PLUReport from "../reports/dailySale/modal/PLUReport"
import PromotionDiscount from "../reports/dailySale/modal/PromotionDiscount"
import RecieptReport from "../reports/dailySale/modal/RecieptReport"
import SpecialCuponDiscount from "../reports/dailySale/modal/SpecialCuponDiscount"
import TerminalReport from "../reports/dailySale/modal/TerminalReport"
import TopSaleReport from "../reports/dailySale/modal/TopSaleReport"
import VoidReport from "../reports/dailySale/modal/VoidReport"
import { useNavigate } from "react-router-dom"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

function DashboardLayout() {
  const navigate = useNavigate()

  // report modal
  const [openTableOnAction, setOpenTableOnAction] = useState(false)
  const [cashierReport, setCashierReport] = useState(false)
  const [creditReport, setCreditReport] = useState(false)
  const [customerPerHourReport, setCustomerPerHourReport] = useState(false)
  const [departmentGroupReport, setDepartmentGroupReport] = useState(false)
  const [hourlyPluReport, setHourlyPluReport] = useState(false)
  const [pluReport, setPluReport] = useState(false)
  const [promotionDiscountReport, setPromotionDiscountReport] = useState(false)
  const [receiptReport, setReceiptReport] = useState(false)
  const [specialCuponDiscountReport, setSpecialCuponDiscountReport] = useState(false)
  const [terminalReport, setTerminalReport] = useState(false)
  const [topSaleReport, setTopSaleReport] = useState(false)
  const [voidReport, setVoidReport] = useState(false)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [openOrders1, setOpenOrders1] = useState(false)
  const [openOrders2, setOpenOrders2] = useState(false)
  const [openOrders3, setOpenOrders3] = useState(false)
  const [openOrders4, setOpenOrders4] = useState(false)
  const [openOrders5, setOpenOrders5] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClickOrders = (index) => {
    if (index === 1) {
      setOpenOrders1(!openOrders1)
    }
    if (index === 2) {
      setOpenOrders2(!openOrders2)
    }
    if (index === 3) {
      setOpenOrders3(!openOrders3)
    }
    if (index === 4) {
      setOpenOrders4(!openOrders4)
    }
    if (index === 5) {
      setOpenOrders5(!openOrders5)
    }
  }

  const handleOpenMenu = (data) => {
    if (data === "table-on-action") {
      setOpenTableOnAction(true)
    } else if (data === "terminal-report") {
      setTerminalReport(true)
    } else if (data === "cashier-report") {
      setCashierReport(true)
    } else if (data === "department-group-report") {
      setDepartmentGroupReport(true)
    } else if (data === "plu-report") {
      setPluReport(true)
    } else if (data === "customer-per-hour-report") {
      setCustomerPerHourReport(true)
    } else if (data === "hourly-plu-report") {
      setHourlyPluReport(true)
    } else if (data === "reciept-report") {
      setReceiptReport(true)
    } else if (data === "void-report") {
      setVoidReport(true)
    } else if (data === "credit-report") {
      setCreditReport(true)
    } else if (data === "top-sale-report") {
      setTopSaleReport(true)
    } else if (data === "promotion-discount") {
      setPromotionDiscountReport(true)
    } else if (data === "special-cupon-discount") {
      setSpecialCuponDiscountReport(true)
    }
  }

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#f5f5f5",
        overflowY: "auto",
        p: 1
      }}
    >
      <List>
        <ListItemButton>
          <ListItemText primary="รายงานโต๊ะค้างยังไม่ได้ชำระเงิน" 
            onClick={() => handleOpenMenu("table-on-action")} />
        </ListItemButton>

        <ListItemButton onClick={()=>handleClickOrders(1)}>
          <ListItemText primary="รายงานเครื่อง" />
          {openOrders1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานยอดการเงินของเครื่อง" 
                onClick={() => handleOpenMenu("terminal-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานพนักงานขาย" 
                onClick={() => handleOpenMenu("cashier-report")} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClickOrders(2)}>
          <ListItemText primary="รายงานเมนูอาหาร" />
          {openOrders2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการขายตามกลุ่มเมนู" 
                onClick={() => handleOpenMenu("department-group-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการขายตามรหัสเมนู" 
                onClick={() => handleOpenMenu("plu-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการขายตามช่วงเวลา" 
                onClick={() => handleOpenMenu("customer-per-hour-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการขายรายชั่วโมง" 
                onClick={() => handleOpenMenu("hourly-plu-report")} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClickOrders(3)}>
          <ListItemText primary="รายงานการขาย" />
          {openOrders3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการพิมพ์ใบเสร็จรับเงิน" 
                onClick={() => handleOpenMenu("reciept-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานการรับชำระเงินด้วยบัตรเครดิต" 
                onClick={() => handleOpenMenu("credit-report")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานอันดับเมนูขายดี" 
                onClick={() => handleOpenMenu("top-sale-report")} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClickOrders(4)}>
          <ListItemText primary="รายงานส่งเสริมการขาย" />
          {openOrders4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานส่วนลดโปรโมชั่น" 
                onClick={() => handleOpenMenu("promotion-discount")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="รายงานส่วนลดคูปองพิเศษ" 
                onClick={() => handleOpenMenu("special-cupon-discount")} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClickOrders(5)}>
          <ListItemText primary="รายงานข้อมูลสมาชิก" />
          {openOrders5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="จำนวน All member" 
                onClick={() => handleOpenMenu("table-on-action")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="จำนวน new register" 
                onClick={() => handleOpenMenu("table-on-action")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="สมาชิก first check-in" 
                onClick={() => handleOpenMenu("table-on-action")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="ผู้ใช้ครั้งแรกวันนี้" 
                onClick={() => handleOpenMenu("table-on-action")} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  )

  const backToFloorPlan = () => {
    navigate("/floorplan")
  }

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Grid2 container justifyContent="flex-start">
            <Typography variant="h6">เมนูรายงานการขาย</Typography>
          </Grid2>
          <Grid2
              container
              spacing={1}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
            <Button
              variant="contained"
              color="primary"
              startIcon={<TableBar />}
              size="large"
              onClick={backToFloorPlan}
            >
              Floor Plan
            </Button>
            </Grid2>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, marginTop: "7vh" }}>
        {isMobile ? (
          <>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: 240
                }
              }}
            >
              {drawerContent}
            </Drawer>
            <DashboardContent />
          </>
        ) : (
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={10} maxSize={40}>
              {drawerContent}
            </Panel>
            <PanelResizeHandle
              style={{
                width: "4px",
                backgroundColor: "#ccc",
                cursor: "col-resize"
              }}
            />
            <Panel>
              <DashboardContent />
            </Panel>
          </PanelGroup>
        )}
      </Box>

      <Modal open={openTableOnAction}>
        <Box sx={{ ...modalStyle }}>
          <TableOnAction setOpen={setOpenTableOnAction} />
        </Box>
      </Modal>
      <Modal open={cashierReport}>
        <Box sx={{ ...modalStyle }}>
          <CashierReport setOpen={setCashierReport} />
        </Box>
      </Modal>
      <Modal open={creditReport}>
        <Box sx={{ ...modalStyle }}>
          <CreditReport setOpen={setCreditReport} />
        </Box>
      </Modal>
      <Modal open={customerPerHourReport}>
        <Box sx={{ ...modalStyle }}>
          <CustomerPerHourReport setOpen={setCustomerPerHourReport} />
        </Box>
      </Modal>
      <Modal open={departmentGroupReport}>
        <Box sx={{ ...modalStyle }}>
          <DepartmentGroupReport setOpen={setDepartmentGroupReport} />
        </Box>
      </Modal>
      <Modal open={hourlyPluReport}>
        <Box sx={{ ...modalStyle }}>
          <HourlyPluReport setOpen={setHourlyPluReport} />
        </Box>
      </Modal>
      <Modal open={pluReport}>
        <Box sx={{ ...modalStyle }}>
          <PLUReport setOpen={setPluReport} />
        </Box>
      </Modal>
      <Modal open={promotionDiscountReport}>
        <Box sx={{ ...modalStyle }}>
          <PromotionDiscount setOpen={setPromotionDiscountReport} />
        </Box>
      </Modal>
      <Modal open={receiptReport}>
        <Box sx={{ ...modalStyle }}>
          <RecieptReport setOpen={setReceiptReport} />
        </Box>
      </Modal>
      <Modal open={specialCuponDiscountReport}>
        <Box sx={{ ...modalStyle }}>
          <SpecialCuponDiscount setOpen={setSpecialCuponDiscountReport} />
        </Box>
      </Modal>
      <Modal open={terminalReport}>
        <Box sx={{ ...modalStyle }}>
          <TerminalReport setOpen={setTerminalReport} />
        </Box>
      </Modal>
      <Modal open={topSaleReport}>
        <Box sx={{ ...modalStyle }}>
          <TopSaleReport setOpen={setTopSaleReport} />
        </Box>
      </Modal>
      <Modal open={voidReport}>
        <Box sx={{ ...modalStyle }}>
          <VoidReport setOpen={setVoidReport} />
        </Box>
      </Modal>
    </Box>
  )
}

export default DashboardLayout
