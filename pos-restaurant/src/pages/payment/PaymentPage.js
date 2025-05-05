import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid2"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Box, Modal } from "@mui/material"

import apiClient from "../../httpRequest"
import OrderItem from "./OrderItem"
import PaymentForm from "./PaymentForm"
import MemberInfo from "./MemberInfo"
import MultiplePayment from "./split/MultiplePayment"
import { useAlert } from "../../contexts/AlertContext"
import { POSContext } from "../../AppContext"
import { useContext } from "react"

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
  const { appData } = useContext(POSContext)
  const { macno } = appData
  const { tableNo } = useParams()
  const { handleNotification } = useAlert()

  // Load summary tablefile
  const [summaryTable, setSummaryTable] = useState({})

  const matches = useMediaQuery("(min-width:1024px)")

  const [openSplitBill, setOpenSplitBill] = useState(false)
  const [tableFileDb, setTableFileDb] = useState({})
  const [orderList, setOrderList] = useState([])
  const [orderListToSplit, setOrderListToSplit] = useState([])
  const [memberInfo, setMemberInfo] = useState({})

  const initLoadOrder = () => {
    apiClient
      .get(`/api/balance/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)
          setOrderListToSplit(dataList.filter(item => item.R_Void !== 'V' && item.R_LinkIndex === ''))
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const initLoadTableFile = () => {
    apiClient
      .get(`/api/tablefile/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          const tb = response.data.data
          setTableFileDb(tb)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const summaryTableFileBalance = () => {
    apiClient
      .post("/api/balance/summaryBalance", { tableNo, macno })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data
          const resultSummary = {
            totalAmount: data.TAmount,
            discountAmount: data.DiscountAmount,
            service: data.Service,
            serviceType: data.ServiceType,
            serviceAmount: data.ServiceAmt,
            subTotalAmount: data.SubTotal_Amt,
            vat: data.Vat,
            vatType: data.VatType,
            vatAmount: data.VatAmount,
            netTotalAmount: data.NetTotal,
            productAndService: data.ProductAndService,
            printRecpMessage: data.PrintRecpMessage,
            productNoneVat: data.ProductNonVat,
          }

          setSummaryTable(resultSummary)
        }
      })
      .catch((err) => handleNotification(err.message))
  }

  const splitBillAction = () => {
    initLoadOrder()
    summaryTableFileBalance()
  }

  const initLoadPayment =() => {
    initLoadOrder()
    initLoadTableFile()
    summaryTableFileBalance()
  }

  useEffect(() => {
    initLoadPayment()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid container spacing={2} sx={backgroundSpecial}>
        {matches && (
          <Grid size={4}>
            <OrderItem
              tableNo={tableNo}
              orderList={orderList}
              tableFile={summaryTable}
              tableFileDb={tableFileDb}
              initLoad={initLoadPayment}
            />
            <MemberInfo
              tableNo={tableNo}
              memberInfo={memberInfo}
              tableFile={summaryTable}
              setMemberInfo={setMemberInfo}
            />
          </Grid>
        )}
        <Grid size={matches ? 8 : 12}>
          <PaymentForm
            tableNo={tableNo}
            tableFileDb={tableFileDb}
            orderList={orderList}
            handleNotification={handleNotification}
            tableFile={summaryTable}
            memberInfo={memberInfo}
            setOpenSplitBill={setOpenSplitBill}
            initLoad={initLoadPayment}
          />
        </Grid>
      </Grid>
      <Modal open={openSplitBill} onClose={() => setOpenSplitBill(false)}>
        <Box sx={{ ...modalStyle }}>
          <MultiplePayment
            setOpenSplitBill={setOpenSplitBill}
            onClose={() => setOpenSplitBill(false)}
            macno={macno}
            tableNo={tableNo}
            orderList={orderListToSplit}
            splitBillAction={splitBillAction}
            tableFile={summaryTable}
            memberInfo={memberInfo}
            initLoad={initLoadPayment}
          />
        </Box>
      </Modal>
    </motion.div>
  )
}

export default PaymentPage
