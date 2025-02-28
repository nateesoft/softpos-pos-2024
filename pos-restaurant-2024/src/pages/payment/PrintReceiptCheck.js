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
import { tableCellClasses } from "@mui/material/TableCell"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"

import "./index.css"

const NumFormat = (data) => {
  return data
  // return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
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

const ReceiptHeaderPayment = ({ headers, tableInfo, empCode }) => {
  return (
    <>
      {headers && (
        <div>
          {headers && headers.map((header) => <MyTypo value={header} />)}
        </div>
      )}
      <Divider sx={{ marginBottom: "10px" }} />
      <MyTypo2>Table: {tableInfo.Tcode}</MyTypo2>
      <div>
        <MyTypo2>
          Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
        </MyTypo2>
        <MyTypo2>Customer: {tableInfo.TCustomer}</MyTypo2>
        <MyTypo2>
          Cashier: {tableInfo.Cashier} Employ: {empCode} Mac:{tableInfo.MacNo}
        </MyTypo2>
      </div>
    </>
  )
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tableInfo = this.props.tableInfo
    const { Food, Drink, Product, TAmount, ServiceAmt, NetTotal } = tableInfo

    const posConfigSetup = this.props.posConfigSetup
    const poshwSetup = this.props.poshwSetup

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

    let balanceList = this.props.balanceList
    balanceList = balanceList.filter((o) => o.R_Price > 0)

    return (
      <Grid2 id="content" container justifyContent="center">
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          <div
            align="center"
            style={{ marginBottom: "10px", fontSize: "12px" }}
          >
            *** ( ใบตรวจสอบรายการ ไม่ใช่ใบเสร็จรับเงิน ) ***
          </div>
          <ReceiptHeaderPayment
            headers={headers}
            tableInfo={tableInfo}
            empCode={this.props.empCode}
          />
          <Divider />
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
              {balanceList &&
                balanceList.map((item) => (
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
                {balanceList.filter((item) => item.R_Void !== "V").length})
              </MyTypo2>
              <MyTypo2>{NumFormat(TAmount)}</MyTypo2>
            </Box>
            <Box padding={1}>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>อาหาร (Food)</MyTypo2>
                <MyTypo2>{NumFormat(Food)}</MyTypo2>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>เครื่องดื่ม (Drink)</MyTypo2>
                <MyTypo2>{NumFormat(Drink)}</MyTypo2>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <MyTypo2>สินค้าอื่นๆ (Other)</MyTypo2>
                <MyTypo2>{NumFormat(Product)}</MyTypo2>
              </Box>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>ค่าบริการ {posConfigSetup.P_Service}%</MyTypo2>
              <MyTypo2>+{NumFormat(ServiceAmt)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>มูลค่าสินค้า/บริการ.....</MyTypo2>
              <MyTypo2>{NumFormat(TAmount)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>Vat {posConfigSetup.P_Vat}%</MyTypo2>
              <MyTypo2>0</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>Net Total</MyTypo2>
              <MyTypo2>{NumFormat(NetTotal || 0)}</MyTypo2>
            </Box>
            <Divider />
          </div>
          <Divider />
          <div align="center" style={{ fontSize: "12px", marginTop: "20px" }}>
            Tips ……………………………
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

const PrintReceiptCheck = () => {
  console.log("PrintReceiptCheck")
  const { tableNo } = useParams()
  const navigate = useNavigate()
  const contentRef = useRef(null)

  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [showPrintButton, setShowPrintButton] = useState(true)
  const [showPaymentPage, setShowPaymentPage] = useState(false)

  const [tableInfo, setTableInfo] = useState("")
  const [balanceList, setBalanceList] = useState([])

  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const functionToPrint = useReactToPrint({
    contentRef,
    documentTitle: `Printing check bill... Table No. #${tableNo}`,
    onAfterPrint: () => {
      setTimeout(() => {
        setShowPaymentPage(true)
      }, 5000)
    },
    onPrintError: (err) => {
      alert(JSON.stringify(err))
    }
  })

  const backPaymentPage = () => {
    navigate(`/payment/${tableNo}`)
  }

  const handlePrinter = useCallback(() => {
    setShowPrintButton(false)
    functionToPrint()
  }, [functionToPrint])

  const handleLoadTableInfo = useCallback(() => {
    apiClient
      .get(`/api/tablefile/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          setTableInfo(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const initLoadBalanceTableFile = useCallback(() => {
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setBalanceList(dataList)
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

  useEffect(() => {
    handleLoadTableInfo()
    initLoadBalanceTableFile()
    loadPosHwSetup()
    loadPosConfigSetup()
  }, [
    handleLoadTableInfo,
    initLoadBalanceTableFile,
    loadPosHwSetup,
    loadPosConfigSetup
  ])

  if (tableNo) {
    return (
      <>
        <ComponentToPrint
          innerRef={contentRef}
          tableInfo={tableInfo}
          balanceList={balanceList}
          poshwSetup={poshwSetup}
          posConfigSetup={posConfigSetup}
          empCode={empCode}
          userLogin={userLogin}
        />
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
              startIcon={<PointOfSaleIcon />}
              variant="contained"
              color="secondary"
              onClick={backPaymentPage}
            >
              กลับหน้า Payment
            </Button>
            <Button
              endIcon={<PrintIcon />}
              variant="contained"
              color="primary"
              onClick={handlePrinter}
            >
              Print Receipt
            </Button>
          </Grid2>
        </Paper>
      </>
    )
  } else {
    return <div align="center">ไม่พบข้อมูลโต๊ะที่ท่านเรียกดูรายการ !!!</div>
  }
}

export default PrintReceiptCheck
