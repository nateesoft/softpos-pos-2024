import React, { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Alert,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import CloseButton from "@mui/icons-material/Close"
import OpenTableButton from "@mui/icons-material/MobileFriendly"
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch"
import CheckIcon from "@mui/icons-material/Check"
import SearchOffIcon from "@mui/icons-material/SearchOff"
import moment from "moment"
import { useTranslation } from "react-i18next"

import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import CartItems from "../floorplan/modal/CartItems"
import CustomerTabs from "./CustomerTabs"

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

const CustomerCheckin = (props) => {
  const { t } = useTranslation("global")
  const { appData, setAppData } = useContext(POSContext)
  const { macno } = appData
  const { tableNo } = appData.tableInfo

  const { setOpenPin, empCode } = props
  const navigate = useNavigate()

  const [custCount, setCustCount] = useState(1)
  const [orderType, setOrderType] = useState("E")

  // additional other customer count
  const [thaiManCount, setThaiManCount] = useState(0)
  const [thaiWomanCount, setThaiWomanCount] = useState(0)
  const [thaiKidCount, setThaiKidCount] = useState(0)
  const [thaiOldCount, setThaiOldCount] = useState(0)

  // nation customer
  const [nationManCount, setNationManCount] = useState(0)
  const [nationWomanCount, setNationWomanCount] = useState(0)
  const [nationKidCount, setNationKidCount] = useState(0)
  const [nationOldCount, setNationOldCount] = useState(0)

  // nation country name
  const [nationCountry, setNationCountry] = useState("Asia")
  const [customerNote, setCustomerNote] = useState("")
  const [billNo, setBillNo] = useState("")

  const [customerName, setCustomerName] = useState("")
  const [memberCode, setMemberCode] = useState("")
  const [reserveNo, setReserveNo] = useState("")
  const [timeCheckIn, setTimeCheckIn] = useState(
    moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
  )

  const [foundBooking, setFoundBooking] = useState("")
  const [orderId, setOrderId] = useState("")
  const [openBookingModal, setOpenBookingModal] = useState(false)

  const [showError, setShowError] = useState(false)
  const [showCustomerError, setShowCustomerError] = useState(false)
  const [showCustomerCountError, setShowCustomerCountError] = useState(false)
  const handleChangeOrderType = (event, oType) => {
    setOrderType(oType)
  }

  const handleOpenTable = async () => {
    const checkTableActive = await apiClient.get(`/api/tablefile/${tableNo}`)
    const tableResponse = checkTableActive.data.data
    if (tableResponse != null) {
      const thaiPerson = thaiManCount + thaiWomanCount + thaiKidCount + thaiOldCount
      const nationPerson = nationManCount + nationWomanCount + nationKidCount + nationOldCount
      const totalCustomer = thaiPerson + nationPerson
      if (totalCustomer === 0) {
        setShowCustomerCountError(true)
        return
      }
      if (totalCustomer > 0 && orderType !== "") {
        // call api to update table checkin
        const payload = {
          empCode,
          macno,
          customer_count: totalCustomer,
          thai_man_count: thaiManCount,
          thai_woman_count: thaiWomanCount,
          thai_kid_count: thaiKidCount,
          thai_old_count: thaiOldCount,
          nation_man_count: nationManCount,
          nation_woman_count: nationWomanCount,
          nation_kid_count: nationKidCount,
          nation_old_count: nationOldCount,
          customer_name: customerName,
          member_code: memberCode,
          book_no: reserveNo,
          order_id: orderId,
          table_order_type_start: orderType,
          nation_country: nationCountry,
          customer_note: customerNote,
          bill_no: billNo
        }

        apiClient
          .post(`/api/table_checkin/${tableNo}`, payload)
          .then((response) => {
            if (response.status === 200) {
              setShowError(false)
              setShowCustomerError(false)
              setShowCustomerCountError(false)
              setAppData({
                ...appData,
                tableInfo: {
                  ...appData.tableInfo,
                  customerCount: custCount,
                  customerName: customerName,
                  orderType: orderType
                }
              })
              navigate(`/sale/${tableNo}`)
            } else {
              setShowCustomerError(true)
            }
          })
          .catch((err) => {
            setShowCustomerError(true)
          })
      } else {
        setShowCustomerError(true)
      }
    } else {
      setShowError(true)
    }
  }

  const handleInputReserveNo = (e) => {
    setReserveNo(e.target.value)
    setFoundBooking(null)
  }

  const handleCancel = () => {
    setOpenPin(false)
    setShowError(false)
    setShowCustomerError(false)
    setShowCustomerCountError(false)

    navigate("/floorplan")
  }

  const searchBookNumber = useCallback(() => {
    if (reserveNo === "") {
      return
    }
    apiClient
      .post(`/api/integration/booking/appointments`, { reserveNo })
      .then((response) => {
        if (response.data.status === 2000) {
          const appData = response.data.data
          setFoundBooking("Y")
          setOrderId(appData.order_id)
        } else {
          setFoundBooking("N")
          setOrderId("")
        }
      })
      .catch((err) => {
        setFoundBooking("N")
        setOrderId("")
      })
  }, [reserveNo])

  useEffect(() => {
    apiClient
      .get(`/api/table_checkin/${tableNo}`)
      .then((response) => {
        if (response.status === 200 && response.data.data != null) {
          const tableInfoData = response.data.data
          setCustCount(tableInfoData.customer_count)
          setThaiManCount(tableInfoData.thai_man_count)
          setThaiWomanCount(tableInfoData.thai_woman_count)
          setThaiKidCount(tableInfoData.thai_kid_count)
          setThaiOldCount(tableInfoData.thai_old_count)
          setNationManCount(tableInfoData.nation_man_count)
          setNationWomanCount(tableInfoData.nation_woman_count)
          setNationKidCount(tableInfoData.nation_kid_count)
          setNationOldCount(tableInfoData.nation_old_count)
          setCustomerName(tableInfoData.customer_name)
          setMemberCode(tableInfoData.member_code)
          setReserveNo(tableInfoData.book_no)
          setTimeCheckIn(
            moment(tableInfoData.datetime_checkin).format("DD/MM/YYYY HH:mm:ss")
          )
          setOrderType(tableInfoData.table_order_type_start)
          setNationCountry(tableInfoData.nation_country)
          setCustomerNote(tableInfoData.customer_note)
          setBillNo(tableInfoData.bill_no)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [tableNo])

  return (
    <div>
      <Grid2
        textAlign="center"
        sx={{ background: "pink" }}
        padding={1}
        marginBottom="10px"
      >
        <Typography variant="p" sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {t("FloorPlanPage.systemLogin")}: {timeCheckIn}
        </Typography>
      </Grid2>
      <Grid2 textAlign="center">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#0030bb",
            textShadow: "2px 2px #eee"
          }}
        >
          Table: {tableNo}
        </Typography>
      </Grid2>
      <Divider sx={{ margin: "10px" }} />
      <Box sx={{ "& > :not(style)": { m: 1 }, background: "#faece9" }}>
        <CustomerTabs
          thaiManCount={thaiManCount}
          setThaiManCount={setThaiManCount}
          thaiWomanCount={thaiWomanCount}
          setThaiWomanCount={setThaiWomanCount}
          thaiKidCount={thaiKidCount}
          setThaiKidCount={setThaiKidCount}
          thaiOldCount={thaiOldCount}
          setThaiOldCount={setThaiOldCount}
          nationManCount={nationManCount}
          setNationManCount={setNationManCount}
          nationWomanCount={nationWomanCount}
          setNationWomanCount={setNationWomanCount}
          nationKidCount={nationKidCount}
          setNationKidCount={setNationKidCount}
          nationOldCount={nationOldCount}
          setNationOldCount={setNationOldCount}
          nationCountry={nationCountry}
          setNationCountry={setNationCountry}
          customerNote={customerNote}
          setCustomerNote={setCustomerNote}
          billNo={billNo}
          setBillNo={setBillNo}
        />
      </Box>
      <Grid2 container padding={1} spacing={1}>
        <TextField 
          id="txt-customer-name" 
          label="Customer Name" 
          value={customerName}
          onChange={e=>setCustomerName(e.target.value)}
          sx={{width: 150}}
        />
        <TextField
          id="txt-reserve-no"
          label={t("FloorPlanPage.bookingNo")}
          value={reserveNo}
          onChange={handleInputReserveNo}
          sx={{width: 150}}
        />
        <Button
          variant="contained"
          startIcon={<ContentPasteSearchIcon />}
          onClick={searchBookNumber}
        >
          {t("FloorPlanPage.findButton")}
        </Button>
      </Grid2>
      {foundBooking === "Y" && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClick={() => setOpenBookingModal(true)}
        >
          <Typography color="primary">
            <u>
              {t("FloorPlanPage.foundBooking")} Order: {orderId}
            </u>
          </Typography>
        </Alert>
      )}
      {foundBooking === "N" && (
        <Alert icon={<SearchOffIcon fontSize="inherit" />} severity="error">
          {t("FloorPlanPage.notFoundBooking")}
        </Alert>
      )}
      <Grid2
        container
        padding={1}
        spacing={1}
        alignContent="center"
        direction="column"
      >
        <Grid2 container>
          <Typography variant="p">{t("FloorPlanPage.foodType")}</Typography>
        </Grid2>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={orderType}
          exclusive
          onChange={handleChangeOrderType}
          aria-label="Platform"
          fullWidth
        >
          <ToggleButton value="E">{t("FloorPlanPage.dineIn")}</ToggleButton>
          <ToggleButton value="T">{t("FloorPlanPage.takeAway")}</ToggleButton>
          <ToggleButton value="D">{t("FloorPlanPage.delivery")}</ToggleButton>
        </ToggleButtonGroup>
      </Grid2>
      <Grid2 textAlign="center" padding={1}>
        <Button
          variant="contained"
          sx={{ width: "120px", fontSize: "16px", marginRight: "10px" }}
          color="error"
          onClick={handleCancel}
          startIcon={<CloseButton />}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ width: "120px", fontSize: "16px" }}
          onClick={handleOpenTable}
          startIcon={<OpenTableButton />}
        >
          {t("FloorPlanPage.openTableButton")}
        </Button>
      </Grid2>

      <Modal open={openBookingModal} onClose={() => setOpenBookingModal(false)}>
        <Box sx={{ ...modalStyle, padding: "10px", overflow: "auto" }}>
          <CartItems
            orderId={orderId}
            onClose={() => setOpenBookingModal(false)}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default CustomerCheckin
