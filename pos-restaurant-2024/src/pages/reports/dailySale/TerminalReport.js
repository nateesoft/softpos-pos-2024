import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'
import { useSearchParams } from 'react-router-dom'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, macno, report, filter } = this.props
        const poshwSetup = this.props.poshwSetup

        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{ marginBottom: "100px" }}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">REG ID :{macno}</div>
                    <div align="center">รายงานยอดการเงิน (Terminal Report)</div>
                    <div align="center">หมายเลขเครื่อง : {filter.macno}</div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>ยอดรวมค่าอาหาร (Food)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Food}</td>
                            </tr>
                            <tr>
                                <td>ยอดรวมค่าเครื่องดื่ม</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Drink}</td>
                            </tr>
                            <tr>
                                <td>ยอดรวมค่าสินค้าทั่วไป</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Product}</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ยอดขายตามป้าย (Dept-Sum)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.Dept_Sum}</td>
                            </tr>
                            <tr>
                                <td>ค่าบริการ Service</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_ServiceAmt}</td>
                            </tr>
                            <tr>
                                <td>Charge บัตรเครดิต</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_CrChargeAmt1}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดสมาชิก VIP</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_MemDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดเทศกาล</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_FastDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพนักงาน</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_EmpDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพนักงาน Trainee</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_TrainDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดคูปอง</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_CuponDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดบาท</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_SubDiscBath}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลด Promotion</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_ProDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพิเศษ (Special)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_SpaDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดรายการ (Item)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_ItemDiscAmt}</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดบัตรคูปอง (Cupon)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>หักคืนเงินมัดจำ</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ยอดขายสุทธิ (Net-Sales)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_NetTotal}</td>
                            </tr>
                            <tr>
                                <td>เงินสด Cash</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Cash}</td>
                            </tr>
                            <tr>
                                <td>บัตรกำนัล Gift Voucher</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_GiftVoucher}</td>
                            </tr>
                            <tr>
                                <td>ลูกหนี้การค้า</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>QR CODE</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>True wallet</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>VISA</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr style={{ borderTop: "1px solid", borderStyle: "dashed" }}>
                                <td>PAID-IN</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>PAID-OUT</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr>
                                <td>ยอดขายสินค้า/บริการ คิดภาษี</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_NetVat}</td>
                            </tr>
                            <tr>
                                <td>ยอดขายไม่คิดภาษี</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_NetNonVat}</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ภาษีมูลค่าเพิ่ม (Vat)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Vat}</td>
                            </tr>
                            <tr>
                                <td>จำนวนลูกค้าทั้งสิ้น</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>{report.B_Cust}</td>
                            </tr>
                            <tr>
                                <td>จำนวนใบกำกับภาษีอย่างย่อ</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr>
                                <td>เลขที่เริ่มต้น  : 00001 ถึง : 00009</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                            </tr>
                            <tr>
                                <td>ใบกำกับภาษีที่ยกเลิก</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr>
                                <td>มูลค่าสินค้าที่ทำการ Void</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <table width="100%">
                        <tr>
                            <td>ประเภทการขาย</td>
                            <td align='right'>บิล</td>
                            <td align='right'>ลูกค้า</td>
                            <td align='right'>จำนวนเงิน</td>
                        </tr>
                        <tr>
                            <td>Eat-In</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                        </tr>
                        <tr>
                            <td>Take Away</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                            <td align='right'>0</td>
                        </tr>
                    </table> */}
                </Paper>
            </Grid2>
        )
    }
}

const TerminalReport = () => {
    const contentRef = useRef(null);
    const [query] = useSearchParams()

    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [report, setReport] = useState({})
    const [poshwSetup, setPosHwSetup] = useState({})

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

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

    const handlePrinter = useCallback(() => {
        functionToPrint()
    }, [functionToPrint])

    const loadReport = useCallback(() => {
        apiClient
            .post(`/api/report/terminal-report`, { 
                macno: query.get('macno') 
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
                    macno: query.get('macno') 
                }}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default TerminalReport
