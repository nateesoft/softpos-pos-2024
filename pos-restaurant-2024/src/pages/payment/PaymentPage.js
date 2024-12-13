import React, { useCallback, useEffect, useState } from "react";
import Grid from '@mui/material/Grid2'
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';

import apiClient from '../../httpRequest'
import OrderItem from './OrderItem'
import PaymentForm from './PaymentForm'
import MemberInfo from "./MemberInfo";
import ShowNotification from "../utils/ShowNotification";
import { Box, Modal } from "@mui/material";

import MultiplePayment from "./split/MultiplePayment";
// import SplitBiPayment from "./SplitBillPayment"

const modalStyle = {
  bgcolor: "background.paper",
  border: "1px solid #eee"
}

const backgroundSpecial = {
  background: "snow",
  backgroundImage: "radial-gradient(#eee 2px, transparent 0)",
  backgroundSize: "80px 80px",
  backgroundPosition: "-19px -19px"
}

function PaymentPage() {
  const { tableNo } = useParams();

  // Load summary tablefile
  const [subTotalAmount, setSubTotalAmount] = useState(0)
  const [serviceAmount, setServiceAmount] = useState(0)
  const [productAndService, setProductAndService] = useState(0)
  const [vatAmount, setVatAmount] = useState(0)
  const [netTotalAmount, setNetTotalAmount] = useState(0)
  const [printRecpMessage, setPrintRecpMessage] = useState("")

  const matches = useMediaQuery('(min-width:1024px)');

  const [openSplitBill, setOpenSplitBill] = useState(false)

  const [orderList, setOrderList] = useState([])
  const [memberInfo, setMemberInfo] = useState({})

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const initLoadOrder = useCallback(() => {
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [tableNo])

  const summaryTableFileBalance = useCallback(() => {
    apiClient.post('/api/balance/summaryBalance', { tableNo })
      .then(response => {
        if (response.status === 200) {
          const data = response.data.data
          setSubTotalAmount(data.TAmount)
          setServiceAmount(data.ServiceAmt)
          setVatAmount(data.vatAmount)
          setNetTotalAmount(data.NetTotal)
          setProductAndService(data.productAndService)
          setPrintRecpMessage(data.printRecpMessage)
        }
      })
      .catch(err => handleNotification(err.message))
  }, [])

  useEffect(() => {
    initLoadOrder()
  }, [initLoadOrder])

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
          <MemberInfo tableNo={tableNo} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
        </Grid>}
        <Grid size={matches ? 8 : 12}>
          <PaymentForm
            tableNo={tableNo}
            orderList={orderList}
            handleNotification={handleNotification}
            tableFile={{
              subTotalAmount,
              serviceAmount,
              vatAmount,
              netTotalAmount,
              productAndService,
              printRecpMessage
            }}
            memberInfo={memberInfo}
            setOpenSplitBill={setOpenSplitBill}
          />
        </Grid>
      </Grid>
      {/* <Modal open={openSplitBill} onClose={() => setOpenSplitBill(false)}>
                <Box sx={{ ...modalStyle }}>
                    <SplitBiPayment onClose={() => setOpenSplitBill(false)} />
                </Box>
            </Modal> */}
      <Modal open={openSplitBill} onClose={() => setOpenSplitBill(false)}>
        <Box sx={{ ...modalStyle }}>
          <MultiplePayment
            setOpenSplitBill={setOpenSplitBill}
            onClose={() => setOpenSplitBill(false)}
            tableNo={tableNo}
            orderList={orderList}
            tableFile={{
              subTotalAmount,
              serviceAmount,
              vatAmount,
              netTotalAmount,
              productAndService,
              printRecpMessage
            }}
          />
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  );
}

export default PaymentPage;
