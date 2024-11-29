import React, { useContext, useState } from 'react'

import { IconButton, TextField, Typography, Box, Grid2 } from '@mui/material'
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from '@mui/icons-material/DoNotDisturbOn';
import axios from 'axios';

import { POSContext } from '../../../AppContext';

const ProductCard = ({ tableNo, product, openModal, initLoadMenu, initLoadOrder }) => {
    const { appData } = useContext(POSContext)
    const { macno, userLogin, empCode } = appData
    const [optList] = useState([product.R_Opt1, product.R_Opt2, product.R_Opt3, product.R_Opt4, product.R_Opt5, product.R_Opt6, product.R_Opt7, product.R_Opt8, product.R_Opt9])
    const [count, setCount] = useState(product.R_Quan || 1)
  
    const handleRemoveItem = () => {
      const updCount = Math.max(count - 1, 0)
      axios.patch(`/api/balance/updateQty`, {
        tableNo: tableNo,
        rIndex: product.R_Index,
        qty: updCount
      })
        .then(response => {
          if (updCount > 0) {
            setCount(updCount)
          }
          initLoadMenu()
          initLoadOrder()
        })
        .catch(err => {
          console.log(err)
        })
    }
  
    const handleAddItem = () => {
      axios.post(`/api/balance`, {
        tableNo, menuInfo: {
          menu_code: product.R_PluCode,
          menu_name: product.R_PName,
          menu_price: product.R_Price
        }, qty: 1, macno, userLogin, empCode
      })
        .then(response => {
          initLoadMenu()
          initLoadOrder()
        })
        .catch(err => {
          console.log(err)
        })
    }
  
    return (
      <div
        style={{
          padding: "15px",
          border: "2px solid #eee",
          borderRadius: "5px",
          marginBottom: "10px",
          boxShadow: "2px 2px #eee",
          backgroundColor: product.R_Pause === 'P' ? "#f4fbfc" : "snow"
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={5}>
            <img
              src={product.image_url}
              alt=""
              height={100}
              style={{ borderRadius: "5px", width: "120px" }}
              onClick={openModal}
            />
          </Grid2>
          <Grid2 size={7}>
            <Grid2 container direction="column" justifyContent="flex-end">
              <Grid2>{product.R_PName}</Grid2>
              <Grid2 display="flex" justifyContent="center">
                <IconButton onClick={handleRemoveItem} disabled={product.R_Pause === 'P'}>
                  <RemoveCircleIcon sx={{ color: product.R_Pause === 'P' ? "gray" : "red" }} fontSize="large" />
                </IconButton>
                <TextField
                  inputProps={{ min: 0, style: { textAlign: "right", width: '35px', fontWeight: "bold" } }}
                  variant="outlined"
                  type="number"
                  value={count}
                  disabled
                  onChange={(e) => setCount(e.target.value)}
                />
                <IconButton onClick={handleAddItem}>
                  <AddCircleIcon color="success" fontSize="large" />
                </IconButton>
              </Grid2>
              <Grid2>
                <Grid2 container>
                  <Typography>
                    {product.R_Price} x {product.R_Quan}{" "}
                  </Typography>
                  <Typography>&nbsp;=</Typography>
                  <Typography>{product.R_Price * product.R_Quan}</Typography>
                </Grid2>
              </Grid2>
              <Box display="flex" flexDirection="row">
                {optList && optList.filter(o => o !== "").map((opt) =>
                  <Typography sx={{ fontSize: "10px", color: "green" }}>{opt},</Typography>
                )}
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    )
  }

  export default ProductCard
