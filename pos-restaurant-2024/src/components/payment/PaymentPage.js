import React, { useRef, useState } from "react";
import Grid from '@mui/material/Grid2'
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import OrderItem from './OrderItem'
import PaymentMethod from './PaymentMethod'
import PaymentForm from './PaymentForm'
import { Box, Button, Modal } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print'
import CloseIcon from '@mui/icons-material/Close'

import ReceiptToPrint from './ReceiptToPrint'

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
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  const toFloorPlan = () => {
    navigate("/floorplan");
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6}>
          <OrderItem />
          <PaymentMethod />
        </Grid>
        <Grid size={6}>
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
    </div>
  );
}

export default PaymentPage;