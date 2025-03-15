import React from "react"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import { Box, Button, Grid2, Modal, TextField } from "@mui/material"
import CancelItem from "@mui/icons-material/Cancel"
import AddItem from "@mui/icons-material/AddCircleOutline"

import RadioButtonsGroup from "../optional-modal/RadioButtonGroup"
import CheckboxLabels from "../optional-modal/CheckboxLabels"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  textAlign: "center",
  minWidth: "380px",
  height: "600px",
  padding: "10px"
}

const MenuDetailModal = ({ openOptional, setOpenOptional }) => {

  const handleConfirm = () => {
    setOpenOptional(false)
  }

  const handleCancel = () => {
    setOpenOptional(false)
  }

  return (
    <Modal open={openOptional} onClose={() => setOpenOptional(false)}>
      <Box sx={{ ...modalStyle, overflow: "auto" }}>
        <Grid2 container direction="column">
          <Box>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              width="auto"
              height={250}
              alt=""
            />
          </Box>
          <Box>
            <Typography fontSize={20} fontWeight={500}>
              ++ กะเพราหมูสับ ++
            </Typography>
          </Box>
          <Divider />
          <Box padding={1}>
            <RadioButtonsGroup
              title="เพิ่มเติม"
              subTitle="(ต้องเลือก 1 รายการ)"
              required={true}
              items={[
                { id: 1, value: "1", label: "ไข่ดาว" },
                { id: 2, value: "2", label: "ไข่เจียว" },
                { id: 3, value: "3", label: "ไข่ต้ม" }
              ]}
            />
          </Box>
          <Divider />
          <Box padding={1}>
            <RadioButtonsGroup
              title="ทานเสริมจากเมนูหลัก"
              subTitle="(เลือกได้ 1 รายการ)"
              required={false}
              items={[
                { id: 1, value: "1", label: "ไข่ดาว" },
                { id: 2, value: "2", label: "ไข่เจียว" },
                { id: 3, value: "3", label: "ไข่ต้ม" }
              ]}
            />
          </Box>
          <Divider />
          <Box padding={1}>
            <CheckboxLabels
              title="ข้อความพิเศษ"
              subTitle="(เลือกเพิ่มได้มากกว่า 1 รายการ)"
              items={[
                { id: 1, value: "1", label: "ไข่ดาว" },
                { id: 2, value: "2", label: "ไข่เจียว" },
                { id: 3, value: "3", label: "ไข่ต้ม" }
              ]}
            />
          </Box>
          <Divider />
          <Box padding={1}>
            <CheckboxLabels
              title="คิดราคาเพิ่ม"
              subTitle="(เลือกได้มากกว่า 1 รายการ)"
              items={[
                { id: 1, value: "1", label: "ไข่ดาว", price: 0 },
                { id: 2, value: "2", label: "ไข่เจียว", price: 15 },
                { id: 3, value: "3", label: "ไข่ต้ม", price: 20 }
              ]}
            />
          </Box>
          <Divider />
          <Box padding={1}>
            <CheckboxLabels
              title="ไม่คิดราคาเพิ่ม"
              subTitle="(เลือกเพิ่มได้มากกว่า 1 รายการ)"
              items={[
                { id: 1, value: "1", label: "ไข่ดาว" },
                { id: 2, value: "2", label: "ไข่เจียว" },
                { id: 3, value: "3", label: "ไข่ต้ม" }
              ]}
            />
          </Box>
          <Divider />
          <Box padding={1}>
            <Typography>ข้อความพิเศษ (บางรายการอาจเพิ่มราคา)</Typography>
            <TextField multiline rows={3} fullWidth />
          </Box>
          <Grid2 container padding={1} spacing={1} justifyContent="center">
            <Button
              variant="outlined"
              color="error"
              onClick={handleCancel}
              startIcon={<CancelItem />}
            >
              ยกเลิก
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleConfirm}
              startIcon={<AddItem fontSize="large" />}
            >
              ยืนยันรายการ
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  )
}

export default MenuDetailModal
