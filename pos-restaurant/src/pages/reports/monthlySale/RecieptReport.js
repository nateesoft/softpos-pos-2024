import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import { Box, Button, Divider, Grid2, Paper, Typography } from "@mui/material"
import { useReactToPrint } from "react-to-print"
import Moment from "react-moment"
import PrintIcon from "@mui/icons-material/Print"

import apiClient from "../../../httpRequest"
import { POSContext } from "../../../AppContext"

const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
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

const ReceiptHeader = ({ headers, billInfo, empCode }) => {
  return (
    <>
      <div style={{ marginTop: "20px" }}></div>
      <div align="center">
        <MyTypo3>รายงานการพิมพ์ใบเสร็จรับเงิน</MyTypo3>
      </div>
      <div style={{ marginTop: "10px" }}></div>
      {headers && (
        <div>
          {headers && headers.map((header) => <MyTypo value={header} />)}
          <MyTypo2>Table: {billInfo.B_Table}</MyTypo2>
        </div>
      )}
      <Divider />
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

class ComponentToPrint extends Component {
  render() {
    const billInfo = this.props.billInfo
    const {
      B_Vat,
      B_ServiceAmt,
      B_NetTotal,
      B_Ton = 0,
      B_NetVat,
      B_Cash = 0
    } = billInfo

    const posConfigSetup = this.props.posConfigSetup
    const poshwSetup = this.props.poshwSetup

    let headers = [
      poshwSetup.Heading1,
      poshwSetup.Heading2,
      poshwSetup.Heading3,
      poshwSetup.Heading4
    ]
    headers = headers.filter((h) => h !== "")

    return (
      <Grid2 id="content" container justifyContent="center">
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          <ReceiptHeader
            headers={headers}
            billInfo={billInfo}
            empCode={this.props.empCode}
          />
          <Divider />
          <div>
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
              <MyTypo2>เงินสด</MyTypo2>
              <MyTypo2>{NumFormat(B_Cash || 0)}</MyTypo2>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <MyTypo2>เงินทอน</MyTypo2>
              <MyTypo2>{NumFormat(B_Ton || 0)}</MyTypo2>
            </Box>
          </div>
        </Paper>
      </Grid2>
    )
  }
}

const TableOnAction = () => {
  const billNo = "0000350"
  const contentRef = useRef(null)

  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [billInfo, setBillInfo] = useState("")
  const [orderList, setOrderList] = useState([])
  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const functionToPrint = useReactToPrint({
    contentRef,
    documentTitle: `Printing... Receipt No. #${billInfo.B_Refno}`,
    onAfterPrint: () => {
      setTimeout(() => {
      }, 500)
    },
    onPrintError: (err) => {
      alert(JSON.stringify(err))
    }
  })

  const handlePrinter = useCallback(() => {
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
  }, [macno])

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
    handleLoadBillInfo()
    initLoadOrderTSale()
    loadPosHwSetup()
    loadPosConfigSetup()
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
              startIcon={<PrintIcon />}
              variant="contained"
              color="primary"
              onClick={handlePrinter}
            >
              Print
            </Button>
          </Grid2>
        </Paper>
      </>
    )
  } else {
    return <div align="center">ไม่พบข้อมูลเลขที่เอกสาร !!!</div>
  }
}

export default TableOnAction
