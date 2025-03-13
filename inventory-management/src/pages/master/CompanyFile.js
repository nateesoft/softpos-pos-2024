import React from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from "@mui/material"
import ZoomInIcon from "@mui/icons-material/ZoomIn"

const CompanyFile = () => {
  return (
    <div style={{ marginTop: 60, overflow: "auto" }}>
      <Grid2 container spacing={1} direction="column">
        <Stack width={200} spacing={1}>
          <TextField label="รหัสบริษัท (Code)" size="small" />
        </Stack>
        <Stack width={450} spacing={1}>
          <TextField label="ชื่อร้าน/บริษัท" size="small" />
        </Stack>
        <Stack width={450} spacing={1}>
          <TextField label="ที่อยู่เลขที่" size="small" />
        </Stack>
        <Stack width={500} spacing={1} direction="row">
          <TextField
            label="ตำบล/แขวง"
            size="small"
            inputProps={{ style: { width: 250 } }}
          />
          <TextField
            label="อำเภอ/เขต"
            size="small"
            inputProps={{ style: { width: 250 } }}
          />
        </Stack>
        <Stack width={500} spacing={1} direction="row">
          <TextField
            label="จังหวัด"
            size="small"
            inputProps={{ style: { width: 250 } }}
          />
          <TextField
            label="รหัสไปรษณีย์"
            size="small"
            inputProps={{ style: { width: 250 } }}
          />
        </Stack>
        <Stack width={200} spacing={1}>
          <TextField label="เบอร์โทรศัพท์" size="small" />
        </Stack>
        <Stack width={200} spacing={1}>
          <TextField label="เบอร์โทรสาร" size="small" />
        </Stack>
        <Stack width={250} spacing={1}>
          <TextField label="e-mail address" size="small" />
        </Stack>
        <Stack spacing={1}>
          <Grid2 container>
            <Grid2 size={6}>
              <Stack spacing={1} width={250}>
                <TextField
                  size="small"
                  label="เลขประจำตัวผู้เสียภาษี"
                ></TextField>
                <TextField size="small" label="วันที่ต้นงวดบัญชี"></TextField>
              </Stack>
              <Stack spacing={1} direction="row" marginTop={1}>
                <TextField
                  size="small"
                  label="การตัดสต็อกสินค้าจากเครื่อง POS ให้ตัดที่คลัง"
                ></TextField>
                <ZoomInIcon />
                <TextField size="small" label=""></TextField>
              </Stack>
            </Grid2>
            <Grid2 size={6}>
              <Button variant="contained">
                คำนวณต้นทุนสินค้าชุด/สินค้าที่มีส่วนประกอบ
              </Button>
              <Stack direction="row" margin={1} spacing={1}>
                <InputLabel id="selectBase" size="small">
                  คำนวณต้นทุนชุดสินค้า
                </InputLabel>
                <Select
                  labelId="selectBase"
                  label="คำนวณต้นทุนชุดสินค้า"
                  value="Y"
                  size="small"
                >
                  <MenuItem value="Y">Y</MenuItem>
                  <MenuItem value="N">N</MenuItem>
                </Select>
                <InputLabel id="selectConsist" size="small">
                  คำนวณต้นทุนส่วนประกอบสินค้า
                </InputLabel>
                <Select
                  labelId="selectConsist"
                  label="คำนวณต้นทุนส่วนประกอบสินค้า"
                  value="Y"
                  size="small"
                >
                  <MenuItem value="Y">Y</MenuItem>
                  <MenuItem value="N">N</MenuItem>
                </Select>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Grid2>
    </div>
  )
}

export default CompanyFile
