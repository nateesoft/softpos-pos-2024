import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import { Button, Grid2, Paper } from "@mui/material"
import { useReactToPrint } from "react-to-print"
import PrintIcon from "@mui/icons-material/Print"
import BackIcon from "@mui/icons-material/ReplyAll"
import moment from "moment"
import { useNavigate, useSearchParams } from "react-router-dom"

import apiClient from "../../../httpRequest"
import { POSContext } from "../../../AppContext"

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB"
  }).format(amount)
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userLogin, macno, reports, filter } = this.props
    const poshwSetup = this.props.poshwSetup
    let headers = [
      poshwSetup.Heading1,
      poshwSetup.Heading2,
      poshwSetup.Heading3,
      poshwSetup.Heading4
    ]
    headers = headers.filter((h) => h !== "")
    return (
      <Grid2
        id="content"
        container
        justifyContent="center"
        sx={{ marginBottom: "100px", fontSize: 12 }}
      >
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          {headers && headers.map((header) => <div>{header}</div>)}
          <div style={{ marginTop: "30px" }}></div>
          <div align="center">รายงานการพิมพ์ใบเสร็จรับเงิน</div>
          <div align="center">(Receipt Report)</div>
          <div align="center" style={{ margin: "10px" }}>
            หมายเลขเครื่อง : {filter.macno1} .. {filter.macno2}
          </div>
          <div align="center">
            {moment().format("DD/MM/YYYY HH:mm:ss")} Cashier: {userLogin} Mac:{" "}
            {macno}
          </div>
          <table width="100%">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid",
                  borderTop: "1px solid",
                  borderStyle: "dashed"
                }}
              >
                <td align="center">ใบเสร็จ</td>
                <td align="center">เวลาพิมพ์</td>
                <td align="right">จำนวนเงิน</td>
                <td align="right">ภาษี(Vat)</td>
              </tr>
            </thead>
            <tbody>
              {reports &&
                reports.map((item) => {
                  if (item.paymentType) {
                    return (
                      <tr>
                        <td align="right">{item.paymentType}</td>
                        <td align="right">{item.paymentTime}</td>
                        <td align="right">
                          {formatCurrency(item.paymentAmount)}
                        </td>
                        <td align="right">{formatCurrency(item.paymentVat)}</td>
                      </tr>
                    )
                  } else {
                    return (
                      <tr>
                        <td>{item.B_Refno}</td>
                        <td align="right">{item.B_Ontime}</td>
                        <td align="right">{formatCurrency(item.B_NetTotal)}</td>
                        <td align="right">{formatCurrency(item.B_Vat)}</td>
                      </tr>
                    )
                  }
                })}
            </tbody>
          </table>
        </Paper>
      </Grid2>
    )
  }
}

const RecieptReport = () => {
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const [query] = useSearchParams()

  const { appData } = useContext(POSContext)
  const { macno, userLogin } = appData
  const [reports, setReports] = useState([])
  const [poshwSetup, setPosHwSetup] = useState({})

  const functionToPrint = useReactToPrint({
    contentRef,
    documentTitle: `Printing...`
  })

  const backPage = () => {
    navigate("/reportDaily/overview")
  }

  const handlePrinter = useCallback(() => {
    functionToPrint()
  }, [functionToPrint])

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

  const loadReport = useCallback(() => {
    apiClient
      .post(`/api/report/receipt-report`, {
        macno1: query.get("macno1"),
        macno2: query.get("macno2")
      })
      .then((response) => {
        if (response.status === 200) {
          setReports(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  useEffect(() => {
    loadReport()
    loadPosHwSetup()
  }, [])

  return (
    <>
      <ComponentToPrint
        innerRef={contentRef}
        userLogin={userLogin}
        macno={macno}
        reports={reports}
        poshwSetup={poshwSetup}
        filter={{
          macno1: query.get("macno1"),
          macno2: query.get("macno2")
        }}
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
            startIcon={<BackIcon />}
            variant="contained"
            color="error"
            onClick={backPage}
          >
            Back
          </Button>
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
}

export default RecieptReport
