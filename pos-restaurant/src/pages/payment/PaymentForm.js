import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import ArrowBack from "@mui/icons-material/ArrowBack"
import ConfirmIcon from "@mui/icons-material/CheckCircle"
import DiscountIcon from "@mui/icons-material/Discount"
import CloseIcon from "@mui/icons-material/Close"
import SplitBillIcon from "@mui/icons-material/VerticalSplit"
import PrintCheckIcon from "@mui/icons-material/Print"
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import SendToMobileIcon from "@mui/icons-material/SendToMobile"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff"
import Stack from '@mui/material/Stack'
import { motion, AnimatePresence } from "framer-motion";

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import QrCodeGenerator from "./QRCodePayment"
import CreditChargeModal from "./CreditChargeModal"
import MultipleCreditPayment from "./MultipleCreditPayment"
import { ModalConfirm } from "../ui-utils/AlertPopup"
import DiscountFormModal from "./modal/DiscountFormModal"

const NumFormat = (data) => {
  if(!data && data !== 0) return
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const normalButton = {
  background: "radial-gradient(circle, #123456, #000)",
  color: "white",
  fontWeight: "bold",
  fontSize: "36px",
  borderRadius: "10px",
  "&:hover": {
    background: "radial-gradient(circle, orange, #000)"
  }
}
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

function PaymentForm({
  orderList,
  tableNo,
  handleNotification,
  tableFile,
  memberInfo,
  setOpenSplitBill,
  tableFileDb,
  initLoad
}) {
  const { appData } = useContext(POSContext)
  const { macno, branchInfo, companyInfo, empCode, baseName } = appData

  const { serviceAmount, vatAmount, netTotalAmount } = tableFile
  const R_NetTotal = netTotalAmount

  const [paymentAmount, setPaymentAmount] = useState(0)

  // discount info
  const [discountEnable, setDiscountEnable] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)

  const [balanceAmount, setBalanceAmount] = useState(0)
  const [tonAmount, setTonAmount] = useState(0)

  // focus control
  const [componentFocus, setComponentFocus] = useState("cash")

  // cash info
  const [cashAmount, setCashAmount] = useState(0)
  const [depositAmount, setDepositAmount] = useState(0)
  const [entertainAmount, setEntertainAmount] = useState(0)

  // credit info
  const [crCode, setCrCode] = useState("")
  const [creditNumber, setCreditNumber] = useState("")
  const [creditRef, setCreditRef] = useState("")
  const [creditChargePercent, setCreditChargePercent] = useState(0)
  const [creditChargeAmount, setCreditChargeAmount] = useState(0)
  const [creditAmount, setCreditAmount] = useState(0)

  const [openCreditInfo, setOpenCreditInfo] = useState(false)
  const [openTransferInfo, setOpenTransferInfo] = useState(false)

  // transfer info
  const [transferAmount, setTransferAmount] = useState(0)
  const [transferAccountNo, setTransferAccountNo] = useState("")
  const [transferToAccount, setTransferToAccount] = useState("0000000000")
  const [transferAccount, setTransferAccount] = useState("")

  const [openCreditFile, setOpenCreditFile] = useState(false)
  const [openDiscountModal, setOpenDiscountModal] = useState(false)

  // display
  const [netTotalDisplay, setNetTotalDisplay] = useState(0)

  // credit list
  const [creditTempList, setCreditTempList] = useState([])
  const [openConfirmPayment, setOpenConfirmPayment] = useState(false)

  // cupon list
  const [specialCuponInfo, setSpecialCuponInfo] = useState({})

  const navigate = useNavigate()
  const handleBackPage = () => {
    navigate(`/sale/${tableNo}`)
  }

  const handleCreditInfoSelect = (cInfo) => {
    const NetTotal = R_NetTotal - cashAmount
    const totalCreditCharge = (Math.abs(NetTotal) * cInfo.crCharge) / 100
    const totalCreditChargeAmount = Math.abs(NetTotal) + totalCreditCharge
    setCrCode(cInfo.crCode)
    setCreditNumber("")
    setCreditRef("")
    setCreditChargePercent(cInfo.crCharge)
    setCreditChargeAmount(totalCreditCharge)
    setCreditAmount(totalCreditChargeAmount)
  }

  const handleCreditEnabled = () => {
    if (balanceAmount <= 0) {
      setOpenCreditInfo(true)
    }
  }

  const handleTransferEnabled = () => {
    if (balanceAmount <= 0) {
      setTransferAmount(R_NetTotal - cashAmount)
      setOpenTransferInfo(true)
    }
  }

  const handleAdd = (addMoney) => {
    if (componentFocus === "cash") {
      handleCashAmountKeyIn(cashAmount + addMoney)
    } else if (componentFocus === "deposit") {
      handleDepositAmountKeyIn(depositAmount + addMoney)
    } else if (componentFocus === "entertain") {
      handleEntertainAmountKeyIn(entertainAmount + addMoney)
    }
  }

  const handleConcat = (addMoney) => {
    if (componentFocus === "cash") {
      handleCashAmountKeyIn(parseFloat("" + cashAmount + addMoney))
    } else if (componentFocus === "deposit") {
      handleDepositAmountKeyIn(parseFloat("" + depositAmount + addMoney))
    } else if (componentFocus === "entertain") {
      handleEntertainAmountKeyIn(parseFloat("" + entertainAmount + addMoney))
    }
  }

  const totalAmount = () => {
    const cc = cashAmount ? parseFloat(cashAmount) : 0
    const cd = creditAmount ? parseFloat(creditAmount) : 0
    const ta = transferAmount ? parseFloat(transferAmount) : 0
    const totalNetAmt = parseFloat(R_NetTotal) + parseFloat(creditChargeAmount)
    const _depositAmount = parseFloat(depositAmount)
    const _entertainAmount = parseFloat(entertainAmount)
    const paymentAmt = parseFloat(
      cc + cd + ta + _depositAmount + _entertainAmount
    )
    const discountAmt = 0
    let balanceAmt = parseFloat(paymentAmt - discountAmt - totalNetAmt)
    if (_depositAmount > totalNetAmt) {
      setDepositAmount(totalNetAmt)
      setCashAmount(0)
      setCreditAmount(0)
      setCreditChargeAmount(0)
    }
    if (_entertainAmount > totalNetAmt) {
      setEntertainAmount(totalNetAmt)
      setCashAmount(0)
      setCreditAmount(0)
      setCreditChargeAmount(0)
    }
    if (balanceAmt < 0) {
      if (creditAmount > 0) {
        setBalanceAmount(0)
      } else {
        setBalanceAmount(balanceAmt)
        setTonAmount(0)
      }
    } else {
      if (creditAmount > 0) {
        setTonAmount(0)
        setBalanceAmount(0)
      } else {
        setTonAmount(balanceAmt)
        setBalanceAmount(0)
      }
    }
    setPaymentAmount(paymentAmt)
    setDiscountAmount(discountAmt)
    setNetTotalDisplay(R_NetTotal - paymentAmt)
  }

  const handleClear = () => {
    setCashAmount(0)
    setDepositAmount(0)
    setEntertainAmount(0)
  }

  const handleFit = () => {
    setCashAmount(R_NetTotal)
    setDepositAmount(0)
    setEntertainAmount(0)
  }

  const handleDepositAmountKeyIn = (depAmt) => {
    setDepositAmount(depAmt)
  }

  const handleEntertainAmountKeyIn = (entertainAmt) => {
    setEntertainAmount(entertainAmt)
  }

  const handleCashAmountKeyIn = (cashAmt) => {
    if (cashAmt > 100000) {
      setCashAmount(0)
      return
    }
    if (cashAmt > R_NetTotal) {
      setTransferAccount("")
      setTransferAccountNo("")
      setTransferToAccount("")
      setTransferAmount(0)
      setCreditChargeAmount(0)
      setCreditChargePercent(0)
      setCreditNumber("")
      setCrCode("")
      setCreditRef("")
      setCreditAmount(0)
    }

    setCashAmount(cashAmt)
  }

  const handleTransferKeyIn = (transferAmt) => {
    if (transferAmt > R_NetTotal || transferAmt < 0) {
      setTransferAmount(R_NetTotal)
    } else {
      setTransferAmount(transferAmt)
    }
  }

  const handleConfirmTransferAmount = () => {
    if (
      transferAccount === "" ||
      transferAccountNo === "" ||
      transferToAccount === "" ||
      transferAmount <= 0
    ) {
      return
    }
    setOpenTransferInfo(false)
  }

  const handleConfirmPayment = async () => {
    if (tonAmount > 1000) {
      handleNotification("กรุณาระบุจำนวนเงินสดให้ถูกต้อง !!!")
      return
    }
    if (balanceAmount >= 0) {
      // update billno
      const payload = {
        branchInfo,
        companyInfo,
        macno,
        tableNo,
        billType: "E",
        orderList,
        serviceInfo: {
          serviceAmount,
          vatAmount
        },
        cashInfo: {
          cashAmount
        },
        creditInfo: {
          crCode,
          creditNumber,
          creditRef,
          creditChargePercent,
          creditChargeAmount,
          creditAmount
        },
        creditList: creditTempList,
        transferInfo: {
          transferAmount,
          transferAccountNo,
          transferAccount
        },
        discountInfo: {
          discountEnable,
          discountAmount
        },
        specialCuponInfo,
        memberInfo,
        tonAmount,
        paymentAmount,
        netTotal: R_NetTotal + creditChargeAmount,
        empCode,
        B_Entertain: entertainAmount,
        B_UserEntertain: empCode,
        B_Earnest: depositAmount
      }

      // update print2kic
      await apiClient.patch(`/api/balance/printToKic/${tableNo}`)

      // send bill payment
      apiClient
        .post(`/api/billno`, payload)
        .then((response) => {
          if (response.status === 200) {
            navigate("/floorplan")
          } else {
            handleNotification("พบข้อผิดพลาดในการรับชำระเงิน!")
          }
        })
        .catch((err) => {
          handleNotification(err.message)
        })
    } else {
      handleNotification("ข้อมูลรับชำระยังไม่ถูกต้อง!")
    }
  }

  const printBillCheck = async () => {
    // send print bill check
    apiClient
      .post(`/api/billno/printChkBill`, { tableNo, macno })
      .then((response) => {
        if (response.status === 200) {
          handleNotification("พิมพ์ใบตรวจสอบรายการ", "info")
        } else {
          handleNotification("พบข้อผิดพลาดในการพิมพ์บิลตรวจสอบ !")
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const cancelTransferAmount = () => {
    setTransferAccount("")
    setTransferAccountNo("")
    setTransferToAccount("")
    setTransferAmount(0)

    setOpenTransferInfo(false)
  }

  useEffect(() => {
    totalAmount()
  }, [totalAmount])

  return (
    <Grid2
      container
      spacing={2}
      display="flex"
      direction="column"
      sx={{ padding: "10px" }}
    >
      <Grid2 size={12}>
        <Box
          display="flex"
          sx={{
            padding: "20px",
            backgroundColor: netTotalDisplay <= 0 ? "lightgreen": "salmon",
            border: "2px solid gray",
            borderRadius: "10px"
          }}
          justifyContent="space-between"
        >
          {netTotalDisplay > 0 && (
            <Typography
              fontSize={28}
              sx={{ fontWeight: "bold", color: "#444" }}
            >
              TOTAL
            </Typography>
          )}
          {netTotalDisplay <= 0 && (
            <Typography
              fontSize={28}
              sx={{ fontWeight: "bold", color: "#444" }}
            >
              CHANGE
            </Typography>
          )}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={netTotalDisplay}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography sx={{
                marginRight: "20px",
                fontSize: { xs: "32px", md: "72px" },
                textShadow: "3px 1px white",
                fontWeight: "bold"
              }}>
                {NumFormat(
                  netTotalDisplay > 0 ? netTotalDisplay : Math.abs(netTotalDisplay)
                )}
              </Typography>
          </motion.div>
          </AnimatePresence>
          
        </Box>
      </Grid2>
      <Grid2 size={12}>
        <Grid2 container spacing={1} display="flex" direction="row">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ padding: "1px" }}>
              <Grid2 container spacing={1} padding={1}>
                <Grid2 container>
                  <Stack direction="row">
                    <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                      <CreditCardOffIcon fontSize="large" />
                    </IconButton>
                    <TextField
                      type="number"
                      size="small"
                      variant="filled"
                      value={depositAmount}
                      onFocus={() => setComponentFocus("deposit")}
                      onChange={(e) => handleDepositAmountKeyIn(e.target.value)}
                      id="txtDepositAmount"
                      label="หักคืนเงินมัดจำ"
                      sx={{
                        backgroundColor:
                          componentFocus === "deposit" ? "#f5fff3" : ""
                      }}
                      inputProps={{ min: 0, style: { textAlign: "right" } }}
                    />
                  </Stack>
                  <Stack direction="row">
                    <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                      <VideogameAssetIcon fontSize="large" />
                    </IconButton>
                    <TextField
                      type="number"
                      size="small"
                      variant="filled"
                      value={entertainAmount}
                      onFocus={() => setComponentFocus("entertain")}
                      onChange={(e) => handleEntertainAmountKeyIn(e.target.value)}
                      id="txtEntertainAmount"
                      label="ชำระแบบ Entertain"
                      sx={{
                        backgroundColor:
                          componentFocus === "entertain" ? "#f5fff3" : ""
                      }}
                      inputProps={{ min: 0, style: { textAlign: "right" } }}
                    />
                  </Stack>
                </Grid2>
              </Grid2>
              <Grid2 container spacing={1}>
                <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                  <AccountBalanceWalletIcon fontSize="large" />
                </IconButton>
                <TextField
                  type="number"
                  size="small"
                  value={cashAmount}
                  onFocus={() => setComponentFocus("cash")}
                  onChange={(e) => handleCashAmountKeyIn(e.target.value)}
                  id="txtCashAmount"
                  label="ชำระด้วยเงินสด"
                  sx={{
                    backgroundColor: componentFocus === "cash" ? "#f5fff3" : ""
                  }}
                  inputProps={{ min: 0, style: { textAlign: "right" } }}
                />
              </Grid2>
              <Grid2 container spacing={1}>
                <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                  <SendToMobileIcon fontSize="large" />
                </IconButton>
                <TextField
                  type="number"
                  size="small"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  id="txtTransferAmount"
                  label="เงินโอน"
                  disabled
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", width: "100px" }
                  }}
                />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleTransferEnabled}
                  sx={{ height: "40px" }}
                >
                  ...
                </Button>
              </Grid2>
              <Grid2 container spacing={1}>
                <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                  <CreditCardIcon fontSize="large" />
                </IconButton>
                <TextField
                  id="txtCreditAmount"
                  size="small"
                  value={NumFormat(creditAmount)}
                  label="ชำระด้วยบัตรเครดิต"
                  disabled
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", width: "100px" }
                  }}
                />
                <TextField
                  id="txtCreditAmount"
                  size="small"
                  value={NumFormat(creditChargeAmount)}
                  label="Credit Charge"
                  disabled
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", width: "100px" }
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={handleCreditEnabled}
                  sx={{ height: "40px" }}
                >
                  ...
                </Button>
              </Grid2>
              <Box display="flex" justifyContent="flex-end" margin={2}>
                <TextField
                  variant="filled"
                  label="ยอดรับชำระทั้งหมด"
                  value={NumFormat(paymentAmount + creditChargeAmount)}
                  inputProps={{ min: 0, style: { textAlign: "right" } }}
                  fullWidth
                  disabled
                />
              </Box>
              <Grid2
                container
                spacing={2}
                margin={2}
                display="flex"
                justifyContent="center"
              >
                <Button
                  color="success"
                  variant="contained"
                  fullWidth
                  startIcon={<DiscountIcon />}
                  onClick={() => setOpenDiscountModal(true)}
                >
                  ให้ส่วนลดเพิ่ม
                </Button>
              </Grid2>
              <Box display="flex" justifyContent="flex-end" margin={2}>
                <TextField
                  type="number"
                  size="small"
                  variant="filled"
                  label="ส่วนลด"
                  value={discountAmount}
                  inputProps={{ min: 0, style: { textAlign: "right" } }}
                  fullWidth
                  disabled
                />
              </Box>
              <Box display="flex" justifyContent="flex-end" margin={2}>
                <TextField
                  variant="filled"
                  size="small"
                  label="ค้างชำระ"
                  value={balanceAmount}
                  inputProps={{ min: 0, style: { textAlign: "right" } }}
                  fullWidth
                  disabled
                />
              </Box>
            </Paper>
          </Grid2>
          <Grid2 size={6}>
            <Grid2 container spacing={2}>
              <Grid2 size={12} sx={{ display: { xs: "none", md: "block" } }}>
                <table width="100%">
                  <tr>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(7)}
                      >
                        7
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(8)}
                      >
                        8
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(9)}
                      >
                        9
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={{ ...normalButton }}
                        fullWidth
                        onClick={handleClear}
                      >
                        C
                      </Button>
                    </td>
                  </tr>
                </table>
                <table width="100%">
                  <tr>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(4)}
                      >
                        4
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(5)}
                      >
                        5
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(6)}
                      >
                        6
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={{ ...normalButton }}
                        fullWidth
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                </table>
                <table width="100%">
                  <tr>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(1)}
                      >
                        1
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(2)}
                      >
                        2
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(3)}
                      >
                        3
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={{ ...normalButton }}
                        fullWidth
                      >
                        x
                      </Button>
                    </td>
                  </tr>
                </table>
                <table width="100%">
                  <tr>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat(0)}
                      >
                        0
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat("00")}
                      >
                        00
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={normalButton}
                        fullWidth
                        onClick={() => handleConcat("000")}
                      >
                        000
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        sx={{ ...normalButton }}
                        fullWidth
                        onClick={handleFit}
                      >
                        BL
                      </Button>
                    </td>
                  </tr>
                </table>
              </Grid2>
              <Grid2 size={12} sx={{ display: { xs: "none", md: "block" } }}>
                <Grid2 container spacing={2} justifyContent="space-evenly">
                  <Grid2 size={6}>
                    <img
                      src={`/${baseName}/images/payment/m1000.png`}
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(1000)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src={`/${baseName}/images/payment/m500.png`}
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(500)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src={`/${baseName}/images/payment/m100.png`}
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(100)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src={`/${baseName}/images/payment/m50.png`}
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(50)}
                      alt=""
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <AppBar
          position="fixed"
          sx={{ top: "auto", bottom: 0, background: "#c9edfd" }}
        >
          <Grid2 size={12}>
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{ margin: "5px" }}
                color="success"
                startIcon={<ArrowBack />}
                onClick={handleBackPage}
              >
                สั่งอาหารเพิ่ม
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "5px",
                  backgroundColor: "#aaa",
                  color: "black"
                }}
                startIcon={<PrintCheckIcon />}
                onClick={printBillCheck}
              >
                ตรวจสอบรายการ
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenSplitBill(true)}
                endIcon={<SplitBillIcon />}
                disabled={R_NetTotal <= 0}
              >
                แยกชำระ
              </Button>
              <Button
                variant="contained"
                sx={{ margin: "5px" }}
                color="success"
                onClick={() => setOpenConfirmPayment(true)}
                disabled={balanceAmount < 0}
                endIcon={<ConfirmIcon />}
              >
                ชำระเงิน
              </Button>
            </Box>
          </Grid2>
        </AppBar>
      </Grid2>
      <Modal
        open={openCreditInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box
            sx={{
              ...modalStyle,
              width: "650px",
              padding: "5px",
              display: { xs: "none", md: "block" }
            }}
          >
            <MultipleCreditPayment
              tableNo={tableNo}
              balanceAmount={
                R_NetTotal +
                creditChargeAmount -
                depositAmount -
                entertainAmount
              }
              setCreditAmt={setCreditAmount}
              setCreditChargeAmt={setCreditChargeAmount}
              totalAmount={totalAmount}
              onClose={() => setOpenCreditInfo(false)}
              setCreditTempList={setCreditTempList}
            />
          </Box>
          <Box
            sx={{
              ...modalStyle,
              width: "400px",
              padding: "5px",
              display: { xs: "block", md: "none" }
            }}
          >
            <MultipleCreditPayment
              tableNo={tableNo}
              balanceAmount={
                R_NetTotal +
                creditChargeAmount -
                depositAmount -
                entertainAmount
              }
              setCreditAmt={setCreditAmount}
              setCreditChargeAmt={setCreditChargeAmount}
              totalAmount={totalAmount}
              onClose={() => setOpenCreditInfo(false)}
              setCreditTempList={setCreditTempList}
            />
          </Box>
        </div>
      </Modal>
      <Modal
        open={openTransferInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: "350px", padding: "5px" }}>
          <Grid2
            container
            spacing={2}
            padding={2}
            justifyContent="center"
            direction="column"
          >
            <TextField
              variant="outlined"
              label="เลขที่บัญชีที่โอน"
              value={transferAccountNo}
              onChange={(e) => setTransferAccountNo(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="ชื่อบัญชีที่โอน"
              value={transferAccount}
              onChange={(e) => setTransferAccount(e.target.value)}
            />
            <TextField
              variant="outlined"
              type="number"
              label="จำนวนเงิน"
              value={transferAmount}
              onChange={(e) => handleTransferKeyIn(e.target.value)}
            />
            <Box>
              <TextField
                variant="filled"
                label="โอนเงินเข้าบัญขีนี้"
                value={transferToAccount}
                onChange={(e) => setTransferToAccount(e.target.value)}
                fullWidth
              />
            </Box>
          </Grid2>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <QrCodeGenerator
              mobileNumber={transferToAccount}
              amount={transferAmount}
            />
            <Typography>ยอดเงินโอน {transferAmount}</Typography>
            <Typography>โอนเข้าบัญชี {transferToAccount}</Typography>
          </Box>
          <Box sx={{ marginTop: "30px" }} textAlign="center">
            <Button
              variant="contained"
              sx={{ margin: "5px" }}
              color="error"
              startIcon={<CloseIcon />}
              onClick={cancelTransferAmount}
            >
              ยกเลิก
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "5px" }}
              onClick={handleConfirmTransferAmount}
              endIcon={<ConfirmIcon />}
            >
              ยืนยันข้อมูล
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openCreditFile}>
        <Box sx={{ ...modalStyle }}>
          <CreditChargeModal
            setClose={() => setOpenCreditFile(false)}
            setCreditInfo={handleCreditInfoSelect}
          />
        </Box>
      </Modal>
      <ModalConfirm
        open={openConfirmPayment}
        setOpen={() => setOpenConfirmPayment(false)}
        onSubmit={handleConfirmPayment}
        header="Confirm Payment"
        content="ยืนยันการชำระเงิน ?"
      />
      <Modal
        open={openDiscountModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => setOpenDiscountModal(false)}
      >
        <Box
          sx={{
            ...modalStyle,
            width: "650px",
            padding: "5px",
            display: { xs: "none", md: "block" },
            background: "#123456"
          }}
        >
          <DiscountFormModal
            tableFile={tableFileDb}
            setOpenDiscountModal={setOpenDiscountModal} 
            setSpecialCuponInfo={setSpecialCuponInfo}
            initLoad={initLoad}
          />
        </Box>
      </Modal>
    </Grid2>
  )
}

export default PaymentForm
