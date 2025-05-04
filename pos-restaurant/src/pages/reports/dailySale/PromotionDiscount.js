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
import { useNavigate } from "react-router-dom"
import moment from "moment"

import apiClient from "../../../httpRequest"
import { POSContext } from "../../../AppContext"
import { FONT_FAMILY } from "../../../AppConstants"

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userLogin, macno, reports } = this.props
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
        sx={{ marginBottom: "100px", fontSize: 12, fontFamily: "Angsana New" }}
      >
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          {headers && headers.map((header) => <div><font face={FONT_FAMILY} size="4">{header}</font></div>)}
          <div style={{ marginTop: "30px" }}></div>
          <div align="center"><font face={FONT_FAMILY} size="4">รายงานการให้ส่วนลดโปรโมชั่น</font></div>
          <div align="center"><font face={FONT_FAMILY} size="4">(Promotion Discount)</font></div>
          <div align="left" style={{ margin: "20px" }}>
          <font face={FONT_FAMILY} size="4">หมายเลขเครื่อง : 001 .. 001</font>
          </div>
          <div align="center">
          <font face={FONT_FAMILY} size="4">{moment().format("DD/MM/YYYY HH:mm:ss")} Cashier: {userLogin} Mac:{" "}
            {macno}</font>
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
                <td align="left"><font face={FONT_FAMILY} size="4">โปรโมชั่น</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">จำนวน</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">ส่วนลด</font></td>
              </tr>
            </thead>
            <tbody>
              {reports && reports.map((row) => (
                  <tr>
                    <td align="left"><font face={FONT_FAMILY} size="4">{row.R_Table}</font></td>
                    <td align="right"><font face={FONT_FAMILY} size="4">{row.R_Total}</font></td>
                    <td align="right"><font face={FONT_FAMILY} size="4">{row.TCurTime}</font></td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr
                style={{
                  borderBottom: "1px solid",
                  borderTop: "1px solid",
                  borderStyle: "dashed"
                }}
              >
                <td align="left"><font face={FONT_FAMILY} size="4">ยอดรวม (Total)....</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">0</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">0.00</font></td>
              </tr>
            </tfoot>
          </table>
        </Paper>
      </Grid2>
    )
  }
}

const PromotionDiscount = () => {
  const navigate = useNavigate()
  const contentRef = useRef(null)
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
      .post(`/api/report/promotion-report`)
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

export default PromotionDiscount
