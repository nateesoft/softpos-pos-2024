import React, { Component, useContext, useEffect, useRef, useState } from 'react'
import { Box, Button, Divider, Grid2, Paper, Typography } from '@mui/material'
import Moment from 'react-moment'
import { useNavigate, useParams } from 'react-router-dom'
import PrintIcon from '@mui/icons-material/Print'

import apiClient from '../../httpRequest'
import { POSContext } from '../../AppContext'

import './index.css'

const NumFormat = data => {
  console.log('NumFormat:', data)
  if (!data) {
    return ""
  }
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const formatBindCredit = (creditNumber) => {
  if (!creditNumber) {
    return ""
  }
  const newCreditBind = creditNumber.substr(creditNumber.length - 4, creditNumber.length)
  return "******" + newCreditBind;
}

const MyTypo = ({ value }) => {
  return <Typography sx={{ fontSize: '12px' }}>
    {value}
  </Typography>
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const billInfo = this.props.billInfo
    const {
      B_Refno, B_Cust, B_Cashier, B_MacNo, B_NetFood, B_NetProduct,
      B_Total, B_Vat, B_ServiceAmt, B_NetTotal, B_NetDrink,
      B_CrCode1, B_CrBank, B_CardNo1, B_AppCode1, B_CrCharge1, B_CrChargeAmt1, B_CrAmt1,
      B_Ton, B_NetVat, B_Table
    } = billInfo

    const posConfigSetup = this.props.posConfigSetup
    const poshwSetup = this.props.poshwSetup

    let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
    headers = headers.filter(h => h !== "")

    let footers = [poshwSetup.Footting1, poshwSetup.Footting2, poshwSetup.Footting3]

    let orderList = this.props.orderList
    orderList = orderList.filter(o => o.R_Price > 0)

    return (
      <div id='content' style={{ margin: "5px" }} ref={this.props.innerRef}>
        <div align="center" style={{ fontWeight: "bold" }}>*** ใบเสร็จรับเงิน ***</div>
        <div>
          {headers && headers.map((header) => <MyTypo value={header} />)}
          <div align="center">Table: {B_Table}</div>
        </div>
        <div align="center">
          <img src="/images/payment/com_logo.jpg" width={128} alt="" />
        </div>
        <div>
          <div>Receipt No: {B_Refno}</div>
          <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
          <div>Customer: {B_Cust}</div>
          <div>Cashier: {B_Cashier} Employ: {this.props.empCode} Mac:{B_MacNo}</div>
        </div>
        <Divider />
        <div>
          <table width="100%">
            <tr>
              <th align="left"></th>
              <th align="left">Description</th>
              <th align="left"></th>
              <th align="right">Amount</th>
            </tr>
            {orderList && orderList.map((item) => (
              <tr>
                <td>{item.R_ETD}</td>
                <td>{item.R_PName}</td>
                <td align="right">X {item.R_Quan}</td>
                <td align="right">{NumFormat(item.R_Price)}</td>
              </tr>
            ))}
          </table>
        </div>
        <Divider />
        <div>
          <Box display="flex" justifyContent="space-between">
            <Typography>Sub-TOTAL....(Item {orderList.length})</Typography>
            <Typography>{NumFormat(B_Total)}</Typography>
          </Box>
          <Box padding={2}>
            <Box display="flex" justifyContent="space-between">
              <Typography>อาหาร (Food)</Typography>
              <Typography>{NumFormat(B_NetFood)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>เครื่องดื่ม (Drink)</Typography>
              <Typography>{NumFormat(B_NetDrink)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>สินค้าอื่นๆ (Other)</Typography>
              <Typography>{NumFormat(B_NetProduct)}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>ค่าบริการ {posConfigSetup.P_Service}%</Typography>
            <Typography>{NumFormat(B_ServiceAmt)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>มูลค่าสินค้า/บริการ.....</Typography>
            <Typography>{NumFormat(B_NetVat - B_Vat)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Vat {posConfigSetup.P_Vat}%</Typography>
            <Typography>{B_Vat}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Net Total</Typography>
            <Typography>{NumFormat(B_NetTotal)}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>เงินทอน</Typography>
            <Typography>{B_Ton}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>{B_CrCode1} {B_CrBank}</Typography>
            <Typography>{formatBindCredit(B_CardNo1)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>CR-Charge {NumFormat(B_CrCharge1)}% ({NumFormat(B_CrChargeAmt1)}) {NumFormat(B_CrAmt1)}</Typography>
          </Box>
        </div>
        <Divider sx={{ marginTop: "10px" }} />
        <div align="center">
          <MyTypo value={posConfigSetup.P_PrintRecpMessage} />
        </div>
        {footers && footers.map((footer) =>
          <div align="center"><MyTypo value={footer} /></div>
        )}
      </div>
    )
  }
}

const ReceiptToPrint = () => {
  const { billNo } = useParams()
  const navigate = useNavigate();

  const [isPrinting, setIsPrinting] = useState(false);
  const contentRef = useRef(null);

  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [billInfo, setBillInfo] = useState("")
  const [orderList, setOrderList] = useState([])
  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const printNative = () => {
    setIsPrinting(true)

    let printContents = document.getElementById('content').innerHTML
    document.body.innerHTML = printContents
    window.print()
    setTimeout(function () {
      window.location.replace('/floorplan')
    }, 5000);
  }

  const handleLoadBillInfo = () => {
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
  }

  const initLoadOrderTSale = () => {
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
  }

  const loadPosHwSetup = () => {
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
  }

  const loadPosConfigSetup = () => {
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
  }

  useEffect(() => {
    handleLoadBillInfo()
    initLoadOrderTSale()
    loadPosHwSetup()
    loadPosConfigSetup()
  }, [])

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
      {isPrinting === false &&
        <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <Grid2 container spacing={2} justifyContent="center" padding={3}>
            <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={printNative}>Print</Button>
          </Grid2>
        </Paper>
      }
    </>
  );
}

export default ReceiptToPrint
