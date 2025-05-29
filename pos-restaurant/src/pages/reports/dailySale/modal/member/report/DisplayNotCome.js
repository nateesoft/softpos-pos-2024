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

import apiClient from "../../../../../../httpRequest"
import { POSContext } from "../../../../../../AppContext"
import { FONT_FAMILY } from '../../../../../../AppConstants'

const formatPoint = (amount = 0) => {
  if(amount){
    return amount.toLocaleString()
  }
}

const formatPrice = (amount = 0) => {
  if(amount){
    return amount.toLocaleString()
  }
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userLogin, branch1, branch2, macno, reports } = this.props
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
          <div align="center"><font face={FONT_FAMILY} size="4">รายงานสมาชิก ที่ยังไม่เคยใช้บริการ</font></div>
          <div align="center" style={{ margin: "10px" }}>
            <font face={FONT_FAMILY} size="4">สาขา {branch1} - สาขา {branch2}</font>
          </div>
          <div align="center">
            <font face={FONT_FAMILY} size="4">
              {moment().format("DD/MM/YYYY HH:mm:ss")} Cashier: {userLogin} Mac:{" "} {macno}
            </font>
          </div>
          <table width="100%" cellPadding={2} cellSpacing={2}>
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid",
                  borderTop: "1px solid",
                  borderStyle: "dashed"
                }}
              >
                <td align="center"><font face={FONT_FAMILY} size="4">Code</font></td>
                <td align="left"><font face={FONT_FAMILY} size="4">Name</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">Purchase</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">Score</font></td>
                <td align="center"><font face={FONT_FAMILY} size="4">Expired</font></td>
              </tr>
            </thead>
            <tbody>
              {reports && reports.map((row) => (
                  <tr>
                    <td align="center">
                      <font face={FONT_FAMILY} size="4">{row.Member_Code}</font>
                    </td>
                    <td align="left"><font face={FONT_FAMILY} size="4">{row.Member_NameThai}</font></td>
                    <td align="right"><font face={FONT_FAMILY} size="4">{formatPrice(row.Member_TotalPurchase)}</font></td>
                    <td align="right"><font face={FONT_FAMILY} size="4">{formatPoint(row.Member_TotalScore)}</font></td>
                    <td align="center"><font face={FONT_FAMILY} size="4">{moment(row.Member_PointExpiredDate).format('YYYY/MM/DD')}</font></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Paper>
      </Grid2>
    )
  }
}

const DisplayNotCome = () => {
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const branch1 = query.get('branch1')
  const branch2 = query.get('branch2')

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

  const loadReport = useCallback(() => {
    apiClient
      .get(`/api/crm/member/report/not-come?branch1=${branch1}&branch2=${branch2}`)
      .then((response) => {
        if (response.status === 200) {
          setReports(response.data.data.data)
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

  useEffect(() => {
    loadReport()
    loadPosHwSetup()
  }, [])

  return (
    <>
      <ComponentToPrint
        innerRef={contentRef}
        userLogin={userLogin}
        branch1={"001"}
        branch2={"999"}
        macno={macno}
        poshwSetup={poshwSetup}
        reports={reports}
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

export default DisplayNotCome
