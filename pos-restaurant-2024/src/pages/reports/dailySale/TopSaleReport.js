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
        const poshwSetup = this.props.poshwSetup
        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{marginBottom: "100px"}}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">รายงานอันดับสินค้าขายดี</div>
                    <div align="center">(Top Sales Report)</div>
                    <div style={{margin: "20px"}}></div>
                    <div>หมายเลขเครื่อง : 001 ... 001</div>
                    <div>รหัสพนักงานขาย : 9999 ... 9999</div>
                    <div>รหัสกลุ่มสินค้า (Dept/Group) : 0000 ... ZZZZ</div>
                    <div style={{margin: "20px"}}></div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>กลุ่มสินค้า...</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td align='center'>ลำดับ</td>
                                <td align='center'>รหัสสินค้า</td>
                                <td align='right'>จำนวน</td>
                                <td align='right'>จำนวนเงิน</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>****03 Appitizer</td>
                                <td align='right'></td>
                                <td align='right'></td>
                                <td align='right'></td>
                            </tr>
                            <tr>
                                <td align='center'>1</td>
                                <td>Junsai</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td align='center'></td>
                                <td>1001</td>
                                <td align='right'>5</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>2</td>
                                <td>SET 3,800++(Served 14 Menu)</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td align='center'></td>
                                <td>SET1001</td>
                                <td align='right'>5</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>3</td>
                                <td>Hotate jelly</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td align='center'></td>
                                <td>1003</td>
                                <td align='right'>5</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const TopSaleReport = () => {
    const contentRef = useRef(null);
    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [poshwSetup, setPosHwSetup] = useState({})

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

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
            .post(`/api/report/top-sale-report`)
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
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default TopSaleReport
