import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, macno } = this.props

        return (
            <Grid2 id='content' container justifyContent="center" sx={{marginBottom: "100px"}}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    <div style={{ marginTop: "20px" }}></div>
                    <div align="center">REG ID :{macno}</div>
                    <div align="center">รายงานพนักงานขาย (Cashier Report)</div>
                    <div align="center">รหัสพนักงานขาย : {userLogin}</div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>ยอดรวมค่าอาหาร (Food)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>28,045.00</td>
                            </tr>
                            <tr>
                                <td>ยอดรวมค่าเครื่องดื่ม</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>410.00</td>
                            </tr>
                            <tr>
                                <td>ยอดรวมค่าสินค้าทั่วไป</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>149.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ยอดขายตามป้าย (Dept-Sum)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>28,604.00</td>
                            </tr>
                            <tr>
                                <td>ค่าบริการ Service</td>
                                <td align='right'>1</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>380.00</td>
                            </tr>
                            <tr>
                                <td>Charge บัตรเครดิต</td>
                                <td align='right'>1</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>125.40</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดสมาชิก VIP</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดเทศกาล</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพนักงาน</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพนักงาน Trainee</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดคูปอง</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดบาท</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลด Promotion</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดพิเศษ (Special)</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ส่วนลดรายการ (Item)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
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
                                <td align='right'>29,234.80</td>
                            </tr>
                            <tr>
                                <td>เงินสด Cash</td>
                                <td align='right'>20</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>20,966.00</td>
                            </tr>
                            <tr>
                                <td>บัตรกำนัล Gift Voucher</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>ลูกหนี้การค้า</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>QR CODE</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>True wallet</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td>VISA</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr style={{ borderTop: "1px solid", borderStyle: "dashed" }}>
                                <td>PAID-IN</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>PAID-OUT</td>
                                <td align='right'>0</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr style={{ borderTop: "1px solid", borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ยอดเงินนำส่ง</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>29,234.80</td>
                            </tr>
                            <tr>
                                <td>ยอดขายสินค้า/บริการ คิดภาษี</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr>
                                <td>ยอดขายไม่คิดภาษี</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td>ภาษีมูลค่าเพิ่ม (Vat)</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
                            </tr>
                            <tr>
                                <td>จำนวนลูกค้าทั้งสิ้น</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'>0</td>
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
                    <table width="100%">
                        <tbody>
                            
                        </tbody>
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
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const TableOnAction = () => {
    const contentRef = useRef(null);
    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [total, setTotal] = useState(0)

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

    const handlePrinter = useCallback(() => {
        functionToPrint()
    }, [functionToPrint])

    const loadReport = useCallback(() => {
        apiClient
            .get(`/api/report/table-on-action`)
            .then((response) => {
                if (response.status === 200) {
                    setReports(response.data.data.data)
                    setTotal(response.data.data.footer.total)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    useEffect(() => {
        loadReport()
    }, [loadReport])

    return (
        <>
            <ComponentToPrint
                innerRef={contentRef}
                userLogin={userLogin}
                macno={macno}
                reports={reports}
                total={total}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default TableOnAction
