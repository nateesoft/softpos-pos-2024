import React, { useCallback, useEffect, useRef, useState } from "react"
import { Box, Button, Grid2, Modal, TextField, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"

import apiClient from "../../../httpRequest"
import CuponListModal from './CuponListModal'

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

const DiscountFormModal = ({
  setOpenDiscountModal,
  tableFile,
  initLoad
}) => {
  console.log("DiscountFormModal load:", tableFile)

  const [openCupon, setOpenCupon] = useState(false)

  // ref
  const inputRef0 = useRef(null)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  const inputRef7 = useRef(null)

  const arrayInputRef = [
    inputRef0,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
    inputRef7
  ]
  const [posConfigSetup, setPOSConfigSetup] = useState({})
  const [fastAmt, setFastAmt] = useState(tableFile.FastDiscAmt || 0)
  const [empAmt, setEmpAmt] = useState(tableFile.EmpDiscAmt || 0)
  const [memAmt, setMemAmt] = useState(tableFile.MemDiscAmt || 0)
  const [traineeAmt, setTraineeAmt] = useState(tableFile.TrainDiscAmt || 0)
  const [cuponAmt, setCuponAmt] = useState(tableFile.SubDiscAmt || 0)

  const [bahtAmt, setBahtAmt] = useState(tableFile.DiscBath || 0)
  const [specialCuponAmt, setSpecialCuponAmt] = useState(
    tableFile.CuponDiscAmt || 0
  )

  const nextComponent = (e, index) => {
    console.log("nextComponent:", e.key)
    if (e.key === "Enter") {
      arrayInputRef[index].current?.focus()
    }
  }

  const summaryDiscount = () => {
    let netTotalAmount = tableFile.NetTotal
    let formatFast = posConfigSetup.P_FastDisc.split("/")[0]
    let formatEmp = posConfigSetup.P_EmpDisc.split("/")[0]
    let formatMem = posConfigSetup.P_MemDisc.split("/")[0]
    let formatTrain = posConfigSetup.P_TrainDisc.split("/")[0]
    let formatSub = posConfigSetup.P_SubDisc.split("/")[0]

    if (fastAmt > parseFloat(formatFast)) {
      console.log("FastAmt: Incorrect Number!!!")
      return
    }
    if (empAmt > parseFloat(formatEmp)) {
      console.log("EmpAmt: Incorrect Number!!!")
      return
    }
    if (memAmt > parseFloat(formatMem)) {
      console.log("MemAmt: Incorrect Number!!!")
      return
    }
    if (traineeAmt > parseFloat(formatTrain)) {
      console.log("TraineeAmt: Incorrect Number!!!")
      return
    }
    if (cuponAmt > parseFloat(formatSub)) {
      console.log("CuponAmt: Incorrect Number!!!")
      return
    }
    netTotalAmount -= (netTotalAmount * fastAmt) / 100
    netTotalAmount -= (netTotalAmount * empAmt) / 100
    netTotalAmount -= (netTotalAmount * memAmt) / 100
    netTotalAmount -= (netTotalAmount * traineeAmt) / 100
    netTotalAmount -= (netTotalAmount * cuponAmt) / 100
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

  const updateDiscountInfo = () => {
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
      SubDisc: posConfigSetup.P_SubDisc,
      SubDiscAmt: cuponAmt,
      DiscBath: bahtAmt,
      SpaDiscAmt: specialCuponAmt
    }
    console.log("updPayload:", updPayload)
    apiClient
      .put(`/api/tablefile/discountInfo/${tableFile.Tcode}`, updPayload)
      .then((response) => {
        if (response.status === 200) {
          initLoad()
          setOpenDiscountModal(false)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const festDiscountCompute = () => {
    let formatFast = posConfigSetup.P_FastDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_FastDiscChk.split("/")[0]

    let sumDisc = empAmt + memAmt + traineeAmt + cuponAmt
    if (sumDisc > 0 && formatYYY === "Y") {
      return 0
    }
    let netTotal = tableFile.TAmount
    let totalAmount = (netTotal * formatFast) / 100
    setFastAmt(totalAmount)

    focusComponent(0)
  }

  const handleFestManual = (value) => {
    let formatFast = posConfigSetup.P_FastDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_FastDiscChk.split("/")[0]
    if (posConfigSetup.P_FastDiscGet === "Y" && formatYYY === "Y") {
      let sumDisc = empAmt + memAmt + traineeAmt + cuponAmt
      if (sumDisc > 0) {
        return 0
      }
      let totalAmount = (tableFile.TAmount * formatFast) / 100
      if (value < 0 || value > totalAmount) {
        setFastAmt(totalAmount)
      } else {
        setFastAmt(value)
      }
    }
  }

  const empDiscountCompute = () => {
    let formatEmp = posConfigSetup.P_EmpDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_EmpDiscChk.split("/")[0]

    let sumDisc = fastAmt + memAmt + traineeAmt + cuponAmt
    if (sumDisc > 0 && formatYYY === "Y") {
      return 0
    }
    let netTotal = tableFile.TAmount
    let totalAmount = (netTotal * formatEmp) / 100
    setEmpAmt(totalAmount)

    focusComponent(1)
  }

  const handleEmpManual = (value) => {
    let formatEmp = posConfigSetup.P_EmpDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_EmpDiscChk.split("/")[0]
    if (posConfigSetup.P_EmpDiscGet === "Y" && formatYYY === "Y") {
      let sumDisc = fastAmt + memAmt + traineeAmt + cuponAmt
      if (sumDisc > 0) {
        return 0
      }
      let totalAmount = (tableFile.TAmount * formatEmp) / 100
      if (value < 0 || value > totalAmount) {
        setEmpAmt(totalAmount)
      } else {
        setEmpAmt(value)
      }
    }
  }

  const memeberDiscountCompute = () => {
    let formatMem = posConfigSetup.P_MemDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_MemDiscChk.split("/")[0]
    let sumDisc = fastAmt + empAmt + traineeAmt + cuponAmt
    if (sumDisc > 0&&formatYYY==="Y") {
      return 0
    }
    let netTotal = tableFile.TAmount
    let totalAmount = (netTotal * formatMem) / 100
    setMemAmt(totalAmount)

    focusComponent(2)
  }

  const handleMemManual = (value) => {
    let formatMem = posConfigSetup.P_MemDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_MemDiscChk.split("/")[0]
    if (posConfigSetup.P_MemDiscGet === "Y" && formatYYY === "Y") {
      let sumDisc = fastAmt + empAmt + traineeAmt + cuponAmt
      if (sumDisc > 0) {
        return 0
      }
      let totalAmount = (tableFile.TAmount * formatMem) / 100
      if (value < 0 || value > totalAmount) {
        setMemAmt(totalAmount)
      } else {
        setMemAmt(value)
      }
    }
  }

  const traineeDiscountCompute = () => {
    let formatTrain = posConfigSetup.P_TrainDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_TrainDiscChk.split("/")[0]

    let sumDisc = fastAmt + empAmt + memAmt + cuponAmt
    if (sumDisc > 0&&formatYYY==="Y") {
      return 0
    }
    let netTotal = tableFile.TAmount
    let totalAmount = (netTotal * formatTrain) / 100
    setTraineeAmt(totalAmount)

    focusComponent(3)
  }

  const handleTraineeManual = (value) => {
    let formatTrain = posConfigSetup.P_TrainDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_TrainDiscChk.split("/")[0]
    if (posConfigSetup.P_TrainDiscGet === "Y" && formatYYY === "Y") {
      let sumDisc = fastAmt + empAmt + memAmt + cuponAmt
      if (sumDisc > 0) {
        return 0
      }
      let totalAmount = (tableFile.TAmount * formatTrain) / 100
      if (value < 0 || value > totalAmount) {
        setTraineeAmt(totalAmount)
      } else {
        setTraineeAmt(value)
      }
    }
  }

  const cuponDiscountCompute = () => {
    let formatSub = posConfigSetup.P_SubDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_SubDiscChk.split("/")[0]

    let sumDisc = fastAmt + empAmt + memAmt + traineeAmt
    if (sumDisc > 0&&formatYYY==="Y") {
      return 0
    }
    let netTotal = tableFile.TAmount
    let totalAmount = (netTotal * formatSub) / 100
    setCuponAmt(totalAmount)

    focusComponent(4)
  }

  const handleCuponManual = (value) => {
    let formatSub = posConfigSetup.P_SubDisc.split("/")[0]
    let formatYYY = posConfigSetup.P_SubDiscChk.split("/")[0]
    if (posConfigSetup.P_SubDiscGet === "Y" && formatYYY === "Y") {
      let sumDisc = fastAmt + empAmt + memAmt + traineeAmt
      if (sumDisc > 0) {
        return 0
      }
      let totalAmount = (tableFile.TAmount * formatSub) / 100
      if (value < 0 || value > totalAmount) {
        setCuponAmt(totalAmount)
      } else {
        setCuponAmt(value)
      }
    }
  }

  useEffect(() => {
    loadPosConfigSetup()
  }, [])

  return (
    <Grid2 container>
      <Grid2 size={12} padding={1} container justifyContent="center">
        <Typography variant="h6">ให้ส่วนลดต่างๆ ในระบบ</Typography>
      </Grid2>
      <Grid2 container justifyContent="center">
        <Typography>
          มูลค่าสินค้ารวม (Total Amount): {tableFile.TAmount}
        </Typography>
      </Grid2>
      <Box component="form">
        <Grid2
          size={12}
          spacing={1}
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={festDiscountCompute}
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
              type="number"
              inputRef={inputRef0}
              value={fastAmt}
              setValue={setFastAmt}
              onChange={(e) => handleFestManual(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 1)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={empDiscountCompute}
            >
              ส่วนลดพนักงาน
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              value={posConfigSetup.P_EmpDisc}
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef1}
              value={empAmt}
              setValue={setEmpAmt}
              disabled={posConfigSetup.P_EmpDiscGet === "N"}
              onChange={(e) => handleEmpManual(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 2)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={memeberDiscountCompute}
            >
              ส่วนลดสมาชิก (VIP)
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              value={posConfigSetup.P_MemDisc}
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef2}
              value={memAmt}
              setValue={setMemAmt}
              disabled={posConfigSetup.P_MemDiscGet === "N"}
              onChange={(e) => handleMemManual(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 3)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={traineeDiscountCompute}
            >
              ส่วนลด Trainee
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              value={posConfigSetup.P_TrainDisc}
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef3}
              value={traineeAmt}
              setValue={setTraineeAmt}
              disabled={posConfigSetup.P_TrainDiscGet === "N"}
              onChange={(e) => handleTraineeManual(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 4)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={cuponDiscountCompute}
            >
              ส่วนลดคูปอง
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              value={posConfigSetup.P_SubDisc}
              disabled={true}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef4}
              value={cuponAmt}
              setValue={setCuponAmt}
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              onChange={(e) => handleCuponManual(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 5)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              disabled={posConfigSetup.P_DiscBathChk === "N"}
              onClick={() => focusComponent(5)}
            >
              ส่วนลดบาท
            </Button>
          </Grid2>
          <Grid2 size={8}>
            <TextField
              type="number"
              inputRef={inputRef5}
              value={bahtAmt}
              setValue={setBahtAmt}
              disabled={posConfigSetup.P_DiscBathChk === "N"}
              onChange={(e) => setBahtAmt(e.target.value)}
              onKeyDown={(e) => nextComponent(e, 6)}
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
          margin={1}
          container
          justifyContent="center"
        >
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onKeyDown={(e) => nextComponent(e)}
              onClick={()=>setOpenCupon(true)}
            >
              ส่วนลดบัตรคูปองพิเศษ
            </Button>
          </Grid2>
          <Grid2 size={8}>
            <TextField
              type="number"
              inputRef={inputRef6}
              value={specialCuponAmt}
              setValue={setSpecialCuponAmt}
              disabled={true}
              onChange={(e) => setSpecialCuponAmt(e.target.value)}
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
            onClick={updateDiscountInfo}
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
      <Modal open={openCupon} onClose={() => setOpenCupon(false)}>
        <Box sx={{ ...modalStyle, width: "auto", padding: "10px" }}>
          <CuponListModal 
            onClose={() => setOpenCupon(false)} 
            setSpecialCuponAmt={setSpecialCuponAmt}
            tableFile={tableFile} />
        </Box>
      </Modal>
    </Grid2>
  )
}

export default DiscountFormModal
