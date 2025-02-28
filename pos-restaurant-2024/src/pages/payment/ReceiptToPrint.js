import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import {
  Box,
  Button,
  Divider,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography
} from "@mui/material"
import { useReactToPrint } from "react-to-print"
import Moment from "react-moment"
import { useNavigate, useParams } from "react-router-dom"
import PrintIcon from "@mui/icons-material/Print"
import TableBarIcon from "@mui/icons-material/TableBar"
import { tableCellClasses } from "@mui/material/TableCell"

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"

import "./index.css"

const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const formatBindCredit = (creditNumber) => {
  if (!creditNumber) {
    return ""
  }
  const newCreditBind = creditNumber.substr(
    creditNumber.length - 4,
    creditNumber.length
  )
  return "******" + newCreditBind
}

const MyTypo = ({ value }) => {
  return <Typography sx={{ fontSize: "10px" }}>{value}</Typography>
}

const MyTypo2 = ({ children }) => {
  return <Typography sx={{ fontSize: "10px" }}>{children}</Typography>
}

const MyTypo3 = ({ children }) => {
  return (
    <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
      {children}
    </Typography>
  )
}

const ReceiptHeaderPayment = ({ headers, billInfo, empCode }) => {
  return (
    <>
      <div align="center">
        <MyTypo3>*** ใบเสร็จรับเงิน ***</MyTypo3>
      </div>
      {headers && (
        <div>
          {headers && headers.map((header) => <MyTypo value={header} />)}
          <MyTypo2>Table: {billInfo.B_Table}</MyTypo2>
        </div>
      )}
      <div align="center">
        <img src="/images/payment/com_logo.jpg" width={128} alt="" />
      </div>
      <div>
        <MyTypo2>Receipt No: {billInfo.B_Refno}</MyTypo2>
        <MyTypo2>
          Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
        </MyTypo2>
        <MyTypo2>Customer: {billInfo.B_Cust}</MyTypo2>
        <MyTypo2>
          Cashier: {billInfo.B_Cashier} Employ: {empCode} Mac:{billInfo.B_MacNo}
        </MyTypo2>
      </div>
    </>
  )
}

