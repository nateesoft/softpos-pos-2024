import React, { useCallback, useEffect, useRef, useState } from "react"
import { Box, Button, Grid2, Modal, TextField, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"
import CalculateIcon from '@mui/icons-material/Calculate';

import apiClient from "../../../httpRequest"
import CuponListModal from './CuponListModal'
import MaskedInput from "./MaskedInput"
import NumberFormat from '../../ui-utils/NumberFormat'

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
  setSpecialCuponInfo,
  tableFile,
  initLoad,
  orderList
}) => {
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

  // set config
  const [fastDisc, setFastDisc] = useState("")
  const [empDisc, setEmpDisc] = useState("")
  const [memDisc, setMemDisc] = useState("")
  const [trainDisc, setTrainDisc] = useState("")
  const [subDisc, setSubDisc] = useState("")

  const [bahtAmt, setBahtAmt] = useState(tableFile.DiscBath || 0)
  const [specialCuponAmt, setSpecialCuponAmt] = useState(
    tableFile.CuponDiscAmt || 0
  )
  const [PrCuCode, setPrCuCode] = useState(0)
  const [PrCuDisc, setPrCuDisc] = useState(0)
  const [PrCuBath, setPrCuBath] = useState(0)

  const nextComponent = (e, index) => {
    if (e.key === "Enter") {
      arrayInputRef[index].current?.focus()
    }
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

    // clear format
    setFastDisc(posConfigSetup.P_FastDisc)
    setEmpDisc(posConfigSetup.P_EmpDisc)
    setMemDisc(posConfigSetup.P_MemDisc)
    setTrainDisc(posConfigSetup.P_TrainDisc)
    setSubDisc(posConfigSetup.P_SubDisc)

    arrayInputRef[0].current?.focus()
  }

  const loadPosConfigSetup = useCallback(() => {
    apiClient
      .get(`/api/posconfigsetup`)
      .then((response) => {
        if (response.status === 200) {
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
      FastDisc: fastDisc,
      FastDiscAmt: fastAmt,
      EmpDisc: empDisc,
      EmpDiscAmt: empAmt,
      MemDisc: memDisc,
      MemDiscAmt: memAmt,
      TrainDisc: trainDisc,
      TrainDiscAmt: traineeAmt,
      SubDisc: subDisc,
      SubDiscAmt: cuponAmt,
      DiscBath: bahtAmt,
      CuponDiscAmt: specialCuponAmt,
      PrCuCode,
      PrCuDisc,
      PrCuBath
    }

    const validDiscount = fastAmt + empAmt + memAmt + traineeAmt + cuponAmt + bahtAmt + specialCuponAmt
    if(validDiscount > (tableFile.TAmount - tableFile.ItemDiscAmt)) {
      alert("ยอดส่วนลดเกินยอดชำระ !!!")
      return;
    }
    
    apiClient
      .put(`/api/tablefile/discountInfo/${tableFile.Tcode}`, updPayload)
      .then((response) => {
        if (response.status === 200) {
          setSpecialCuponInfo({
            CuponDiscAmt: specialCuponAmt,
            PrCuCode,
            PrCuDisc,
            PrCuBath
          })
          initLoad()
          setOpenDiscountModal(false)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const getNetTotalFood = () => {
    const netTotalFood = orderList.reduce((netTotal, b) => {
      if(b.R_Discount === 'Y' && b.R_QuanCanDisc > 0 && b.R_Type === '1') {
        return netTotal + b.R_Total
      } else {
        return 0
      }
    }, 0)
    return netTotalFood
  }
  const getNetTotalDrink = () => {
    const netTotalDrink = orderList.reduce((netTotal, b) => {
      if(b.R_Discount === 'Y' && b.R_QuanCanDisc > 0 && b.R_Type === '2') {
        return netTotal + b.R_Total
      } else {
        return 0
      }
    }, 0)
    return netTotalDrink
  }
  const getNetTotalProduct = () => {
    const netTotalProduct = orderList.reduce((netTotal, b) => {
      if(b.R_Discount === 'Y' && b.R_QuanCanDisc > 0 && b.R_Type === '3') {
        return netTotal + b.R_Total
      } else {
        return 0
      }
    }, 0)
    return netTotalProduct
  }

  const festDiscountCompute = () => {
    let netTotalFood = getNetTotalFood()
    let netTotalDrink = getNetTotalDrink()
    let netTotalProduct = getNetTotalProduct()

    let totalAmountFood = 0
    let totalAmountDrink = 0
    let totalAmountProduct = 0

    let summaryOtherDiscount = empAmt + memAmt + traineeAmt + cuponAmt

    // FOOD DISCOUNT
    let formatFastFood = fastDisc.split("/")[0]
    let formatYYYFood = posConfigSetup.P_FastDiscChk.split("/")[0]
    if (summaryOtherDiscount > 0 && formatYYYFood === "Y") {
      return 0
    }
    totalAmountFood = (netTotalFood * formatFastFood) / 100

    // DRINK DISCOUNT
    let formatFastDrink = fastDisc.split("/")[1]
    let formatYYYDrink = posConfigSetup.P_FastDiscChk.split("/")[1]
    if (summaryOtherDiscount > 0 && formatYYYDrink === "Y") {
      return 0
    }
    totalAmountDrink = (netTotalDrink * formatFastDrink) / 100

    // PRODUCT DISCOUNT
    let formatFastProduct = fastDisc.split("/")[2]
    let formatYYYProduct = posConfigSetup.P_FastDiscChk.split("/")[2]
    if (summaryOtherDiscount > 0 && formatYYYProduct === "Y") {
      return 0
    }
    totalAmountProduct = (netTotalProduct * formatFastProduct) / 100

    let totalAmount = totalAmountFood + totalAmountDrink + totalAmountProduct
    setFastAmt(totalAmount)
    focusComponent(0)
  }

  const empDiscountCompute = () => {
    let netTotalFood = getNetTotalFood()
    let netTotalDrink = getNetTotalDrink()
    let netTotalProduct = getNetTotalProduct()

    let totalAmountFood = 0
    let totalAmountDrink = 0
    let totalAmountProduct = 0

    let summaryOtherDiscount = fastAmt + memAmt + traineeAmt + cuponAmt
    
    // FOOD DISCOUNT
    let formatEmpFood = empDisc.split("/")[0]
    let formatYYYFood = posConfigSetup.P_EmpDiscChk.split("/")[0]
    if (summaryOtherDiscount > 0 && formatYYYFood === "Y") {
      return 0
    }
    totalAmountFood = (netTotalFood * formatEmpFood) / 100

    // DRINK DISCOUNT
    let formatEmpDrink = empDisc.split("/")[1]
    let formatYYYDrink = posConfigSetup.P_EmpDiscChk.split("/")[1]
    if (summaryOtherDiscount > 0 && formatYYYDrink === "Y") {
      return 0
    }
    totalAmountDrink = (netTotalDrink * formatEmpDrink) / 100

    // PRODUCT DISCOUNT
    let formatEmpProduct = empDisc.split("/")[2]
    let formatYYYProduct = posConfigSetup.P_EmpDiscChk.split("/")[2]
    if (summaryOtherDiscount > 0 && formatYYYProduct === "Y") {
      return 0
    }
    totalAmountProduct = (netTotalProduct * formatEmpProduct) / 100

    let totalAmount = totalAmountFood + totalAmountDrink + totalAmountProduct
    setEmpAmt(totalAmount)
    focusComponent(1)
  }

  const memeberDiscountCompute = () => {
    let netTotalFood = getNetTotalFood()
    let netTotalDrink = getNetTotalDrink()
    let netTotalProduct = getNetTotalProduct()

    let totalAmountFood = 0
    let totalAmountDrink = 0
    let totalAmountProduct = 0

    let summaryOtherDiscount = fastAmt + empAmt + traineeAmt + cuponAmt

    // FOOD DISCOUNT
    let formatMemFood = memDisc.split("/")[0]
    let formatYYYFood = posConfigSetup.P_MemDiscChk.split("/")[0]
    if (summaryOtherDiscount > 0&&formatYYYFood==="Y") {
      return 0
    }
    totalAmountFood = (netTotalFood * formatMemFood) / 100

    // DRINK DISCOUNT
    let formatMemDrink = memDisc.split("/")[1]
    let formatYYYDrink = posConfigSetup.P_MemDiscChk.split("/")[1]
    if (summaryOtherDiscount > 0&&formatYYYDrink==="Y") {
      return 0
    }
    totalAmountDrink = (netTotalDrink * formatMemDrink) / 100

    // PRODUCT DISCOUNT
    let formatMemProduct = memDisc.split("/")[2]
    let formatYYYProduct = posConfigSetup.P_MemDiscChk.split("/")[2]
    if (summaryOtherDiscount > 0&&formatYYYProduct==="Y") {
      return 0
    }
    totalAmountProduct = (netTotalProduct * formatMemProduct) / 100

    let totalAmount = totalAmountFood + totalAmountDrink + totalAmountProduct
    setMemAmt(totalAmount)
    focusComponent(2)
  }

  const traineeDiscountCompute = () => {
    let netTotalFood = getNetTotalFood()
    let netTotalDrink = getNetTotalDrink()
    let netTotalProduct = getNetTotalProduct()

    let totalAmountFood = 0
    let totalAmountDrink = 0
    let totalAmountProduct = 0

    let summaryOtherDiscount = fastAmt + empAmt + memAmt + cuponAmt

    // FOOD DISCOUNT
    let formatTrainFood = trainDisc.split("/")[0]
    let formatYYYFood = posConfigSetup.P_TrainDiscChk.split("/")[0]
    if (summaryOtherDiscount > 0&&formatYYYFood==="Y") {
      return 0
    }
    totalAmountFood = (netTotalFood * formatTrainFood) / 100
    
    // DRINK DISCOUNT
    let formatTrainDrink = trainDisc.split("/")[1]
    let formatYYYDrink = posConfigSetup.P_TrainDiscChk.split("/")[1]
    if (summaryOtherDiscount > 0&&formatYYYDrink==="Y") {
      return 0
    }
    totalAmountDrink = (netTotalDrink * formatTrainDrink) / 100

    // PRODUCT DISCOUNT
    let formatTrainProduct = trainDisc.split("/")[2]
    let formatYYYProduct = posConfigSetup.P_TrainDiscChk.split("/")[2]
    if (summaryOtherDiscount > 0&&formatYYYProduct==="Y") {
      return 0
    }
    totalAmountProduct = (netTotalProduct * formatTrainProduct) / 100

    let totalAmount = totalAmountFood + totalAmountDrink + totalAmountProduct
    setTraineeAmt(totalAmount)
    focusComponent(3)
  }

  const cuponDiscountCompute = () => {
    let netTotalFood = getNetTotalFood()
    let netTotalDrink = getNetTotalDrink()
    let netTotalProduct = getNetTotalProduct()

    let totalAmountFood = 0
    let totalAmountDrink = 0
    let totalAmountProduct = 0

    let summaryOtherDiscount = fastAmt + empAmt + memAmt + traineeAmt

    // FOOD DISCOUNT
    let formatSubFood = subDisc.split("/")[0]
    let formatYYYFood = posConfigSetup.P_SubDiscChk.split("/")[0]
    if (summaryOtherDiscount > 0&&formatYYYFood==="Y") {
      return 0
    }
    totalAmountFood = (netTotalFood * formatSubFood) / 100

    // DRINK DISCOUNT
    let formatSubDrink = subDisc.split("/")[1]
    let formatYYYDrink = posConfigSetup.P_SubDiscChk.split("/")[1]
    if (summaryOtherDiscount > 0&&formatYYYDrink==="Y") {
      return 0
    }
    totalAmountDrink = (netTotalDrink * formatSubDrink) / 100

    // PRODUCT DISCOUNT
    let formatSubProduct = subDisc.split("/")[2]
    let formatYYYProduct = posConfigSetup.P_SubDiscChk.split("/")[2]
    if (summaryOtherDiscount > 0&&formatYYYProduct==="Y") {
      return 0
    }
    totalAmountProduct = (netTotalProduct * formatSubProduct) / 100

    let totalAmount = totalAmountFood + totalAmountDrink + totalAmountProduct
    setCuponAmt(totalAmount)
    focusComponent(4)
  }

  useEffect(() => {
    loadPosConfigSetup()
  }, [])

  useEffect(()=> {
    setFastDisc(tableFile.FastDisc || posConfigSetup.P_FastDisc)
    setEmpDisc(tableFile.EmpDisc || posConfigSetup.P_EmpDisc)
    setMemDisc(tableFile.MemDisc || posConfigSetup.P_MemDisc)
    setTrainDisc(tableFile.TrainDisc || posConfigSetup.P_TrainDisc)
    setSubDisc(tableFile.SubDisc || posConfigSetup.P_SubDisc)
  }, [posConfigSetup])

  return (
    <Grid2 container>
      <Grid2 size={12} padding={1} container justifyContent="center">
        <Typography sx={{color: "white"}} variant="h6">ให้ส่วนลดต่างๆ ในระบบ (FF/DD/PP)</Typography>
      </Grid2>
      <Grid2 size={12} textAlign="center" padding={1} margin={1} sx={{
        background: "lightblue",
        color: "black",
        fontWeight: "bold"
      }}>
        <Typography sx={{fontSize: "12px"}} color="warning">
          เมนูแต่ละประเภทที่สามารถลดได้
        </Typography>
        <Typography sx={{fontSize: "12px"}} color="primary">
          Food: {NumberFormat(getNetTotalFood())} | Drink: {NumberFormat(getNetTotalDrink())} | Product: {NumberFormat(getNetTotalProduct())}
        </Typography>
        <Typography sx={{fontSize: "12px"}} color="error">
          ( Item Discount: {NumberFormat(tableFile.ItemDiscAmt)} )
        </Typography>
        <Typography sx={{fontWeight: "bold"}}>
          มูลค่าสินค้ารวม (Total Amount): {NumberFormat(tableFile.TAmount - tableFile.ItemDiscAmt)}
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
            <MaskedInput
              value={fastDisc}
              label={fastDisc}
              disabled={posConfigSetup.P_FastDiscGet === 'N'}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              setValue={setFastAmt}
              setFormat={setFastDisc}
              netTotalAmount={tableFile.TAmount}
              focusComponent={()=>focusComponent(0)}
            />
          </Grid2>
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={festDiscountCompute}
              endIcon={<CalculateIcon fontSize="large" />}
              sx={{justifyContent: "flex-end"}}
            >
              ให้ส่วนลดเทศกาล
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef0}
              value={fastAmt}
              setValue={setFastAmt}
              onKeyDown={(e) => nextComponent(e, 1)}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
          <Grid2 size={4}>
            <MaskedInput
              value={empDisc}
              label={empDisc}
              disabled={posConfigSetup.P_EmpDiscGet === 'N'}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              setValue={setEmpAmt}
              setFormat={setEmpDisc}
              netTotalAmount={tableFile.TAmount}
              focusComponent={()=>focusComponent(1)}
            />
          </Grid2>
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={empDiscountCompute}
              endIcon={<CalculateIcon fontSize="large" />}
              sx={{justifyContent: "flex-end"}}
            >
              ให้ส่วนลดพนักงาน
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef1}
              value={empAmt}
              setValue={setEmpAmt}
              disabled={posConfigSetup.P_EmpDiscGet === "N"}
              onKeyDown={(e) => nextComponent(e, 2)}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
          <Grid2 size={4}>
            <MaskedInput
              value={memDisc}
              label={memDisc}
              disabled={posConfigSetup.P_MemDiscGet === "N"}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              setValue={setMemAmt}
              setFormat={setMemDisc}
              netTotalAmount={tableFile.TAmount}
              focusComponent={()=>focusComponent(2)}
            />
          </Grid2>
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={memeberDiscountCompute}
              endIcon={<CalculateIcon fontSize="large" />}
              sx={{justifyContent: "flex-end"}}
            >
              ให้ส่วนลดสมาชิก
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef2}
              value={memAmt}
              setValue={setMemAmt}
              disabled={posConfigSetup.P_MemDiscGet === "N"}
              onKeyDown={(e) => nextComponent(e, 3)}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
          <Grid2 size={4}>
            <MaskedInput
              value={trainDisc}
              label={trainDisc}
              disabled={posConfigSetup.P_TrainDiscGet === "N"}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              setValue={setTraineeAmt}
              setFormat={setTrainDisc}
              netTotalAmount={tableFile.TAmount}
              focusComponent={()=>focusComponent(3)}
            />
          </Grid2>
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={traineeDiscountCompute}
              endIcon={<CalculateIcon fontSize="large" />}
              sx={{justifyContent: "flex-end"}}
            >
              ให้ส่วนลด Trainee
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef3}
              value={traineeAmt}
              setValue={setTraineeAmt}
              disabled={posConfigSetup.P_TrainDiscGet === "N"}
              onKeyDown={(e) => nextComponent(e, 4)}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
          <Grid2 size={4}>
            <MaskedInput
              value={subDisc}
              label={subDisc}
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              setValue={setCuponAmt}
              setFormat={setSubDisc}
              netTotalAmount={tableFile.TAmount}
              focusComponent={()=>focusComponent(4)}
            />
          </Grid2>
          <Grid2 container size={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={cuponDiscountCompute}
              endIcon={<CalculateIcon fontSize="large" />}
              sx={{justifyContent: "flex-end"}}
            >
              ส่วนลดคูปอง
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              type="number"
              inputRef={inputRef4}
              value={cuponAmt}
              setValue={setCuponAmt}
              disabled={posConfigSetup.P_SubDiscGet === "N"}
              onKeyDown={(e) => nextComponent(e, 5)}
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
              onFocus={(event) => {
                event.target.select()
              }}
              inputProps={{ min: 0, style: { textAlign: "right" } }}
              sx={{background: "snow"}}
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
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => setOpenDiscountModal(false)}
          >
            ยกเลิก
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
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
            onClick={updateDiscountInfo}
          >
            บันทึก
          </Button>
        </Grid2>
      </Box>
      <Modal open={openCupon} onClose={() => setOpenCupon(false)}>
        <Box sx={{ ...modalStyle, width: "auto", padding: "10px" }}>
          <CuponListModal 
            onClose={() => setOpenCupon(false)} 
            setSpecialCuponAmt={setSpecialCuponAmt}
            setPrCuCode={setPrCuCode} 
            setPrCuDisc={setPrCuDisc} 
            setPrCuBath={setPrCuBath} 
            netTotalFood={getNetTotalFood()}
            netTotalDrink={getNetTotalDrink()}
            netTotalProduct={getNetTotalProduct()}
            tableFile={tableFile} />
        </Box>
      </Modal>
    </Grid2>
  )
}

export default DiscountFormModal
