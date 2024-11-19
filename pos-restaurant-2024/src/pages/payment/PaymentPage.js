import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid2'
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from "axios"

import OrderItem from './OrderItem'
import PaymentMethod from './PaymentMethod'
import PaymentForm from './PaymentForm'
import { Box, Button, Modal } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print'
import CloseIcon from '@mui/icons-material/Close'

import ReceiptToPrint from './ReceiptToPrint'
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

function PaymentPage() {
  const { appData } = useContext(POSContext)
  const { tableNo } = appData.tableInfo
  console.log('PaymentPage:', tableNo)

  const matches = useMediaQuery('(min-width:1024px)');

  const [open, setOpen] = useState(false)
  const [orderList, setOrderList] = useState([])
  const navigate = useNavigate();

  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  const toFloorPlan = () => {
    navigate("/floorplan");
  }

  const initLoadOrder = useCallback(() => {
    axios
      .get(`/api/balance/table/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)
        }
      })
      .catch((error) => {
        alert(error)
      })
  }, [tableNo])

  useEffect(()=> {
    initLoadOrder()
  }, [initLoadOrder])

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Grid container spacing={2}>
        {matches && <Grid size={6}>
          <OrderItem tableNo={tableNo} orderList={orderList} />
          <PaymentMethod />
        </Grid>}
        <Grid size={matches ? 6: 12}>
          <PaymentForm open={() => setOpen(true)} close={() => setOpen(false)} />
        </Grid>
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ReceiptToPrint innerRef={contentRef} />
          <Box sx={{ padding: "10px" }} textAlign="center">
            <Button variant="contained" color="error" onClick={() => toFloorPlan()} sx={{ marginRight: "10px" }} startIcon={<CloseIcon />}>Close</Button>
            <Button variant="contained" color="info" startIcon={<PrintIcon />} onClick={handlePrint}>Print</Button>
          </Box>
        </Box>
      </Modal>
    </motion.div>
  );
}

export default PaymentPage;