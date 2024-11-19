import React, { memo, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid2'
import { Box, Button, Typography, IconButton, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/CancelRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import OptionMenuSelect from "./OptionMenuSelect";

const ProductDetailCard = memo(({ product, closeModal, initLoadMenu, initLoadOrder }) => {
    console.log('ProductDetailCard')
    const [count, setCount] = useState(product.qty||0)

    const handleConfirm = () => {
        product.qty = count
        console.log('handleConfirm(1):', product)
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                console.log('handleConfirm(2):', response)
                if (response.data.code === 200) {
                    initLoadMenu()
                    initLoadOrder()
                    closeModal()
                }
            })
    }

    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px" }}>
            <div align="center" style={{ padding: "10px" }}>
                <Box sx={{ padding: "5px" }}>
                    <Typography variant="h5">{product.menu_name}</Typography>
                </Box>
                <table width="100%">
                    <tr>
                        <td colSpan={2} align="center">
                            <img src={product.image_url} width={300} alt="" style={{ borderRadius: "5px", boxShadow: "2px 3px #ccc" }} /><br />
                        </td>
                    </tr>
                </table>
            </div>
            <div align="center" style={{ padding: "10px" }}>
                <table width="100%">
                    <tr>
                        <td align="left"><u>ราคา {product.menu_price||0} บาท</u></td>
                        <td align="right" style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}>อาหารหลัก*</td>
                    </tr>
                </table>
            </div>
            <Grid container spacing={2} display="flex" justifyContent="space-evenly">
                <IconButton size="large" sx={{ backgroundColor: "red", color: "white" }} onClick={() => {
                    setCount(Math.max(count - 1, 0));
                }}>
                    <RemoveIcon fontSize="large" />
                </IconButton>
                <TextField variant="outlined" type="number" value={count}
                    onChange={evt => setCount(evt.target.value)}
                    inputProps={{ min: 0, style: { textAlign: "center", fontSize: "20px", width: "100px" } }} />
                <IconButton size="large" sx={{ backgroundColor: "green", color: "white" }} onClick={() => {
                    setCount(count + 1);
                }}>
                    <AddIcon fontSize="large" />
                </IconButton>
            </Grid>
            <OptionMenuSelect />
            <div align="center">
                <Button variant="contained" color="error" onClick={closeModal} startIcon={<CancelIcon />} sx={{ marginRight: "10px" }}>
                    CANCEL
                </Button>
                <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={()=>handleConfirm()}>
                    CONFIRM
                </Button>
            </div>
        </div>
    )
})

export default ProductDetailCard
