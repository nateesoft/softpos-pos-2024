import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AppBar, Button, Grid2, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ReceiptIcon from '@mui/icons-material/Receipt';

import './style.css';

const NumFormat = data => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const MultiplePayment = ({ onClose, tableNo, orderList, tableFile }) => {
  console.log(tableFile)
  const [categories, setCategories] = useState([
    { id: 1, tableNo: "T1", name: 'TABLE T1 (รายการอาหารโต๊ะหลัก)' },
    { id: 2, tableNo: "T1-1", name: 'TABLE T1-1 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
    { id: 3, tableNo: "T1-2", name: 'TABLE T1-2 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
    { id: 4, tableNo: "T1-3", name: 'TABLE T1-3 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
  ]);
  
  const isEmptyRLinkIndex = (item) => {
    return (!item) ? true : false
  }
  const [items, setItems] = useState(orderList.filter(item => isEmptyRLinkIndex(item.R_LinkIndex)).map((order, index) => {
    return {
      ...order,
      id: (index + 1),
      name: order.R_PName,
      category: 1
    }
  }));

  const rearangeArr = (arr, sourceIndex, destIndex) => {
    const arrCopy = [...arr];
    const [removed] = arrCopy.splice(sourceIndex, 1);
    arrCopy.splice(destIndex, 0, removed);

    return arrCopy;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === 'Categories') {
      setCategories(rearangeArr(categories, source.index, destination.index));
    } else if (destination.droppableId !== source.droppableId) {
      setItems((items) =>
        items.map((item) =>
          item.id === parseInt(result.draggableId)
            ? {
              ...item,
              category: parseInt(result.destination.droppableId),
            }
            : item
        )
      );
    } else {
      setItems(rearangeArr(items, source.index, destination.index));
    }
  };

  const handleConfirm = () => {
    onClose()
  }
  const handleCacnel = () => {
    onClose()
  }

  return (
    <div className="container py-5" style={{ overflow: "auto", height: "750px" }}>
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
        <div style={{marginTop: "50px"}}>
          <Droppable droppableId="Categories" type="droppableItem">
            {(provided) => (
              <div ref={provided.innerRef}>
                {categories.map((category, index) => (
                  <Draggable
                    draggableId={`category-${category.id}`}
                    key={`category-${category.id}`}
                    index={index}
                  >
                    {(parentProvider) => (
                      <Grid2 container spacing={1} direction="column" justifyContent="space-between"
                        ref={parentProvider.innerRef}
                        {...parentProvider.draggableProps}
                      >
                        <Droppable droppableId={category.id.toString()}>
                          {(provided) => (
                            <Paper elevation={3} ref={provided.innerRef}
                              sx={{ margin: "5px" }}>
                              <TableContainer sx={{ overflow: "auto", padding: "5px" }}>
                                <h6
                                  {...parentProvider.dragHandleProps}
                                  style={{ backgroundColor: "#eee", padding: "5px" }}
                                >
                                  {category.name}
                                </h6>
                                <Table aria-label="spanning table">
                                  {items
                                    .filter(
                                      (item) => item.category === category.id
                                    )
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
                                            <TableRow key={item.R_Index}>
                                              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.R_Table}</TableCell>
                                              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.R_Index}</TableCell>
                                              <TableCell sx={{ width: "150px" }}>{item.R_PName}</TableCell>
                                              <TableCell align="right">{item.R_Quan}</TableCell>
                                              <TableCell align="right">{NumFormat(item.R_Price)}</TableCell>
                                              <TableCell align="right">{NumFormat(item.R_Total)}</TableCell>
                                              <TableCell align="right">{item.R_ETD}</TableCell>
                                            </TableRow>
                                          </TableBody>
                                        )}
                                      </Draggable>
                                    ))}
                                  {items
                                    .filter(
                                      (item) => item.category === category.id
                                    ).length === 0 &&
                                    <TableRow>
                                      <TableCell colSpan={7} align='center'>
                                        <Typography sx={{ backgroundColor: "snow", padding: "10px" }}>
                                          ... ลากเมนูอาหารมาใส่ตรงนี้ได้เลย ...
                                        </Typography>
                                      </TableCell>
                                    </TableRow>
                                  }
                                </Table>
                              </TableContainer>
                            </Paper>
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
      <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Grid2 container spacing={1} justifyContent="center" sx={{ margin: "20px" }}>
          <Button startIcon={<CheckCircleIcon />} variant='contained' color='primary' onClick={handleConfirm}>Confirm</Button>
          <Button startIcon={<CancelIcon />} variant='contained' color='error' onClick={handleCacnel}>Cancel</Button>
        </Grid2>
      </Paper>
    </div>
  );
}

export default MultiplePayment
