import React from "react"
import {
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

const TabGeneral = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 container size={6}>
        <Grid2 size={12}>
          <TextField size="small" label="หมวดสินค้า" />
          <FindButton />
          <TextField size="small" label="" />
          <FindDocButton />
        </Grid2>
        <Grid2 container size={12} spacing={1}>
          <FormControl sx={{width: 195}}>
            <InputLabel id="select-unit-stock" size="small">
              หน่วยนับหลัก
            </InputLabel>
            <Select labelId="select-unit-stock" label="หน่วยนับหลัก" size="small">
              <MenuItem>00</MenuItem>
            </Select>
          </FormControl>
          <FindDocButton />
          <TextField size="small" label="สถานที่เก็บสินค้า" />
          <TextField size="small" label="Reference Code" />
        </Grid2>
        <Grid2 container size={12} border={1} padding={1} borderColor="#eee">
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
              ประเภทสินค้า
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
                label="อาหาร (Food)"
              />
              <FormControlLabel
                value="A2"
                control={<Radio />}
                label="เครื่องดื่ม (Drink)"
              />
              <FormControlLabel
                value="A3"
                control={<Radio />}
                label="สินค้า (Product)"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 container size={12} border={1} padding={1} borderColor="#eee">
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
              สถานะสินค้า
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value="A1"
              name="radio-buttons-group"
            >
              <FormControlLabel value="A1" control={<Radio />} label="Normal" />
              <FormControlLabel
                value="A2"
                control={<Radio />}
                label="Consign"
              />
              <FormControlLabel
                value="A3"
                control={<Radio />}
                label="Special"
              />
            </RadioGroup>
          </FormControl>
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
            <InputLabel id="select-unit-sale" size="small">
              หน่วยซื้อ
            </InputLabel>
            <Select labelId="select-unit-sale" label="หน่วยซื้อ" size="small">
              <MenuItem></MenuItem>
            </Select>
          </FormControl>
          <FindDocButton />
          <TextField size="small" label="มาตราส่วนต่อหน่วยนับหลัก" />
        </Grid2>
        <Grid2 size={12} container>
          <FormControl fullWidth>
            <FormLabel id="demo-radio-buttons-group-label">
              เป็นสินค้าชุดหรือสินค้าที่มีส่วนประกอบหรือไม่(Yes/No)
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value="A1"
              name="radio-buttons-group"
            >
              <FormControlLabel value="A1" control={<Radio />} label="Yes" />
              <FormControlLabel value="A2" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 size={6}>
        <Stack spacing={1} direction="row" border={1} padding={1} borderColor="#eee">
          <Grid2 size={6}>
            <Grid2 container spacing={1}>
              <TextField size="small" label="ราคาขาย/หน่วย (1)" />
              <TextField size="small" label="ราคาขาย/หน่วย (2)" />
              <TextField size="small" label="ราคาขาย/หน่วย (3)" />
              <TextField size="small" label="ราคาขาย/หน่วย (4)" />
              <TextField size="small" label="ราคาขาย/หน่วย (5)" />
            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                การคิดราคาขาย
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value="A1"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="A1"
                  control={<Radio />}
                  label="อัตโนมัติ (PLU)"
                />
                <FormControlLabel
                  value="A2"
                  control={<Radio />}
                  label="กำหนดเองตามป้าย (SDP)"
                />
                <FormControlLabel
                  value="A3"
                  control={<Radio />}
                  label="คำนวณตามเวลา"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
        </Stack>
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
      <Grid2 size={12} container>
        <Grid2 container size={6} border={1} padding={1} borderColor="#ccc">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value="A1"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="A1"
                control={<Radio />}
                label="ตัดสต็อกตามคลังหลัก"
              />
              <FormControlLabel
                value="A2"
                control={<Radio />}
                label="ตัดสต็อกตาม POS หรือโต๊ะ"
              />
              <FormControlLabel
                value="A3"
                control={<Radio />}
                label="ตัดสต็อกคลังสินค้าย่อย"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 size={6}>
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"
              label=""
              inputProps={{
                style: {
                  width: 80
                }
              }}
            />
            <TextField
              size="small"
              label="A1"
              inputProps={{
                style: {
                  width: 80
                }
              }}
            />
            <TextField size="small" label="คลังสินค้าหน้าร้าน" />
          </Stack>
          <Stack direction="row" spacing={1} marginTop={1}>
            <TextField
              size="small"
              label=""
              inputProps={{
                style: {
                  width: 80
                }
              }}
            />
            <TextField
              size="small"
              label="A1"
              inputProps={{
                style: {
                  width: 80
                }
              }}
            />
            <FindButton />
            <TextField size="small" label="คลังสินค้าหน้าร้าน" />
          </Stack>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default TabGeneral
