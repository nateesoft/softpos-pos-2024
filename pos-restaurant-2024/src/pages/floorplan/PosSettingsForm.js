import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"
import PrintIcon from "@mui/icons-material/Print"
import moment from "moment"
import { v4 as uuid } from "uuid"

import apiClient from "../../httpRequest"

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

const languageList = [
  { value: "th", title: "Thailand" },
  { value: "en", title: "English" }
]
const timeZoneList = [
  { value: "Asia/Bangkok", title: "Thailand" },
  { value: "Europe/London", title: "London" }
]
const currencyList = [
  { value: "THB", title: "Thai Baht" },
  { value: "GBP", title: "British Pound" }
]

const PosSettingsForm = ({ setOpen }, data) => {
  const { user_update, terminal_id } = data
  const [language, setLanguage] = useState("th")
  const [timezone, setTimeZone] = useState("Asia/Bangkok")
  const [currency, setCurrency] = useState("THB")
  const [currencyRate, setCurrencyRate] = useState(1)

  // fix baht main rate
  const [currencyBahtRate, setCurrencyBahtRate] = useState(1)

  const [receiptPrinterIp, setReceiptPrinterIp] = useState("")
  const [kichenPrinterIp, setKichenPrinterIp] = useState("")

  const testPrinterThermal = () => {
    apiClient.post(`/api/printer-thermal/print-test`, {
      printerIp: receiptPrinterIp
    })
    .then(response => {
      if(response.status === 200){
        console.log('Printer done')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  const saveData = () => {
    apiClient
      .post(`/api/pos_setting`, {
        id: uuid(),
        language_main: "th",
        language_main_title: "Thailand",
        language_use: language,
        language_use_title: languageList.filter(
          (item) => item.value === language
        ),
        timezone_main: "Asia/Bangkok",
        timezone_use: timezone,
        currency_baht_rate: currencyBahtRate,
        currency_baht: "THB",
        currency_use_rate: currencyRate,
        currency_use: currencyList.filter((item) => item.value === currency),
        receipt_printer_ip: receiptPrinterIp,
        kichen_printer_ip: kichenPrinterIp,
        create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        user_update: user_update,
        terminal_id: terminal_id
      })
      .then((response) => {
        if (response.status === 200) {
          setOpen(false)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const loadPosSetting = () => {
    apiClient
      .get(`/api/pos_setting/${terminal_id}`)
      .then((response) => {
        if(response.status === 200) {
          const data = response.data.data
          setLanguage(data.language_use)
          setTimeZone(data.timezone_use)
          setCurrency(data.currency_use)
          setCurrencyRate(data.currency_use_rate)
          setCurrencyBahtRate(data.currency_baht_rate)
          setReceiptPrinterIp(data.receipt_printer_ip)
          setKichenPrinterIp(data.kichen_printer_ip)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    loadPosSetting()
  }, [])

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          POS Terminal Setting
        </Typography>
      </Grid2>
      <Grid2 container spacing={1} padding={1} direction="column">
        <Grid2 container size={12}>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languageList &&
                languageList.map((item) => (
                  <MenuItem value={item.value}>{item.title}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timezone}
              label="Currency"
              onChange={(e) => setTimeZone(e.target.value)}
            >
              {timeZoneList &&
                timeZoneList.map((item) => (
                  <MenuItem value={item.value}>{item.title}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2
          container
          spacing={1}
          padding={2}
          sx={{ border: "2px solid orange" }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Use Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Use Currency"
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencyList &&
                currencyList.map((item) => (
                  <MenuItem value={item.value}>
                    {item.title} ({item.value})
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Grid2 container spacing={1}>
            <TextField
              label="ค่าเงินบาท (Baht)"
              value={currencyBahtRate}
              onChange={(e) => setCurrencyBahtRate(e.target.value)}
              sx={{ width: "120px" }}
            />
            <TextField
              label={`ค่าเงินในระบบ (${currency})`}
              value={currencyRate}
              onChange={(e) => setCurrencyRate(e.target.value)}
              sx={{ width: "200px" }}
            />
          </Grid2>
        </Grid2>

        <Divider />
        <Grid2 container>
          <TextField
            label="Receipt Printer IP"
            value={receiptPrinterIp}
            onChange={(e) => setReceiptPrinterIp(e.target.value)}
          />
          <Button variant="contained" startIcon={<PrintIcon />} onClick={testPrinterThermal}>
            Test
          </Button>
        </Grid2>
        <Grid2 container>
          <TextField
            label="Kichen Printer IP"
            value={kichenPrinterIp}
            onChange={(e) => setKichenPrinterIp(e.target.value)}
          />
          <Button variant="contained" startIcon={<PrintIcon />}>
            Test
          </Button>
        </Grid2>
      </Grid2>
      <Box display="flex" justifyContent="center">
        <Grid2 container spacing={2} padding={2}>
          <Button
            variant="contained"
            color="error"
            endIcon={<CancelIcon />}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="info"
            endIcon={<SaveIcon />}
            onClick={() => saveData()}
          >
            Save
          </Button>
        </Grid2>
      </Box>
    </Box>
  )
}

export default PosSettingsForm