const ReceiptHeaderRefund = ({ headers, billInfo }) => {
  return (
    <>
      {headers && (
        <div>
          {headers.map((header) => (
            <MyTypo2>{header}</MyTypo2>
          ))}
        </div>
      )}
      <div align="center">
        <img src="/images/payment/com_logo.jpg" width={128} alt="" />
      </div>
      <MyTypo2 align="center">REG ID : {billInfo.B_MacNo}</MyTypo2>
      <MyTypo2 align="center">
        ------------------------------------------------------------
      </MyTypo2>
      <div align="center">
        <MyTypo2 align="center">*** บิลยกเลิกรายการขาย ***</MyTypo2>
      </div>
      <div align="center">
        <MyTypo2 align="center">*** (Refund) ***</MyTypo2>
      </div>
      <div>
        <MyTypo2>Void User: {billInfo.B_VoidUser}</MyTypo2>
        <MyTypo2>Void Date/Time: {billInfo.B_VoidTime}</MyTypo2>
        <MyTypo2>อ้างถึงใบเสร็จรับเงินเลขที่ {billInfo.B_Refno}</MyTypo2>
      </div>
    </>
  )
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { billInfo, tCreditList, posConfigSetup, poshwSetup, orderList } =
      this.props
    const {
      B_NetFood,
      B_NetProduct,
      B_Total,
      B_Vat,
      B_ServiceAmt,
      B_NetTotal,
      B_NetDrink,

      B_Ton = 0,
      B_NetVat,
      B_Cash = 0,
      B_Earnest,
      B_Entertain
    } = billInfo

    let headers = [
      poshwSetup.Heading1,
      poshwSetup.Heading2,
      poshwSetup.Heading3,
      poshwSetup.Heading4
    ]
    headers = headers.filter((h) => h !== "")

    let footers = [
      poshwSetup.Footting1,
      poshwSetup.Footting2,
      poshwSetup.Footting3
    ]
    const orderListFilter = orderList.filter((o) => o.R_Price > 0)

    return (
      <Grid2 id="content" container justifyContent="center">
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          {billInfo.B_BillCopy > 0 && (
            <div align="right" style={{ fontSize: "12px" }}>
              Bill Copy ({billInfo.B_BillCopy})
            </div>
          )}
          {billInfo.B_Void !== "V" && (
            <ReceiptHeaderPayment
              headers={headers}
              billInfo={billInfo}
              empCode={this.props.empCode}
            />
          )}
          {billInfo.B_Void === "V" && (
            <ReceiptHeaderRefund headers={headers} billInfo={billInfo} />
          )}
          <Divider />
          <TableContainer sx={{ padding: "0", margin: "0" }}>
            <Table
              aria-label="spanning table"
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none",
                  padding: "0px",
                  fontSize: "10px"
                }
              }}
            >
              <TableBody>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableBody>
              {orderListFilter &&
                orderListFilter.map((item) => (
                  <>
                    {item.R_Void !== "V" && (
                      <TableBody>
                        <TableCell>{item.R_ETD}</TableCell>
                        <TableCell
                          sx={{
                            maxWidth: "150px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                          }}
                        >
                          {item.R_PName}
                        </TableCell>
                        <TableCell align="right">{item.R_Quan}X</TableCell>
                        <TableCell align="right">
                          {NumFormat(item.R_Price)}
                        </TableCell>
                      </TableBody>
                    )}
                    {item.R_Void === "V" && (
                      <>
                        <TableBody>
                          <TableCell
                            sx={{
                              textDecoration: "line-through",
                              color: "red"
                            }}
                          >
                            {item.R_ETD}
                          </TableCell>
                          <TableCell
                            sx={{
                              textDecoration: "line-through",
                              color: "red"
                            }}
                          >
                            {item.R_PName}
                          </TableCell>
                          <TableCell
                            sx={{
                              textDecoration: "line-through",
                              color: "red"
                            }}
                            align="right"
                          >
                            {item.R_Quan}X
                          </TableCell>
                          <TableCell align="right">{NumFormat(0)}</TableCell>
                        </TableBody>
                        <TableBody>
                          <TableCell colSpan={4} align="right">
                            ** Void สินค้า: {item.VoidMsg}
                          </TableCell>
                        </TableBody>
                      </>
                    )}
                  </>
                ))}
            </Table>
          </TableContainer>
          <Divider />
          <div>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>
                Sub-TOTAL....(Item{" "}
                {orderList.filter((item) => item.R_Void !== "V").length})
              </MyTypo2>
              <MyTypo2>{NumFormat(B_Total)}</MyTypo2>
            </Box>
            <Box padding={1}>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>อาหาร (Food)</MyTypo2>
                <MyTypo2>{NumFormat(B_NetFood)}</MyTypo2>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>เครื่องดื่ม (Drink)</MyTypo2>
                <MyTypo2>{NumFormat(B_NetDrink)}</MyTypo2>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>สินค้าอื่นๆ (Other)</MyTypo2>
                <MyTypo2>{NumFormat(B_NetProduct)}</MyTypo2>
              </Box>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>ค่าบริการ {posConfigSetup.P_Service}%</MyTypo2>
              <MyTypo2>+{NumFormat(B_ServiceAmt)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>มูลค่าสินค้า/บริการ.....</MyTypo2>
              <MyTypo2>{NumFormat(B_NetVat - B_Vat)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>Vat {posConfigSetup.P_Vat}%</MyTypo2>
              <MyTypo2>{B_Vat}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>Net Total</MyTypo2>
              <MyTypo2>{NumFormat(B_NetTotal)}</MyTypo2>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>ค่ามัดจำ</MyTypo2>
              <MyTypo2>{NumFormat(B_Earnest || 0)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>ค่า Entertain</MyTypo2>
              <MyTypo2>{NumFormat(B_Entertain || 0)}</MyTypo2>
            </Box>
            <Divider />
            {tCreditList && tCreditList.length > 0 && (
              <Typography variant="span" fontSize="10px">
                ชำระด้วยบัตรเครดิต
              </Typography>
            )}
            {tCreditList &&
              tCreditList.map((item) => (
                <div>
                  <Box display="flex" justifyContent="space-between">
                    <MyTypo2>{item.CrCode}</MyTypo2>
                    <MyTypo2>{formatBindCredit(item.CardNo)}</MyTypo2>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <MyTypo2>
                      CR-Charge {NumFormat(item.CrCharge)}% (
                      {NumFormat(item.CrChargeAmount)}) {NumFormat(item.CrAmt)}
                    </MyTypo2>
                  </Box>
                </div>
              ))}
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>เงินสด</MyTypo2>
              <MyTypo2>{NumFormat(B_Cash || 0)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>เงินทอน</MyTypo2>
              <MyTypo2>{NumFormat(B_Ton || 0)}</MyTypo2>
            </Box>
          </div>
          <Divider sx={{ marginTop: "10px" }} />
          <div align="center">
            <MyTypo value={posConfigSetup.P_PrintRecpMessage} />
          </div>
          {footers &&
            footers.map((footer) => (
              <div align="center">
                <MyTypo value={footer} />
              </div>
            ))}
        </Paper>
      </Grid2>
    )
  }
}

const ReceiptToPrint = () => {
  console.log("ReceiptToPrint")
  const { billNo } = useParams()
  const navigate = useNavigate()
  const contentRef = useRef(null)

  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [showPrintButton, setShowPrintButton] = useState(true)
  const [showFloorPlan, setShowFloorPlan] = useState(false)

  const [billInfo, setBillInfo] = useState("")
  const [orderList, setOrderList] = useState([])
  const [tCreditList, setTCreditList] = useState([])
  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const functionToPrint = useReactToPrint({
    contentRef,
    documentTitle: `Printing... Receipt No. #${billInfo.B_Refno}`,
    onAfterPrint: () => {
      setTimeout(() => {
        setShowFloorPlan(true)
      }, 5000)
    },
    onPrintError: (err) => {
      alert(JSON.stringify(err))
    }
  })

  const backFloorPlanPage = () => {
    navigate("/floorplan")
  }

  const handlePrinter = useCallback(() => {
    setShowPrintButton(false)
    functionToPrint()
  }, [functionToPrint])

  const handleLoadBillInfo = useCallback(() => {
    apiClient
      .get(`/api/billno/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          setBillInfo(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const initLoadOrderTSale = useCallback(() => {
    apiClient
      .get(`/api/tsale/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadPosHwSetup = useCallback(() => {
    apiClient
      .get(`/api/poshwsetup/${macno}`)
      .then((response) => {
        if (response.status === 200) {
          setPosHwSetup(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadPosConfigSetup = useCallback(() => {
    apiClient
      .get(`/api/posconfigsetup`)
      .then((response) => {
        if (response.status === 200) {
          setPOSConfigSetup(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadTCreditList = useCallback(() => {
    apiClient
      .get(`/api/creditfile/tcredit/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          setTCreditList(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  useEffect(() => {
    handleLoadBillInfo()
    initLoadOrderTSale()
    loadPosHwSetup()
    loadPosConfigSetup()
    loadTCreditList()
  }, [
    handleLoadBillInfo,
    initLoadOrderTSale,
    loadPosHwSetup,
    loadPosConfigSetup
  ])

  if (billInfo && billInfo.B_Refno) {
    return (
      <>
        <ComponentToPrint
          innerRef={contentRef}
          billInfo={billInfo}
          orderList={orderList}
          poshwSetup={poshwSetup}
          posConfigSetup={posConfigSetup}
          empCode={empCode}
          userLogin={userLogin}
          tCreditList={tCreditList}
        />
        {showPrintButton && (
          <Paper
            elevation={3}
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          >
            <Grid2
              container
              spacing={1}
              justifyContent="center"
              sx={{ marginBottom: "20px" }}
            >
              <Button
                startIcon={<PrintIcon />}
                variant="contained"
                color="primary"
                onClick={handlePrinter}
              >
                Print
              </Button>
            </Grid2>
          </Paper>
        )}
        {showFloorPlan && (
          <Paper
            elevation={3}
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          >
            <Grid2
              container
              spacing={1}
              justifyContent="center"
              sx={{ marginBottom: "20px" }}
            >
              <Button
                startIcon={<TableBarIcon />}
                variant="contained"
                color="primary"
                onClick={backFloorPlanPage}
              >
                Floor Plan
              </Button>
            </Grid2>
          </Paper>
        )}
      </>
    )
  } else {
    return <div align="center">ไม่พบข้อมูลเลขที่เอกสาร !!!</div>
  }
}

export default ReceiptToPrint
