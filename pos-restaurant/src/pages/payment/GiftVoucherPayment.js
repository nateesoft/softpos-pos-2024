import React, { useContext, useEffect, useRef, useState } from "react"
import {
  Box,
  Button,
  Grid2,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ConfirmIcon from "@mui/icons-material/CheckCircle"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import QueueIcon from '@mui/icons-material/Queue';

import { POSContext } from "../../AppContext"
import apiClient from "../../httpRequest"

const columns = [
  { id: "action", align: "center" },
  { id: "giftno", label: "เลขที่บัตรกำนัล", minWidth: 50 },
  { id: "giftamt", label: "จำนวนเงิน", minWidth: 50, align: "right", type: "float" }
]

const NumFormat = (data) => {
  if(!data) {
    return "0.00"
  }
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const GiftVoucherPayment = (props) => {
  const {
    balanceAmount,
    onClose,
    setGiftVoucherAmt,
    tableNo,
    totalAmount
  } = props
  const { appData } = useContext(POSContext)
  const { macno } = appData

  const inputGiftNoRef = useRef(null)
  const inputGiftAmtRef = useRef(null)
  const buttonAddRef = useRef(null)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [giftTempList, setGiftTempList] = useState([])

  // gift voucher info
  const [giftNo, setGiftNo] = useState("")
  const [giftAmount, setGiftAmount] = useState(0)

  // inline error
  const [giftNoError, setGiftNoError] = useState("")
  const [giftAmountError, setGiftAmountError] = useState("")

  const handleCancelGiftVoucher = () => {
    setGiftNoError("")
    setGiftAmountError("")

    onClose()
  }

  const handleConfirmGiftVoucherModal = () => {
    if(giftTempList.length > 0){
      const summaryGiftVoucherAmt = giftTempList.reduce((n, { giftamt }) => n + parseFloat(giftamt),0)
      setGiftVoucherAmt(summaryGiftVoucherAmt)
  
      totalAmount()
      onClose()
    }
  }

  const removeGiftVoucherRow = (giftno) => {
      apiClient
        .post(`/api/giftvoucher/temp/${macno}/delete`, {macno,giftno})
        .then((response) => {
          if (response.status === 200) {
            loadGiftVoucherData()
          }
        })
        .catch((err) => {})
    }

  const confirmAddGiftVoucher = () => {
    if (!giftNo) {
      setGiftNoError("กรุณาระบุข้อมูล Gift No !")
      return
    }
    if (!giftAmount && giftAmount <= 0) {
      setGiftAmountError("จำนวนเงินบัตรกำนัล/บัตรของขวัญ ไม่ถูกต้อง !")
      return
    }

    const checkExistGiftNo = giftTempList.filter((item) => item.giftno === giftNo)
    if (checkExistGiftNo.length > 0) {
      setGiftNoError("บันทึกข้อมูลบัตรกำนัล/บัตรของขวัญซ้ำ !")
      return
    }

    apiClient
      .post(`/api/giftvoucher/temp`, {
        MacNo: macno,
        giftno: giftNo,
        giftamt: giftAmount
      })
      .then((response) => {
        if (response.status === 200) {
          // clear form
          setGiftNo("")
          setGiftAmount("")

          // clear validate
          setGiftNoError("")
          setGiftAmountError("")

          loadGiftVoucherData()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadGiftVoucherData = () => {
    apiClient
      .get(`/api/giftvoucher/temp/${macno}`)
      .then((response) => {
        if (response.status === 200) {
          setGiftTempList(response.data.data)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    loadGiftVoucherData()
  }, [])

  return (
    <>
      <Grid2 container padding={1}>
        <Grid2 container spacing={1} padding={1}>
          <TextField
            variant="outlined"
            label="เลขที่บัตรกำนัล"
            value={giftNo}
            onChange={(e) => setGiftNo(e.target.value)}
            onFocus={(evt) => {evt.target.select()}}
            onKeyDown={e => e.key === "Enter" ? inputGiftAmtRef.current.focus(): ""}
            helperText={giftNoError}
            inputRef={inputGiftNoRef}
            size="small"
            autoFocus
            required
            error
          />
          <TextField
            variant="outlined"
            type="number"
            label="จำนวนเงินที่"
            value={giftAmount}
            onChange={(e) => setGiftAmount(e.target.value)}
            onFocus={(evt) => {evt.target.select()}}
            onKeyDown={e => e.key==="Enter" ? confirmAddGiftVoucher(): ""}
            helperText={giftAmountError}
            inputRef={inputGiftAmtRef}
            size="small"
            required
            error
          />
          <Button 
            ref={buttonAddRef} 
            variant="contained" 
            color="success" 
            onClick={confirmAddGiftVoucher} startIcon={<QueueIcon />}>
            Add
          </Button>
        </Grid2>
        <Grid2>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns && columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {giftTempList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.giftno}
                      >
                        {columns && columns.map((column) => {
                            const value = row[column.id]
                            if (column.id === "action") {
                              return (
                                <TableCell>
                                  <IconButton
                                    onClick={() => removeGiftVoucherRow(row.giftno)}
                                  >
                                    <DeleteOutlineIcon color="error" />
                                  </IconButton>
                                </TableCell>
                              )
                            }
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.type==="float" ? NumFormat(value): value}
                              </TableCell>
                            )
                          })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      </Grid2>
      <Box sx={{ marginTop: "30px" }} textAlign="center">
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          color="error"
          startIcon={<CloseIcon />}
          onClick={handleCancelGiftVoucher}
        >
          ยกเลิก
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          onClick={handleConfirmGiftVoucherModal}
          endIcon={<ConfirmIcon />}
        >
          ยืนยันข้อมูล
        </Button>
      </Box>
    </>
  )
}

export default GiftVoucherPayment
