import React from "react"
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField
} from "@mui/material"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"

const TextFieldCustom = (props) => {
  return <TextField size="small" variant="outlined" {...props} />
}

const FindButton = (props) => {
  return (
    <IconButton size="small" {...props}>
      <ZoomInIcon fontSize="large" />
    </IconButton>
  )
}

const FindDocButton = (props) => {
  return (
    <IconButton size="small" {...props}>
      <FolderCopyIcon fontSize="large" />
    </IconButton>
  )
}

const FindButtonNoBorder = (props) => {
  return (
    <IconButton size="small">
      <ZoomInIcon fontSize="large" />
    </IconButton>
  )
}

const TabGeneral = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 container size={6}>
        <Grid2 size={12}>
          <TextField size="small" label="หมวดสินค้า" />
          <FindButton />
          <TextField size="small" label="" disabled />
          <FindDocButton />
        </Grid2>
        <Grid2 size={12}>
          <FormControl sx={{width: 195}}>
            <InputLabel id="select-unit-stock"  size="small">หน่วยนับสินค้า</InputLabel>
            <Select labelId="select-unit-stock" size="small" label="หน่วยนับสินค้า">
              <MenuItem>G</MenuItem>
            </Select>
          </FormControl>
          <FindDocButton />
          <TextField size="small" label="สถานที่เก็บสินค้า" />
        </Grid2>
        <Grid2 size={12}>
          <TextField size="small" label="Reference Code" />
        </Grid2>
        <Grid2 container size={12} border={1} padding={1} borderColor="#eee">
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
              การจัดทำสต็อกสินค้า
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value="A1"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="A1"
                control={<Radio />}
                label="จัดทำสต็อกสินค้า"
              />
              <FormControlLabel
                value="A2"
                control={<Radio />}
                label="ไม่จัดทำสต็อกสินค้า"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 container size={12} border={1} padding={1} borderColor="#eee">
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
              การคิดภาษี
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value="A1"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="A1"
                control={<Radio />}
                label="คิดภาษีมูลค่าเพิ่ม"
              />
              <FormControlLabel
                value="A2"
                control={<Radio />}
                label="ไม่คิดภาษีมูลค่าเพิ่ม"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 size={12} container>
          <TextField size="small" label="ผู้จำหน่าย" />
          <FindButton />
          <TextField size="small" label="" />
          <FindDocButton />
        </Grid2>
        <Grid2 size={12} container>
          <FormControl sx={{width: 195}}>
            <InputLabel id="select-price-sale" size="small">หน่วยซื้อ</InputLabel>
            <Select labelId="select-price-sale" label="หน่วยซื้อ" size="small">
              <MenuItem></MenuItem>
            </Select>
          </FormControl>
          <FindDocButton />
          <TextField size="small" label="มาตราส่วนต่อหน่วยนับหลัก" />
        </Grid2>
      </Grid2>
      <Grid2 size={6}>
        <Stack marginTop={1} border={1} padding={1} borderColor="#eee">
          <Stack spacing={1}>
            <Grid2 container spacing={1} size={6}>
              <TextField size="small" label="ต้นทุนมาตรฐาน" />
              <TextField size="small" label="ต้นทุนล่าสุด" />
              <TextField size="small" label="ต้นทุนเฉลี่ย" />
            </Grid2>
          </Stack>
        </Stack>
        <Stack marginTop={1} border={1} padding={1} borderColor="#eee">
          <Stack spacing={1}>
            <Grid2 container spacing={1} size={6}>
              <TextField size="small" label="ปริมาณสูงสุดในสต๊อกสินค้า" />
              <TextField size="small" label="ปริมาณต่ำสุดในสต็อกสินค้า" />
            </Grid2>
          </Stack>
        </Stack>
      </Grid2>
    </Grid2>
  )
}

export default TabGeneral
