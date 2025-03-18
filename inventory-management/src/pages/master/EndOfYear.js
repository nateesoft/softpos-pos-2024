import React from "react"
import { Button, Container, Grid2, Paper, TextField, Typography } from "@mui/material"

const EndOfYear = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Grid2 container justifyContent="center" spacing={2} padding={2}>
        <Typography variant="h5">โปรแกรมประมวลผลข้อมูลสิ้นปี (End Of Year)</Typography>
        <Paper elevation={3} sx={{padding: 5, background: "#ff6c6c"}}>
          <Grid2
            container
            padding={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{width: 350, color: "snow"}}>ข้อมูลงวดปีของข้อมูลในเครื่องได้แก่ ปี</Typography>
            <TextField value="2024" inputProps={{style: {background: "blue", color: "red", fontWeight: "bold", fontSize: 16}}} />
          </Grid2>
          <Grid2
            container
            padding={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{width: 350, color: "snow"}}>โปรแกรมจะทำการเปลี่ยนงวดของข้อมูลเป็น ปี</Typography>
            <TextField value="2025" inputProps={{style: {background: "blue", color: "red", fontWeight: "bold", fontSize: 16}}} />
          </Grid2>
          <Grid2 container padding={2} spacing={2} justifyContent="center">
            <Button variant="contained" color="primary">ตกลง</Button>
            <Button variant="contained" color="error">ยกเลิก</Button>
          </Grid2>
        </Paper>
      </Grid2>
    </Container>
  )
}

export default EndOfYear
