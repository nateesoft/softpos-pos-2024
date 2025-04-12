import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import {
  AppBar,
  Button,
  Grid2,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import ReceiptIcon from "@mui/icons-material/Receipt"

import "./style.css"
import apiClient from "../../../httpRequest"

const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const totalAmount = (orderList) => {
  return orderList.reduce((totalQty, p) => totalQty + p.R_Price, 0)
}

const MultiplePayment = ({
  onClose,
  tableNo,
  orderList,
  tableFile,
  splitBillAction,
  macno,
  initLoad
}) => {
  const navigate = useNavigate()
  const [tables, setTables] = useState([
    {
      id: 1,
      tableNo: `${tableNo}`,
      name: `TABLE ${tableNo} (รายการอาหารโต๊ะหลัก)`,
      bgColor: "pink"
    },
    {
      id: 2,
      tableNo: `${tableNo}-1`,
      name: `TABLE ${tableNo}-1 (โต๊ะที่ต้องการแยกชำระเงิน)`,
      bgColor: "#98e5ea"
    }
  ])

  const isEmptyRLinkIndex = (item) => {
    return !item ? true : false
  }
  const [items, setItems] = useState(
    orderList
      .filter((item) => isEmptyRLinkIndex(item.R_LinkIndex))
      .map((order, index) => {
        return {
          ...order,
          id: index + 1,
          name: order.R_PName,
          table: 1
        }
      })
  )

  const rearangeArr = (arr, sourceIndex, destIndex) => {
    const arrCopy = [...arr]
    const [removed] = arrCopy.splice(sourceIndex, 1)
    arrCopy.splice(destIndex, 0, removed)

    return arrCopy
  }

  const onDragEnd = (result) => {
    const { source, destination } = result
    if (!destination) {
      return
    }

    if (destination.droppableId === "Tables") {
      setTables(rearangeArr(tables, source.index, destination.index))
    } else if (destination.droppableId !== source.droppableId) {
      setItems((items) =>
        items.map((item) =>
          item.id === parseInt(result.draggableId)
            ? {
                ...item,
                table: parseInt(result.destination.droppableId)
              }
            : item
        )
      )
    } else {
      setItems(rearangeArr(items, source.index, destination.index))
    }
  }

  const handleConfirm = () => {
    const newOrderToSplit = items.filter((item) => item.table === 2)
    if (orderList.length <= 1 || newOrderToSplit.length === 0) {
      return
    }
    apiClient
      .post("/api/tablefile/splitBill", {
        macno,
        sourceTable: tableNo,
        targetTable: tableNo + "-1",
        orderListToMove: items.filter((item) => item.table === 2)
      })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/payment/${tableNo}-1`)
          splitBillAction()
          initLoad()
          onClose()
        }
      })
      .catch((err) => console.log(err.message))
  }
  const handleCacnel = () => {
    onClose()
  }

  return (
    <div
      className="container py-5"
      style={{ overflow: "auto", height: "750px" }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ReceiptIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            แยกชำระรายการสินค้า
          </Typography>
        </Toolbar>
      </AppBar>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ marginTop: "50px" }}>
          <Droppable droppableId="Tables" type="droppableItem">
            {(provided) => (
              <div ref={provided.innerRef}>
                {tables.map((table, index) => (
                  <Draggable
                    draggableId={`table-${table.id}`}
                    key={`table-${table.id}`}
                    index={index}
                  >
                    {(parentProvider) => (
                      <Grid2
                        container
                        spacing={1}
                        direction="column"
                        justifyContent="space-between"
                        ref={parentProvider.innerRef}
                        {...parentProvider.draggableProps}
                      >
                        <Droppable droppableId={table.id.toString()}>
                          {(provided) => (
                            <>
                              <Paper
                                elevation={3}
                                ref={provided.innerRef}
                                sx={{ margin: "5px" }}
                              >
                                <TableContainer
                                  sx={{ overflow: "auto", padding: "5px" }}
                                >
                                  <h6
                                    {...parentProvider.dragHandleProps}
                                    style={{
                                      backgroundColor: table.bgColor,
                                      padding: "15px"
                                    }}
                                  >
                                    <ReceiptIcon /> {table.name}
                                  </h6>
                                  <Table aria-label="spanning table">
                                    {items
                                      .filter((item) => item.table === table.id)
                                      .map((item, index) => (
                                        <Draggable
                                          draggableId={item.id.toString()}
                                          key={item.id}
                                          index={index}
                                        >
                                          {(provided) => (
                                            <TableBody
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                            >
                                              <TableRow
                                                key={item.R_Index}
                                                sx={{ backgroundColor: "snow" }}
                                              >
                                                <TableCell
                                                  sx={{ whiteSpace: "nowrap" }}
                                                >
                                                  {item.R_ETD}
                                                </TableCell>
                                                <TableCell
                                                  sx={{ whiteSpace: "nowrap" }}
                                                >
                                                  {item.R_Table}
                                                </TableCell>
                                                <TableCell
                                                  sx={{ whiteSpace: "nowrap" }}
                                                >
                                                  {item.R_Index}
                                                </TableCell>
                                                <TableCell
                                                  sx={{ width: "150px" }}
                                                >
                                                  {item.R_PName}
                                                </TableCell>
                                                <TableCell align="right">
                                                  {item.R_Quan}
                                                </TableCell>
                                                <TableCell align="right">
                                                  {NumFormat(item.R_Price)}
                                                </TableCell>
                                                <TableCell align="right">
                                                  {NumFormat(item.R_Total)}
                                                </TableCell>
                                              </TableRow>
                                            </TableBody>
                                          )}
                                        </Draggable>
                                      ))}
                                    {items.filter(
                                      (item) => item.table === table.id
                                    ).length > 0 && (
                                      <>
                                        <TableRow>
                                          <TableCell align="right" colSpan={5}>
                                            ยอดรวมสินค้าก่อนหักส่วนลด
                                            และค่าบริการ
                                          </TableCell>
                                          <TableCell align="right">
                                            {NumFormat(
                                              totalAmount(
                                                items.filter(
                                                  (item) =>
                                                    item.table === table.id
                                                )
                                              )
                                            )}
                                          </TableCell>
                                        </TableRow>
                                      </>
                                    )}
                                    {items.filter(
                                      (item) => item.table === table.id
                                    ).length === 0 && (
                                      <TableRow>
                                        <TableCell colSpan={7} align="center">
                                          <Typography
                                            sx={{
                                              backgroundColor: "snow",
                                              padding: "10px"
                                            }}
                                          >
                                            ... ลากเมนูอาหารมาใส่ตรงนี้ได้เลย
                                            ...
                                          </Typography>
                                        </TableCell>
                                      </TableRow>
                                    )}
                                  </Table>
                                </TableContainer>
                              </Paper>
                              {provided.placeholder}
                            </>
                          )}
                        </Droppable>
                      </Grid2>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <Grid2
          container
          spacing={1}
          justifyContent="center"
          sx={{ margin: "20px" }}
        >
          <Button
            startIcon={<CancelIcon />}
            variant="contained"
            color="error"
            onClick={handleCacnel}
          >
            Cancel
          </Button>
          <Button
            startIcon={<CheckCircleIcon />}
            variant="contained"
            color="primary"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Grid2>
      </Paper>
    </div>
  )
}

export default MultiplePayment
