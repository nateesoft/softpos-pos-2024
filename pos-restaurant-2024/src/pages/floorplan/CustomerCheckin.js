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
import CustomerNationDetail from "./CustomerNationDetail"
import CartItems from "../floorplan/modal/CartItems"
import CustomerDetail from "./CustomerDetail"

const min = 1
const max = 10

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
  console.log("CustomerCheckin")
  const { t } = useTranslation("global")
  const { appData, setAppData } = useContext(POSContext)
  const { macno } = appData
  const { tableNo } = appData.tableInfo

  const { setOpenPin, empCode } = props
  const navigate = useNavigate()

  const [custCount, setCustCount] = useState(1)
  const [orderType, setOrderType] = useState("E")

  // additional other customer count
  const [manCount, setManCount] = useState(0)
  const [womanCount, setWomanCount] = useState(0)
  const [kidCount, setKidCount] = useState(0)
  const [oldCount, setOldCount] = useState(0)

  // nation customer
  const [thaiCount, setThaiCount] = useState(0)
  const [europeCount, setEuropeCount] = useState(0)
  const [americaCount, setAmericaCount] = useState(0)
  const [asiaCount, setAsiaCount] = useState(0)

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
      if (
        thaiCount +
          europeCount +
          americaCount +
          asiaCount +
          manCount +
          womanCount +
          kidCount +
          oldCount !==
        custCount
      ) {
        setShowCustomerCountError(true)
        return
      }
      if (custCount >= 0 && orderType !== "") {
        // call api to update table checkin
        apiClient
          .post(`/api/table_checkin/${tableNo}`, {
            empCode,
            macno,
            customer_count: custCount,
            cust_man_count: manCount,
            cust_woman_count: womanCount,
            cust_kid_count: kidCount,
            cust_old_count: oldCount,
            cust_thai_count: thaiCount,
            cust_europe_count: europeCount,
            cust_america_count: americaCount,
            cust_asia_count: asiaCount,
            customer_name: customerName,
            member_code: memberCode,
            book_no: reserveNo,
            order_id: orderId,
            table_order_type_start: orderType
          })
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
            console.log(err)
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
        console.log(err)
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
          setManCount(tableInfoData.cust_man_count)
          setWomanCount(tableInfoData.cust_woman_count)
          setKidCount(tableInfoData.cust_kid_count)
          setOldCount(tableInfoData.cust_old_count)
          setThaiCount(tableInfoData.cust_thai_count)
          setEuropeCount(tableInfoData.cust_europe_count)
          setAmericaCount(tableInfoData.cust_america_count)
          setAsiaCount(tableInfoData.cust_asia_count)
          setCustomerName(tableInfoData.customer_name)
          setMemberCode(tableInfoData.member_code)
          setReserveNo(tableInfoData.book_no)
          setTimeCheckIn(
            moment(tableInfoData.datetime_checkin).format("DD/MM/YYYY HH:mm:ss")
          )
          setOrderType(tableInfoData.table_order_type_start)
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
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Grid2 container spacing={2}>
          <TextField
            id="outlined-number"
            label={t("FloorPlanPage.customerCount")}
            value={custCount}
            required
            onChange={(e) => {
              var value = parseInt(e.target.value, 10)
              if (value > max) value = max
              if (value < min) value = min
              setCustCount(value)
            }}
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true
              }
            }}
          />
        </Grid2>
        <CustomerNationDetail
          thaiPeople={thaiCount}
          setThaiCount={setThaiCount}
          europePeople={europeCount}
          setEuropeCount={setEuropeCount}
          americaPeople={americaCount}
          setAmericaCount={setAmericaCount}
          asiaPeople={asiaCount}
          setAsiaCount={setAsiaCount}
        />
        <CustomerDetail
          man={manCount}
          setMan={setManCount}
          woman={womanCount}
          setWoman={setWomanCount}
          kid={kidCount}
          setKid={setKidCount}
          old={oldCount}
          setOld={setOldCount}
        />
      </Box>
      <Grid2 container padding={1} spacing={1}>
        <TextField
          id="txt-reserve-no"
          label={t("FloorPlanPage.bookingNo")}
          value={reserveNo}
          onChange={handleInputReserveNo}
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
      {showError && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {t("FloorPlanPage.tableStatusUnavailable")}
        </Alert>
      )}
      {showCustomerError && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {t("FloorPlanPage.customerInfoIncorrect")}
        </Alert>
      )}
      {showCustomerCountError && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {t("FloorPlanPage.NumberCustomersNotMatch")}
        </Alert>
      )}
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
