import React, { Component, useCallback, useRef, useState } from "react"
import { Box, Button, Divider, Grid2, Paper, Typography } from "@mui/material"
import Moment from "react-moment"
import { useReactToPrint } from "react-to-print"

import "./index.css"
const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="content">
        <Paper elevation={0} sx={{ padding: "5px" }} ref={this.props.innerRef}>
          <div align="center" style={{ fontSize: "18px", fontWeight: "bold" }}>
            *** ทดสอบปริ้นเตอร์ ***
          </div>
          <Paper elevation={0} sx={{ padding: "10px" }}>
            <div align="center">Table: XX</div>
          </Paper>
          <div align="center">
            <img src="/images/payment/com_logo.jpg" width={128} alt="" />
          </div>
          <Paper elevation={0} sx={{ padding: "10px" }}>
            <div>Receipt No: XXXXXX</div>
            <div>
              Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
            </div>
            <div>Customer: 2</div>
            <div>Cashier: XXXX Employ: XXX Mac:001</div>
          </Paper>
          <Divider />
          <Paper elevation={0} sx={{ padding: "10px" }}>
            <table width="100%">
              <tr>
                <th align="left"></th>
                <th align="left">Description</th>
                <th align="left"></th>
                <th align="right">Amount</th>
              </tr>
            </table>
          </Paper>
          <Divider />
          <Paper elevation={0} sx={{ padding: "10px" }}>
            <Box display="flex" justifyContent="space-between">
              <Typography>Sub-TOTAL....(Item 1)</Typography>
              <Typography>{NumFormat(999)}</Typography>
            </Box>
            <Box padding={2}>
              <Box display="flex" justifyContent="space-between">
                <Typography>อาหาร (Food)</Typography>
                <Typography>{NumFormat(999)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>เครื่องดื่ม (Drink)</Typography>
                <Typography>{NumFormat(0)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>สินค้าอื่นๆ (Other)</Typography>
                <Typography>{NumFormat(0)}</Typography>
              </Box>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <Typography>ค่าบริการ 10%</Typography>
              <Typography>{NumFormat(200)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>มูลค่าสินค้า/บริการ.....</Typography>
              <Typography>{NumFormat(888)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Vat 7%</Typography>
              <Typography>389</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Net Total</Typography>
              <Typography>{NumFormat(1020)}</Typography>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <Typography>เงินทอน</Typography>
              <Typography sx={{ fontSize: "22px" }}>{0}</Typography>
            </Box>
          </Paper>
          <Divider sx={{ marginTop: "10px" }} />
          <div align="center">Footer 1</div>
          <div align="center">Footer 2</div>
          <div align="center">Footer 3</div>
        </Paper>
      </div>
    )
  }
}

const PrintDemo = () => {
  console.log("PrintDemo")
  const contentRef = useRef(null)
  const [show, setShow] = useState(true)
  const handlePrint1 = useReactToPrint({ contentRef })

  const handlePrint2 = useReactToPrint({
    contentRef,
    documentTitle: "Printer Demo Testing",
    onAfterPrint: () => {
      console.log("onAfterPrint")
      setShow(true)
    },
    onPrintError: (err) => {
      console.log("error=>", err)
    }
  })
  const printNative = () => {
    let printContents = document.getElementById("content").innerHTML
    document.body.innerHTML = printContents
    window.print()
  }

  const handlePrinter1 = () => {
    setShow(false)
    handlePrint1()
  }

  const handlePrinter2 = useCallback(() => {
    setShow(false)
    handlePrint2()
  }, [handlePrint2])

  return (
    <div>
      <ComponentToPrint innerRef={contentRef} />
      {show && (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <Grid2
            container
            spacing={1}
            justifyContent="center"
            sx={{ marginBottom: "20px" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrinter1}
            >
              Print Normal
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePrinter2}
            >
              Print - handle
            </Button>
            <Button variant="contained" color="success" onClick={printNative}>
              window.print
            </Button>
          </Grid2>
        </Paper>
      )}
    </div>
  )
}

export default PrintDemo
