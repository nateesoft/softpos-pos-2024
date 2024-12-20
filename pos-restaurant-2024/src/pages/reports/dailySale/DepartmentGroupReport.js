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
                    <div align="center">รายงานการขายตามกลุ่มสินค้า</div>
                    <div align="center">(Dept/Group Report)</div>
                    <div style={{margin: "20px"}}></div>
                    <div>หมายเลขเครื่อง : 001 ... 001</div>
                    <div>รหัสพนักงานขาย : 9999 ... 9999</div>
                    <div>รหัสกลุ่มสินค้า (Dept/Group) : 0000 ... ZZZZ</div>
                    <div style={{margin: "20px"}}></div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td colSpan={4}>รายละเอียด ...</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>EAT IN</td>
                                <td align='right'>TAKE AWAY</td>
                                <td align='right'>DELIVERY</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>03</td>
                                <td>Appitizer</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>SUM-TOTAL....</td>
                                <td></td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align='right'>54,000.00</td>
                                <td align='right'>19,000.00</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
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
