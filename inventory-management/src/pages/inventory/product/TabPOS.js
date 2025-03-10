import React from "react"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import ZoomInIcon from "@mui/icons-material/ZoomIn"

const TabPOS = () => {
  return (
    <Grid2 container direction="row">
      <Grid2 size={6}>
        <Stack>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              การคิดค่าบริการ (Service Charge)
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="คิดค่าบริการ"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="ไม่คิดค่าบริการ"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              การให้ส่วนลด (Discount)
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="สามารถให้ส่วนลดได้"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="ไม่สามารถให้ส่วนลดได้"
              />
            </RadioGroup>
          </FormControl>
          <Grid2 container spacing={1}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                (กำหนดราคาขาย Promotion)
              </FormLabel>
              <Grid2
                spacing={1}
                container
                justifyContent="flex-start"
                alignItems="center"
                direction="row"
              >
                <Typography>1</Typography>
                <TextField size="small" />
                <ZoomInIcon />
                <TextField size="small" variant="filled" disabled />
              </Grid2>
            </FormControl>
            <FormControl>
              <Grid2
                spacing={1}
                container
                justifyContent="flex-start"
                alignItems="center"
                direction="row"
              >
                <Typography>2</Typography>
                <TextField size="small" />
                <ZoomInIcon />
                <TextField size="small" variant="filled" disabled />
              </Grid2>
            </FormControl>
            <FormControl>
              <Grid2
                spacing={1}
                container
                justifyContent="flex-start"
                alignItems="center"
                direction="row"
              >
                <Typography>3</Typography>
                <TextField size="small" />
                <ZoomInIcon />
                <TextField size="small" variant="filled" disabled />
              </Grid2>
            </FormControl>
          </Grid2>
          <FormControl sx={{ marginTop: "5px" }}>
            <Typography>พิมพ์ส่งข้อมูล (สำหรับ POS)</Typography>
            <Select size="small">
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              การคิดค่าบริการ (Service Charge)
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Drink"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="First Course"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Second Course"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Third Course"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Grid2>
      <Grid2 size={6}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            ข้อความพิเศษ
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="แสดงข้อความพิเศษ"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="ไม่แสดงข้อความพิเศษ"
            />
          </RadioGroup>
        </FormControl>
      </Grid2>
    </Grid2>
  )
}

export default TabPOS
