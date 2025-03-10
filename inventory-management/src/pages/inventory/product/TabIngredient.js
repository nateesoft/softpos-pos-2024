import React from "react"
import { Button, FormControl, Grid2, InputLabel, Stack, TextField } from "@mui/material"
import { ZoomIn } from "@mui/icons-material"
import DataTable from "./DataTable"

const TabIngredient = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 container size={10} spacing={1}>
        <Grid2 spacing={1} container alignItems="center">
          <TextField label="รหัสสินค้า/วัตถุดิบ" size="small" />
          <ZoomIn />
          <TextField label="ชื่อสินค้า (Description)" size="small" />
          <TextField label="จำนวน (Qty)" size="small" />
          <InputLabel>หน่วยนับ</InputLabel>
        </Grid2>
        <DataTable />
      </Grid2>
      <Grid2 size={2}>
        <Stack spacing={1}>
          <Button variant="outlined">บันทึก</Button>
          <Button variant="outlined">ยกเลิก</Button>
          <Button variant="outlined">ลบช้อมูล</Button>
        </Stack>
      </Grid2>
    </Grid2>
  )
}

export default TabIngredient
