import React, { useCallback, useEffect, useRef, useState } from "react"
import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"

import apiClient from "../../../httpRequest"

const TextFieldCustom = ({ inputRef, value, setValue, disabled = false, onKeyDown }) => (
  <TextField
    inputRef={inputRef}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    onFocus={(event) => {
      event.target.select()
    }}
    disabled={disabled}
    inputProps={{ min: 0, style: { textAlign: "right" } }}
    onKeyDown={onKeyDown}
  />
)

const DiscountFormModal = ({ setOpenDiscountModal, tableFile }) => {
  console.log('DiscountFormModal load:', tableFile)

  // ref
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  const inputRef7 = useRef(null)

  const arrayInputRef = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6, inputRef7]

  const [posConfigSetup, setPOSConfigSetup] = useState({})
  const [fastAmt, setFastAmt] = useState(tableFile.FastDiscAmt || 0)
  const [empAmt, setEmpAmt] = useState(tableFile.EmpDiscAmt || 0)
  const [memAmt, setMemAmt] = useState(tableFile.MemDiscAmt || 0)
  const [traineeAmt, setTraineeAmt] = useState(tableFile.TrainDiscAmt || 0)
  const [cuponAmt, setCuponAmt] = useState(tableFile.SubDiscAmt || 0)

  const [bahtAmt, setBahtAmt] = useState(tableFile.DiscBath || 0)
  const [specialCuponAmt, setSpecialCuponAmt] = useState(tableFile.CuponDiscAmt || 0)

  const nextComponent = (e, index) => {
    console.log('nextComponent:', e.key)
    if(e.key === "Enter"){
      arrayInputRef[index].current?.focus()
    }
  }

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
      <Box component="form">
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
          <Grid2 container size={4}>
            <TextField
                value={posConfigSetup.P_FastDisc}
                disabled={true}
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
          </Grid2>
          <Grid2 size={4}>
            <TextFieldCustom 
              value={fastAmt} 
              setValue={setFastAmt} 
              disabled={posConfigSetup.P_FastDiscGet === "N"} 
              onKeyDown={e=>nextComponent(e, 0)} />
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
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }} />
          </Grid2>
          <Grid2 size={4}>
            <TextFieldCustom 
              inputRef={inputRef1}
              value={empAmt} 
              setValue={setEmpAmt} 
              disabled={posConfigSetup.P_EmpDiscGet === "N"}
              onKeyDown={e=>nextComponent(e, 1)}
            />
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
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }} />
          </Grid2>
          <Grid2 size={4}>
            <TextFieldCustom 
              inputRef={inputRef2} 
              value={memAmt} 
              setValue={setMemAmt} 
              disabled={posConfigSetup.P_MemDiscGet === "N"} 
              onKeyDown={e=>nextComponent(e, 2)} />
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
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }} />
          </Grid2>
          <Grid2 size={4}>
            <TextFieldCustom 
              inputRef={inputRef3}
              value={traineeAmt} 
              setValue={setTraineeAmt} 
              disabled={posConfigSetup.P_TrainDiscGet === "N"} 
              onKeyDown={e=>nextComponent(e, 3)} />
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
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }} />
          </Grid2>
          <Grid2 size={4}>
            <TextFieldCustom 
              inputRef={inputRef4} 
              value={cuponAmt} 
              setValue={setCuponAmt} 
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              onKeyDown={e=>nextComponent(e, 4)} />
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
              inputRef={inputRef5}
              value={bahtAmt}
              setValue={setBahtAmt}
              disabled={posConfigSetup.P_DiscBathChk === "N"}
              onKeyDown={e=>nextComponent(e, 5)}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button variant="contained" color="success" fullWidth onKeyDown={e=>nextComponent(e)}>
              ส่วนลดบัตรคูปองพิเศษ
            </Button>
          </Grid2>
          <Grid2 size={8}>
            <TextFieldCustom
              inputRef={inputRef6}
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
      </Box>
    </Grid2>
  )
}

export default DiscountFormModal
