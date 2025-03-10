import React from "react"
import { Button, FormControl, Grid2, InputLabel, Stack, TextField } from "@mui/material"
import { ZoomIn } from "@mui/icons-material"
import DataTable from "./DataTable"

const TabSaleHistory = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 spacing={1} container alignItems="center">
        <InputLabel>กำหนดช่วงวันที่</InputLabel>
        <TextField label="" size="small" />
        <TextField label="" size="small" />
        <Button variant="outlined">ประมวลผล</Button>
      </Grid2>
      <DataTable />
    </Grid2>
  )
}

export default TabSaleHistory
