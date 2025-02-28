import React, { useCallback, useEffect, useRef, useState } from "react"
import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"

import apiClient from "../../../httpRequest"

const DiscountFormModal = ({ setOpenDiscountModal, tableFile }) => {
  console.log('DiscountFormModal load:', tableFile)

  // ref
  const inputRef0 = useRef(null)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  const inputRef7 = useRef(null)

  const arrayInputRef = [inputRef0, inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6, inputRef7]

  const [netTotalBalance, setNetTotalBalance] = useState(tableFile.NetTotal)

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

  const summaryDiscount = () => {
    let netTotalAmount = tableFile.NetTotal
    let formatFast = posConfigSetup.P_FastDisc.split('/')[0]
    let formatEmp = posConfigSetup.P_EmpDisc.split('/')[0]
    let formatMem = posConfigSetup.P_MemDisc.split('/')[0]
    let formatTrain = posConfigSetup.P_TrainDisc.split('/')[0]
    let formatSub = posConfigSetup.P_SubDisc.split('/')[0]

    if(fastAmt > parseFloat(formatFast)){
      console.log('FastAmt: Incorrect Number!!!')
      return;
    }
    if(empAmt > parseFloat(formatEmp)){
      console.log('EmpAmt: Incorrect Number!!!')
      return;
    }
    if(memAmt > parseFloat(formatMem)){
      console.log('MemAmt: Incorrect Number!!!')
      return;
    }
    if(traineeAmt > parseFloat(formatTrain)){
      console.log('TraineeAmt: Incorrect Number!!!')
      return;
    }
    if(cuponAmt > parseFloat(formatSub)){
      console.log('CuponAmt: Incorrect Number!!!')
      return;
    }
    netTotalAmount -= netTotalAmount * fastAmt / 100
    netTotalAmount -= netTotalAmount * empAmt / 100
    netTotalAmount -= netTotalAmount * memAmt / 100
    netTotalAmount -= netTotalAmount * traineeAmt / 100
    netTotalAmount -= netTotalAmount * cuponAmt / 100
    netTotalAmount -= bahtAmt
    netTotalAmount -= specialCuponAmt

    console.log(netTotalAmount)
  }

  const focusComponent = (index) => {
    arrayInputRef[index].current?.focus()
  }

  const handleClearAllDiscount = () => {
    setFastAmt(0)
    setEmpAmt(0)
    setMemAmt(0)
    setTraineeAmt(0)
    setCuponAmt(0)
    setBahtAmt(0)
    setSpecialCuponAmt(0)

    arrayInputRef[0].current?.focus()
    // setOpenDiscountModal(false)
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

  const updateDiscountInfo = useCallback(() => {
    const updPayload = {
      tableFile: tableFile,
      FastDisc: posConfigSetup.P_FastDisc,
      FastDiscAmt: fastAmt,
      EmpDisc: posConfigSetup.P_EmpDisc,
      EmpDiscAmt: empAmt,
      MemDisc: posConfigSetup.P_MemDisc,
      MemDiscAmt: memAmt,
      TrainDisc: posConfigSetup.P_TrainDisc,
      TrainDiscAmt: traineeAmt,
      CuponDiscAmt: cuponAmt,
      DiscBath: bahtAmt,
      SpaDiscAmt: specialCuponAmt
    }
    console.log('updPayload:', updPayload)
    apiClient
      .put(`/api/tablefile/discountInfo/${tableFile.Tcode}`, updPayload)
      .then((response) => {
        if (response.status === 200) {
          setOpenDiscountModal(false)
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
              onClick={()=>focusComponent(0)}
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
            <TextField 
              inputRef={inputRef0}
              value={fastAmt} 
              setValue={setFastAmt} 
              disabled={posConfigSetup.P_FastDiscGet === "N"}
              onChange={e=>setFastAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 1)}
              onKeyUp={summaryDiscount}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              disabled={posConfigSetup.P_EmpDiscGet === "N"}
              onClick={()=>focusComponent(1)}
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
            <TextField 
              inputRef={inputRef1}
              value={empAmt} 
              setValue={setEmpAmt} 
              disabled={posConfigSetup.P_EmpDiscGet === "N"}
              onChange={e=>setEmpAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 2)}
              onKeyUp={summaryDiscount}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
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
              onClick={()=>focusComponent(2)}
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
            <TextField 
              inputRef={inputRef2} 
              value={memAmt} 
              setValue={setMemAmt} 
              disabled={posConfigSetup.P_MemDiscGet === "N"} 
              onChange={e=>setMemAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 3)} 
              onKeyUp={summaryDiscount} 
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              disabled={posConfigSetup.P_TrainDiscGet === "N"}
              onClick={()=>focusComponent(3)}
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
            <TextField 
              inputRef={inputRef3}
              value={traineeAmt} 
              setValue={setTraineeAmt} 
              disabled={posConfigSetup.P_TrainDiscGet === "N"} 
              onChange={e=>setTraineeAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 4)} 
              onKeyUp={summaryDiscount} 
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              onClick={()=>focusComponent(4)}>
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
            <TextField 
              inputRef={inputRef4} 
              value={cuponAmt} 
              setValue={setCuponAmt} 
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              onChange={e=>setCuponAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 5)} 
              onKeyUp={summaryDiscount} 
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              disabled={posConfigSetup.P_DiscBathChk === "N"}
              onClick={()=>focusComponent(5)}
            >
              ส่วนลดบาท
            </Button>
          </Grid2>
          <Grid2 size={8}>
            <TextField
              inputRef={inputRef5}
              value={bahtAmt}
              setValue={setBahtAmt}
              disabled={posConfigSetup.P_DiscBathChk === "N"}
              onChange={e=>setBahtAmt(e.target.value)}
              onKeyDown={e=>nextComponent(e, 6)} 
              onKeyUp={summaryDiscount} 
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} spacing={1} margin={1} container justifyContent="center">
          <Grid2 container size={4}>
            <Button variant="contained" color="success" fullWidth onKeyDown={e=>nextComponent(e)} onClick={()=>focusComponent(6)}>
              ส่วนลดบัตรคูปองพิเศษ
            </Button>
          </Grid2>
          <Grid2 size={8}>
            <TextField
              inputRef={inputRef6}
              value={specialCuponAmt}
              setValue={setSpecialCuponAmt}
              onChange={e=>setSpecialCuponAmt(e.target.value)} 
              onKeyUp={summaryDiscount} 
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
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
            onClick={() => updateDiscountInfo()}
          >
            บันทึก
          </Button>
          <Button
            variant="contained"
            color="warning"
            endIcon={<CancelIcon />}
            onClick={handleClearAllDiscount}
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
