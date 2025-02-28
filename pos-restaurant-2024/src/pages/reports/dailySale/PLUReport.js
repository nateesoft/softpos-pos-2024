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
    const { userLogin, macno, reports, summary, filter } = this.props
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
        sx={{ marginBottom: "100px" }}
      >
        <Paper
          elevation={0}
          sx={{ padding: "5px", marginRight: "22px" }}
          ref={this.props.innerRef}
        >
          {headers && headers.map((header) => <div>{header}</div>)}
          <div style={{ marginTop: "30px" }}></div>
          <div align="center">รายงานการขายตามรหัสสินค้า</div>
          <div align="center">(Plu-Code Report)</div>
          <div style={{ margin: "20px" }}></div>
          <div>
            หมายเลขเครื่อง : {filter.macno1} ... {filter.macno2}
          </div>
          <div>
            รหัสพนักงานขาย : {filter.cashier1} ... {filter.cashier2}
          </div>
          <div>
            รหัสกลุ่มสินค้า (Dept/Group) : {filter.groupCode1} ...{" "}
            {filter.groupCode2}
          </div>
          <div>รหัสสินค้า : {filter.pluCode}</div>
          <div style={{ margin: "20px" }}></div>
          <div align="center">
            {moment().format("DD/MM/YYYY HH:mm:ss")} Cashier: {userLogin} Mac:{" "}
            {macno}
          </div>
          <table width="100%">
            <tbody
              style={{
                borderBottom: "1px solid",
                borderTop: "1px solid",
                borderStyle: "dashed"
              }}
            >
              {reports &&
                reports.map((item) => (
                  <tr>
                    <td>{item.GroupName}</td>
                    <td>
                      {item.R_PluCode} {item.R_PName.substr(0, 15)}
                    </td>
                    <td align="right">{item.R_Quan}</td>
                    <td align="right">{formatCurrency(item.R_Total)}</td>
                  </tr>
                ))}
            </tbody>
            <tbody
              style={{
                borderBottom: "1px solid",
                borderTop: "1px solid",
                borderStyle: "dashed"
              }}
            >
              <tr style={{ height: "50px" }}>
                <td colSpan={2}>SUM-TOTAL.....</td>
                <td align="right">{summary.qty}</td>
                <td align="right">{formatCurrency(summary.netTotal)}</td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Grid2>
    )
  }
}

const PLUReport = () => {
  console.log("PLUReport")
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const [query] = useSearchParams()

  const { appData } = useContext(POSContext)
  const { macno, userLogin } = appData
  const [reports, setReports] = useState([])
  const [summary, setSummary] = useState({})
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
      .post(`/api/report/plu-report`, {
        macno1: query.get("macno1"),
        macno2: query.get("macno2"),
        cashier1: query.get("cashier1"),
        cashier2: query.get("cashier2"),
        groupCode1: query.get("group1"),
        groupCode2: query.get("group2"),
        pluCode: query.get("pluCode")
      })
      .then((response) => {
        if (response.status === 200) {
          setReports(response.data.data.data)
          setSummary(response.data.data.summary)
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
        summary={summary}
        poshwSetup={poshwSetup}
        filter={{
          macno1: query.get("macno1"),
          macno2: query.get("macno2"),
          cashier1: query.get("cashier1"),
          cashier2: query.get("cashier2"),
          groupCode1: query.get("group1"),
          groupCode2: query.get("group2"),
          pluCode: query.get("pluCode")
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

export default PLUReport
