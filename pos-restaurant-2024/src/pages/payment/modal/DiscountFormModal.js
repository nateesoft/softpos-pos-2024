import React, { useCallback, useEffect, useState } from "react"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"

import apiClient from "../../../httpRequest"

const TextFieldCustom = ({ value, setValue, disabled = false }) => (
  <TextField
    value={value}
    onChange={(e) => setValue(e.target.value)}
    onFocus={(event) => {
      event.target.select()
    }}
    disabled={disabled}
    inputProps={{ min: 0, style: { textAlign: "right" } }}
  />
)

const DiscountFormModal = ({ setOpenDiscountModal, tableFile }) => {
  console.log('DiscountFormModal load:', tableFile)
  const [posConfigSetup, setPOSConfigSetup] = useState({})
  const [fastAmt, setFastAmt] = useState(tableFile.FastDiscAmt || 0)
  const [empAmt, setEmpAmt] = useState(tableFile.EmpDiscAmt || 0)
  const [memAmt, setMemAmt] = useState(tableFile.MemDiscAmt || 0)
  const [traineeAmt, setTraineeAmt] = useState(tableFile.TrainDiscAmt || 0)
  const [cuponAmt, setCuponAmt] = useState(tableFile.SubDiscAmt || 0)

  const [bahtAmt, setBahtAmt] = useState(tableFile.DiscBath || 0)
  const [specialCuponAmt, setSpecialCuponAmt] = useState(tableFile.CuponDiscAmt || 0)

  const loadPosConfigSetup = useCallback(() => {
    apiClient
      .get(`/api/posconfigsetup`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data)
          setPOSConfigSetup(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  useEffect(() => {
    loadPosConfigSetup()
  }, [loadPosConfigSetup])

  return (
    <Grid2 container>
      <Grid2 size={12} padding={1} container justifyContent="center">
        <Typography variant="h6">ให้ส่วนลดต่างๆ ในระบบ</Typography>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_FastDiscGet === "N"}
          >
            ส่วนลดเทศกาล
          </Button>
        </Grid2>
        <Grid2 container size={4} display="flex" direction="row" justifyContent="center">
          <Typography sx={{border: "1px solid #eee", padding: "2px", background: "red", color: "white"}}>E: {posConfigSetup.P_FastDisc?.split("/")[0]}%</Typography>
          <Typography sx={{border: "1px solid #eee", padding: "2px", background: "green", color: "white"}}>T: {posConfigSetup.P_FastDisc?.split("/")[1]}%</Typography>
          <Typography sx={{border: "1px solid #eee", padding: "2px", background: "blue", color: "white"}}>D: {posConfigSetup.P_FastDisc?.split("/")[2]}%</Typography>
        </Grid2>
        <Grid2 size={4}>
          <TextFieldCustom value={fastAmt} setValue={setFastAmt} />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_EmpDiscGet === "N"}
          >
            ส่วนลดพนักงาน
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <TextField
            value={posConfigSetup.P_EmpDisc}
            disabled={posConfigSetup.P_EmpDiscGet === "N"}
          />
        </Grid2>
        <Grid2 size={4}>
          <TextFieldCustom value={empAmt} setValue={setEmpAmt} />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_MemDiscGet === "N"}
          >
            ส่วนลดสมาชิก (VIP)
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <TextField
            value={posConfigSetup.P_MemDisc}
            disabled={posConfigSetup.P_MemDiscGet === "N"}
          />
        </Grid2>
        <Grid2 size={4}>
          <TextFieldCustom value={memAmt} setValue={setMemAmt} />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_TrainDiscGet === "N"}
          >
            ส่วนลด Trainee
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <TextField
            value={posConfigSetup.P_TrainDisc}
            disabled={posConfigSetup.P_TrainDiscGet === "N"}
          />
        </Grid2>
        <Grid2 size={4}>
          <TextFieldCustom value={traineeAmt} setValue={setTraineeAmt} />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_SubDiscGet === "N"}
          >
            ส่วนลดคูปอง
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <TextField
            value={posConfigSetup.P_SubDisc}
            disabled={posConfigSetup.P_SubDiscGet === "N"}
          />
        </Grid2>
        <Grid2 size={4}>
          <TextFieldCustom value={cuponAmt} setValue={setCuponAmt} />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={posConfigSetup.P_DiscBathChk === "N"}
          >
            ส่วนลดบาท
          </Button>
        </Grid2>
        <Grid2 size={8}>
          <TextFieldCustom
            value={bahtAmt}
            setValue={setBahtAmt}
            disabled={posConfigSetup.P_DiscBathChk === "N"}
          />
        </Grid2>
      </Grid2>
      <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
        <Grid2 container size={4}>
          <Button variant="contained" color="success" fullWidth>
            ส่วนลดบัตรคูปองพิเศษ
          </Button>
        </Grid2>
        <Grid2 size={8}>
          <TextFieldCustom
            value={specialCuponAmt}
            setValue={setSpecialCuponAmt}
          />
        </Grid2>
      </Grid2>
      <Grid2
        size={12}
        spacing={1}
        padding={1}
        container
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<SaveIcon />}
          onClick={() => setOpenDiscountModal(false)}
        >
          บันทึก
        </Button>
        <Button
          variant="contained"
          color="warning"
          endIcon={<CancelIcon />}
          onClick={() => setOpenDiscountModal(false)}
        >
          ยกเลิกส่วนลด
        </Button>
        <Button
          variant="outlined"
          color="error"
          endIcon={<CloseIcon />}
          onClick={() => setOpenDiscountModal(false)}
        >
          ออก
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default DiscountFormModal
