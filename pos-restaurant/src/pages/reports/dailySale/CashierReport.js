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
import { FONT_FAMILY } from "../../../AppConstants"

const formatCurrency = (amount=0) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB"
  }).format(amount)
}

const formatPoint = (amount = 0) => {
  if(amount){
    return amount.toLocaleString()
  }
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userLogin, macno, report: reports, filter } = this.props
    const poshwSetup = this.props.poshwSetup
    let headers = [
      poshwSetup.Heading1,
      poshwSetup.Heading2,
      poshwSetup.Heading3,
      poshwSetup.Heading4
    ]
    headers = headers.filter((h) => h !== "")
    const report = reports.cashier
    const paidio = reports.paidio
    const sumTypeE = reports.sumTypeE
    const sumTypeT = reports.sumTypeT
    const sumTypeD = reports.sumTypeD
    const receiptBill = reports.receiptBill
    const voidBill = reports.voidBill
    const memberInfo = reports.memberInfo

    if (!report) {
      return <div align="center">Loading...</div>
    }

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
          <div align="center"><font face={FONT_FAMILY} size="4">REG ID :{macno}</font></div>
          <div align="center"><font face={FONT_FAMILY} size="4">รายงานพนักงานขาย (Cashier Report)</font></div>
          <div align="center"><font face={FONT_FAMILY} size="4">รหัสพนักงานขาย : {filter.cashier}</font></div>
          <div align="center">
            <font face={FONT_FAMILY} size="4">{moment().format("DD/MM/YYYY HH:mm:ss")} Cashier: {userLogin} Mac:{" "} {macno}</font>
          </div>
          <table width="100%">
            <tbody
              style={{
                borderBottom: "1px solid",
                borderTop: "1px solid",
                borderStyle: "dashed"
              }}
            >
              <tr>
                <td><font face={FONT_FAMILY} size="4">ยอดรวมค่าอาหาร (Food)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Food)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ยอดรวมค่าเครื่องดื่ม</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Drink)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ยอดรวมค่าสินค้าทั่วไป</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Product)}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">ยอดขายตามป้าย (Dept-Sum)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.Dept_Sum)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ค่าบริการ Service</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_ServiceAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">Charge บัตรเครดิต</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_CrChargeAmt1)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดสมาชิก VIP</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_MemDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดเทศกาล</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_FastDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดพนักงาน</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_EmpDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดพนักงาน Trainee</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_TrainDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดคูปอง</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_CuponDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดบาท</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_SubDiscBath)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลด Promotion</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_ProDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดพิเศษ (Special)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_SpaDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดรายการ (Item)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_ItemDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ส่วนลดบัตรคูปอง (Cupon)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_CuponDiscAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">หักคืนเงินมัดจำ</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Earnest)}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">ค่า Entertain</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Entertain)}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">ยอดขายสุทธิ (Net-Sales)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_NetTotal)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">เงินสด Cash</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Cash)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">เงินทอน</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Ton)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">บัตรเครดิต</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_CrAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">บัตรกำนัล Gift Voucher</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_GiftVoucher)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ลูกหนี้การค้า</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_AccrAmt)}</font></td>
              </tr>
              <tr style={{ borderTop: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">PAID-IN</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(paidio.PaidInAmt)}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">PAID-OUT</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(paidio.PaidOutAmt)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ยอดขายสินค้า/บริการ คิดภาษี</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_NetVat)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ยอดขายไม่คิดภาษี</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_NetNonVat)}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">ภาษีมูลค่าเพิ่ม (Vat)</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(report.B_Vat)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">จำนวนลูกค้าทั้งสิ้น</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{report.B_Cust}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">จำนวนสมาชิก</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{memberInfo.TotalMember}</font></td>
              </tr>
              <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                <td><font face={FONT_FAMILY} size="4">ยอดซื้อสมาชิก: {formatCurrency(memberInfo.NetAmount)}</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">คะแนนสะสม</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatPoint(memberInfo?.TotalScore)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">จำนวนใบกำกับภาษีอย่างย่อ</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{receiptBill.bill_count}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">เลขที่เริ่มต้น : 00001 ถึง : 99999</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">ใบกำกับภาษีที่ยกเลิก</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{voidBill.bill_count}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">มูลค่าสินค้าที่ทำการ Void</font></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{voidBill.B_NetTotal}</font></td>
              </tr>
            </tbody>
          </table>
          <table width="100%">
            <thead>
              <tr>
                <th><font face={FONT_FAMILY} size="4">ประเภทการขาย</font></th>
                <th style={{ textAlign: "right" }}><font face={FONT_FAMILY} size="4">บิล</font></th>
                <th style={{ textAlign: "right" }}><font face={FONT_FAMILY} size="4">ลูกค้า</font></th>
                <th style={{ textAlign: "right" }}><font face={FONT_FAMILY} size="4">จำนวนเงิน</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><font face={FONT_FAMILY} size="4">Dine In</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeE?.Bill_Count}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeE?.B_Cust}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(sumTypeE?.B_NetTotal)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">Take Away</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeT?.Bill_Count}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeT?.B_Cust}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(sumTypeT.B_NetTotal)}</font></td>
              </tr>
              <tr>
                <td><font face={FONT_FAMILY} size="4">Delivery</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeD?.Bill_Count}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{sumTypeD?.B_Cust}</font></td>
                <td align="right"><font face={FONT_FAMILY} size="4">{formatCurrency(sumTypeD?.B_NetTotal)}</font></td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Grid2>
    )
  }
}

const CashierReport = () => {
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const [query] = useSearchParams()

  const { appData } = useContext(POSContext)
  const { macno, userLogin } = appData
  const [report, setReport] = useState({})
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
      .post(`/api/report/cashier-report`, {
        cashier: query.get("cashier")
      })
      .then((response) => {
        if (response.status === 200) {
          setReport(response.data.data)
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
        report={report}
        poshwSetup={poshwSetup}
        filter={{
          cashier: query.get("cashier")
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

export default CashierReport
