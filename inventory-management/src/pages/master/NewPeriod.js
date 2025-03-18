import React from "react"
import {
  Button,
  Container,
  Divider,
  Grid2,
  IconButton,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { ZoomIn } from "@mui/icons-material"

const NewPeriod = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Typography variant="h5">คำนวณยอดคงเหลือยกมา</Typography>
      <Divider sx={{ marginBottom: 1 }} />
      <Paper elevation={3}>
        <Grid2 container spacing={1} padding={3} alignItems="center">
          <Typography>คำนวณยอดสินค้าต้นงวดสำหรับเดือน</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker views={["MM", "YYYY"]} />
          </LocalizationProvider>
          <TextField label="กำหนดสต็อก" />
          <IconButton>
            <ZoomIn fontSize="large" />
          </IconButton>
          <Button variant="contained">ตกลง</Button>
        </Grid2>
        <Grid2 container padding={3}>
          <TextField fullWidth value="Process Record..." disabled />
        </Grid2>
      </Paper>
    </Container>
  )
}

export default NewPeriod
