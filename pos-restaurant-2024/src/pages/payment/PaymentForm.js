import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import { useNavigate } from "react-router-dom"
import {
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
import ReceiptIcon from "@mui/icons-material/Receipt"
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import SendToMobileIcon from "@mui/icons-material/SendToMobile"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff"
import { io } from "socket.io-client"
import { createRoot } from 'react-dom/client'

import { ReceiptPrint } from '../paper-print/ReceiptPrint'
import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import QrCodeGenerator from "./QRCodePayment"
import CreditChargeModal from "./CreditChargeModal"
import MultipleCreditPayment from "./MultipleCreditPayment"
import { ModalConfirm } from "../ui-utils/AlertPopup"
import { PRINTER_TYPE } from "../../AppConstants"

const NumFormat = (data) => {
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

const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKETIO_SERVER;

function PaymentForm({
  orderList,
  tableNo,
  handleNotification,
  tableFile,
  memberInfo,
  setOpenSplitBill
}) {
  const socket = useRef(null)
  const { appData } = useContext(POSContext)
  const { macno, branchInfo, companyInfo, empCode } = appData

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
  const [transferToAccount, setTransferToAccount] = useState("0864108403")
  const [transferAccount, setTransferAccount] = useState("")

  const [openCreditFile, setOpenCreditFile] = useState(false)

  // display
  const [netTotalDisplay, setNetTotalDisplay] = useState(0)

  // credit list
  const [creditTempList, setCreditTempList] = useState([])
  const [openConfirmPayment, setOpenConfirmPayment] = useState(false)

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

  const totalAmount = useCallback(() => {
    const cc = cashAmount ? parseFloat(cashAmount) : 0
    const cd = creditAmount ? parseFloat(creditAmount) : 0
    const ta = transferAmount ? parseFloat(transferAmount) : 0
    const totalNetAmt = parseFloat(R_NetTotal) + parseFloat(creditChargeAmount)
    const paymentAmt = parseFloat(
      cc + cd + ta + depositAmount + entertainAmount
    )
    const discountAmt = 0
    let balanceAmt = parseFloat(paymentAmt - discountAmt - totalNetAmt)
    if (depositAmount > totalNetAmt) {
      setDepositAmount(totalNetAmt)
      setCashAmount(0)
      setCreditAmount(0)
      setCreditChargeAmount(0)
    }
    if (entertainAmount > totalNetAmt) {
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
  }, [
    cashAmount,
    depositAmount,
    entertainAmount,
    creditAmount,
    transferAmount,
    R_NetTotal
  ])

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
            const billNo = response.data.data
            socket.current.emit(
              "printerMessage",
              JSON.stringify({
                id: 1,
                printerType: "receipt",
                printerName: "",
                message: `พิมพ์เลขที่เอกสาร: ${billNo}`,
                terminal: macno,
                tableNo: "",
                billNo: billNo,
                title: "ใบเสร็จรับเงิน",
                billType: ''
              })
            )
            navigate('/floorplan')
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
      .post(`/api/billno/printChkBill`, { tableNo })
      .then((response) => {
        if (response.status === 200) {
          // navigate(`/payment/print-bill-check/${tableNo}`)
          // send to printer
          socket.current.emit(
            "printerMessage",
            JSON.stringify({
              id: 1,
              printerType: "review-bill",
              printerName: "",
              message: `ใบตรวจสอบรายการ ไม่ใช่ใบเสร็จรับเงิน: ${tableNo}`,
              terminal: macno,
              billNo: "",
              tableNo: tableNo,
              title: "ใบตรวจสอบรายการ ไม่ใช่ใบเสร็จรับเงิน",
              billType: ''
            })
          )
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

  useEffect(() => {
    // เชื่อมต่อกับ Socket.IO server
    socket.current = io(SOCKET_SERVER_URL)

    // รับข้อความจาก server
    socket.current.on("message", (newMessage) => {
      console.log(newMessage)
    })

    socket.current.on("reply", (newMessage) => {
      console.log(newMessage)
    })

    // ทำความสะอาดการเชื่อมต่อเมื่อ component ถูกทำลาย
    return () => {
      socket.current.disconnect()
    }
  }, [])

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
            backgroundColor: "salmon",
            border: "2px solid gray",
            borderRadius: "10px"
          }}
          justifyContent="space-between"
        >
          {netTotalDisplay > 0 && (
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#444" }}>
              TOTAL
            </Typography>
          )}
          {netTotalDisplay <= 0 && (
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#444" }}>
              TON
            </Typography>
          )}
          <Typography
            variant="h3"
            sx={{
              marginRight: "20px",
              fontSize: "72px",
              textShadow: "3px 3px snow",
              fontWeight: "bold"
            }}
          >
            {NumFormat(
              netTotalDisplay > 0 ? netTotalDisplay : Math.abs(netTotalDisplay)
            )}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={12}>
        <Grid2 container spacing={1} display="flex" direction="row">
          <Grid2 size={6}>
            <Paper elevation={3} sx={{ padding: "1px" }}>
              <Grid2 container spacing={1} padding={1}>
                <Grid2 container>
                  <IconButton>
                    <CreditCardOffIcon fontSize="large" />
                  </IconButton>
                  <TextField
                    type="number"
                    variant="filled"
                    value={depositAmount}
                    onFocus={() => setComponentFocus("deposit")}
                    onChange={(e) => handleDepositAmountKeyIn(e.target.value)}
                    id="txtDepositAmount"
                    label="หักคืนเงินมัดจำ"
                    sx={{
                      backgroundColor:
                        componentFocus === "deposit" ? "#f5fff3" : "",
                      width: "140px"
                    }}
                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                  />
                  <IconButton>
                    <VideogameAssetIcon fontSize="large" />
                  </IconButton>
                  <TextField
                    type="number"
                    variant="filled"
                    value={entertainAmount}
                    onFocus={() => setComponentFocus("entertain")}
                    onChange={(e) => handleEntertainAmountKeyIn(e.target.value)}
                    id="txtEntertainAmount"
                    label="ชำระแบบ Entertain"
                    sx={{
                      backgroundColor:
                        componentFocus === "entertain" ? "#f5fff3" : "",
                      width: "140px"
                    }}
                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={1} padding={1}>
                <IconButton>
                  <AccountBalanceWalletIcon fontSize="large" />
                </IconButton>
                <TextField
                  type="number"
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
              <Grid2 container spacing={1} padding={1}>
                <IconButton>
                  <SendToMobileIcon fontSize="large" />
                </IconButton>
                <TextField
                  type="number"
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
                  onClick={handleTransferEnabled}
                  sx={{ height: "55px" }}
                >
                  ...
                </Button>
              </Grid2>
              <Grid2 container spacing={1} padding={1}>
                <IconButton>
                  <CreditCardIcon fontSize="large" />
                </IconButton>
                <TextField
                  value={NumFormat(creditAmount)}
                  id="txtCreditAmount"
                  label="ชำระด้วยบัตรเครดิต"
                  disabled
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", width: "100px" }
                  }}
                />
                <TextField
                  value={NumFormat(creditChargeAmount)}
                  id="txtCreditAmount"
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
                  sx={{ height: "55px" }}
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
                  variant="outlined"
                  fullWidth
                  startIcon={<DiscountIcon />}
                  disabled
                >
                  ให้ส่วนลดเพิ่ม
                </Button>
              </Grid2>
              <Box display="flex" justifyContent="flex-end" margin={2}>
                <TextField
                  variant="filled"
                  label="ส่วนลด"
                  type="number"
                  value={discountAmount}
                  inputProps={{ min: 0, style: { textAlign: "right" } }}
                  fullWidth
                  disabled
                />
              </Box>
              <Box display="flex" justifyContent="flex-end" margin={2}>
                <TextField
                  variant="filled"
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
              <Grid2 size={12}>
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
              <Grid2 size={12}>
                <Grid2 container spacing={2} justifyContent="space-evenly">
                  <Grid2 size={6}>
                    <img
                      src="/images/payment/m1000.png"
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(1000)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src="/images/payment/m500.png"
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(500)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src="/images/payment/m100.png"
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(100)}
                      alt=""
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <img
                      src="/images/payment/m50.png"
                      width="100%"
                      style={{ border: "1px solid gray" }}
                      onClick={() => handleAdd(50)}
                      alt=""
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
              <Grid2 size={12}>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    sx={{ margin: "5px" }}
                    color="primary"
                    startIcon={<ArrowBack />}
                    onClick={handleBackPage}
                  ></Button>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "5px",
                      backgroundColor: "#aaa",
                      color: "black"
                    }}
                    startIcon={<ReceiptIcon />}
                    onClick={printBillCheck}
                  >
                    ตรวจสอบ
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
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Modal
        open={openCreditInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: "650px", padding: "5px" }}>
          <MultipleCreditPayment
            tableNo={tableNo}
            balanceAmount={R_NetTotal + creditChargeAmount}
            setCreditAmt={setCreditAmount}
            setCreditChargeAmt={setCreditChargeAmount}
            totalAmount={totalAmount}
            onClose={() => setOpenCreditInfo(false)}
            setCreditTempList={setCreditTempList}
          />
        </Box>
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
    </Grid2>
  )
}

export default PaymentForm
