import React, { useCallback, useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid2'
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from "axios"

import OrderItem from './OrderItem'
import PaymentForm from './PaymentForm'
import { Box, Button, Modal } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print'
import CloseIcon from '@mui/icons-material/Close'

import ReceiptToPrint from './ReceiptToPrint'
import MemberInfo from "./MemberInfo";
import ShowNotification from "../utils/ShowNotification";

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

  const matches = useMediaQuery('(min-width:1024px)');

  const [open, setOpen] = useState(false)
  const [orderList, setOrderList] = useState([])
  const [billAmount, setBillAmount] = useState(0)

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
      axios
        .delete(`/api/balance/empty/${tableNo}`)
        .then((response) => {
          // console.log("initLoadMenu:", response)
          toFloorPlan()
        })
        .catch((error) => {
          handleNotification(error)
        })
    },
    onPrintError: (err) => {
      handleNotification(err)
    }
  })

  const toFloorPlan = () => {
    navigate("/floorplan");
  }

  const initLoadOrder = useCallback(() => {
    axios
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
        handleNotification(error)
      })
  }, [tableNo])

  useEffect(() => {
    initLoadOrder()
  }, [initLoadOrder])

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Grid container spacing={2} sx={backgroundSpecial}>
        {matches && <Grid size={6}>
          <OrderItem tableNo={tableNo} orderList={orderList} />
          <MemberInfo />
        </Grid>}
        <Grid size={matches ? 6 : 12}>
          <PaymentForm 
            open={() => setOpen(true)} 
            close={() => setOpen(false)} 
            tableNo={tableNo} orderList={orderList}
            handleNotification={handleNotification} 
          />
        </Grid>
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }}>
          <div style={{ height: '700px', overflow: "auto" }}>
            <ReceiptToPrint innerRef={contentRef} orderList={orderList} tableNo={tableNo} amount={billAmount} />
          </div>
          <Box sx={{ padding: "10px", backgroundColor: "#eee", borderRadius: "10px" }} textAlign="center">
            <Button variant="contained" color="error" onClick={() => setOpen(false)} sx={{ marginRight: "10px" }} startIcon={<CloseIcon />}>Cancel</Button>
            <Button variant="contained" color="info" startIcon={<PrintIcon />} onClick={handlePrint}>Print</Button>
          </Box>
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  );
}

export default PaymentPage;
