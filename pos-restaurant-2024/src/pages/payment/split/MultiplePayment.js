import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import Item from './Item';
import './style.css';


const NumFormat = data => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const MultiplePayment = ({ tableNo, orderList, tableFile }) => {
  console.log(tableFile)
  const [categories, setCategories] = useState([
    { id: 1, tableNo: "T1", name: 'TABLE T1 (รายการอาหารโต๊ะหลัก)' },
    { id: 2, tableNo: "T1-1", name: 'TABLE T1-1 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
    { id: 3, tableNo: "T1-2", name: 'TABLE T1-2 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
    { id: 4, tableNo: "T1-3", name: 'TABLE T1-3 (รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)' },
  ]);

  // const [items, setItems] = useState([
  //   { id: 1, name: 'item1', category: 1 },
  //   { id: 2, name: 'item2', category: 1 },
  //   { id: 3, name: 'item3', category: 1 },
  //   { id: 4, name: 'item4', category: 1 },
  //   { id: 5, name: 'item5', category: 1 },
  //   { id: 6, name: 'item6', category: 1 },
  // ]);

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

  return (
    <div className="container py-5" style={{overflow: "auto" ,height: "750px"}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
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
                              sx={{margin: "5px"}}>
                              <TableContainer sx={{ overflow: "auto", padding: "5px" }}>
                                <h6
                                  {...parentProvider.dragHandleProps}
                                  style={{backgroundColor: "#eee", padding: "5px"}}
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
                                    ).length===0 && 
                                    <TableRow>
                                      <TableCell colSpan={7} align='center'>
                                        <Typography sx={{backgroundColor: "snow", padding: "10px"}}>
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
    </div>
  );
}

export default MultiplePayment
