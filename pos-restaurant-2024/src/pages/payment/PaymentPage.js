import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid2'
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';
import PrintIcon from '@mui/icons-material/Print'
import { Box, Button, Modal } from "@mui/material";

import apiClient from '../../httpRequest'
import OrderItem from './OrderItem'
import PaymentForm from './PaymentForm'
import ReceiptToPrint from './ReceiptToPrint'
import MemberInfo from "./MemberInfo";
import ShowNotification from "../utils/ShowNotification";
import { POSContext } from "../../AppContext";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

const backgroundSpecial = {
  background: "snow",
  backgroundImage: "radial-gradient(#eee 2px, transparent 0)",
  backgroundSize: "80px 80px",
  backgroundPosition: "-19px -19px"
}

const TAX_RATE = 0.07;
function subtotal(items) {
  return items.map(({ R_Price }) => R_Price).reduce((sum, i) => sum + i, 0);
}

function PaymentPage() {
  const { tableNo } = useParams();
  console.log('PaymentPage:', tableNo)

  // Load summary tablefile
  const [subTotalAmount, setSubTotalAmount] = useState(0)
  const [serviceAmount, setServiceAmount] = useState(0)
  const [productAndService, setProductAndService] = useState(0)
  const [vatAmount, setVatAmount] = useState(0)
  const [netTotalAmount, setNetTotalAmount] = useState(0)
  const [printRecpMessage, setPrintRecpMessage] = useState("")

  const matches = useMediaQuery('(min-width:1024px)');
  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin, tableInfo } = appData

  const [open, setOpen] = useState(false)
  const [orderList, setOrderList] = useState([])
  const [billAmount, setBillAmount] = useState(0)
  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const [nextBillId, setNextBillId] = useState("")
  const [billInfo, setBillInfo] = useState("")

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type="error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const navigate = useNavigate();
  const contentRef = useRef(null);
  // const handlePrint = useReactToPrint({ contentRef });
  const handlePrint = useReactToPrint({
    contentRef,
    onAfterPrint: () => {
      // clear balance
      apiClient
        .delete(`/api/balance/empty/${tableNo}`)
        .then((response) => {
          // console.log("initLoadMenu:", response)
          toFloorPlan()
        })
        .catch((error) => {
          handleNotification(error.message)
        })
    },
    onPrintError: (err) => {
      handleNotification(err.message)
    }
  })

  const toFloorPlan = () => {
    navigate("/floorplan");
  }

  const initLoadOrder = useCallback(() => {
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)

          const invoiceSubtotal = subtotal(orderList);
          const invoiceTaxes = TAX_RATE * invoiceSubtotal;
          const invoiceTotal = Math.round(invoiceTaxes + invoiceSubtotal);
          setBillAmount(invoiceTotal)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [tableNo])

  const handleLoadBillInfo = billNo => {
    apiClient
      .get(`/api/billno/${billNo}`)
      .then((response) => {
        console.log('PaymentPage:handleLoadBillInfo:', response)
        if (response.status === 200) {
          setBillInfo(response.data.data)
          setOpen(true)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const loadPosHwSetup = useCallback(() => {
    apiClient
      .get(`/api/poshwsetup/${macno}`)
      .then((response) => {
        if (response.status === 200) {
          setPosHwSetup(response.data.data)
          setNextBillId(response.data.billId)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [macno])

  const loadPosConfigSetup = useCallback(() => {
    apiClient
      .get(`/api/posconfigsetup`)
      .then((response) => {
        if (response.status === 200) {
          setPOSConfigSetup(response.data.data)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [macno])

  const summaryTableFileBalance = useCallback(async () => {
    const response = await apiClient.post('/api/tablefile/summaryBalance', {tableNo})
    if(response.data.data){
      const data = response.data.data
      setSubTotalAmount(data.TAmount)
      setServiceAmount(data.ServiceAmt)
      setVatAmount(data.vatAmount)
      setNetTotalAmount(data.NetTotal)
      setProductAndService(data.productAndService)
      setPrintRecpMessage(data.printRecpMessage)
    }
  }, [])

  useEffect(() => {
    initLoadOrder()
    loadPosHwSetup()
    loadPosConfigSetup()
  }, [initLoadOrder, loadPosHwSetup, loadPosConfigSetup])

  useEffect(() => {
    summaryTableFileBalance()
  }, [summaryTableFileBalance])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Grid container spacing={2} sx={backgroundSpecial}>
        {matches && <Grid size={4}>
          <OrderItem tableNo={tableNo} orderList={orderList} tableFile={{
            subTotalAmount,
            serviceAmount,
            vatAmount,
            netTotalAmount,
            productAndService,
            printRecpMessage
          }} />
          <MemberInfo tableNo={tableNo} />
        </Grid>}
        <Grid size={matches ? 8 : 12}>
          <PaymentForm 
            close={() => setOpen(false)} 
            tableNo={tableNo} 
            orderList={orderList}
            handleNotification={handleNotification} 
            loadBillInfo={handleLoadBillInfo} 
            tableFile={{
              subTotalAmount,
              serviceAmount,
              vatAmount,
              netTotalAmount,
              productAndService,
              printRecpMessage
            }}
          />
        </Grid>
      </Grid>
      <Modal open={open} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" disableEnforceFocus>
        <Box sx={{ ...modalStyle, width: 450 }}>
          <div style={{ height: '700px', overflow: "auto" }}>
            <ReceiptToPrint innerRef={contentRef} 
              billInfo={billInfo} 
              orderList={orderList} 
              tableNo={tableNo} 
              poshwSetup={poshwSetup} 
              posConfigSetup={posConfigSetup} 
              empCode={empCode} 
              userLogin={userLogin} 
              customerCount={tableInfo.customerCount}
          />
          </div>
          <Box sx={{ padding: "10px", backgroundColor: "#eee", borderRadius: "10px" }} textAlign="center">
            <Button variant="contained" color="info" startIcon={<PrintIcon />} onClick={handlePrint}>Print</Button>
          </Box>
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  );
}

export default PaymentPage;
