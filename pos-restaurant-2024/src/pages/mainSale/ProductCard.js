import React, { memo, useContext } from 'react'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import axios from 'axios'
import Grid from '@mui/material/Grid2'
import { Box, Button, Badge, Typography } from "@mui/material";

import { POSContext } from "../../AppContext";

const ProductCard = memo(({ id, product, openModal, initLoadMenu, initLoadOrder }) => {
    const { appData } = useContext(POSContext)
    const { tableInfo } = appData
    console.log('ProductCard:', tableInfo)
    const addOrder = (updateQty) => {
        product.qty = product.qty + updateQty
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                if (response.data.code === 200) {
                    // add order
                    axios.post(`/api/product_order`,
                        { name: product.name, url: product.url, qty: updateQty, price: product.price, totalAmount: updateQty * product.price })
                        .then((response2) => {
                            if (response2.data.code === 200) {
                                initLoadMenu()
                                initLoadOrder()
                            }
                        })
                }
            })
    }
    // const addOrder = (updateQty) => {
    //     const payload = {
    //         tableNo: tableInfo.tableNo,
    //         productCode: "",
    //         qty: product.qty + updateQty,
    //         r_etd: "",
    //         empCode: "",
    //         price: 0,
    //         macno: ""
    //     }

    //     axios.post(`/api/balance`, payload)
    //         .then((response) => {
    //             if (response.data.code === 200) {
    //                 initLoadMenu()
    //                 initLoadOrder()
    //             }
    //         })
    // }
    return (
        <Badge id={id} badgeContent={product.qty} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 18, height: 25, minWidth: 35, top: 15, right: 18, borderRadius: 1, color: "snow", fontWeight: "bold" } }}>
            <div style={{ border: "1px solid #eee", padding: "5px", borderRadius: "8px 8px 0px 0px", boxShadow: "2px 1px #eee" }}>
                <Box textAlign="center">
                    <img src={product.url} alt="" width={160} style={{ borderRadius: "8px 8px 0px 0px" }} onClick={openModal} /><br />
                </Box>
                <Grid container justifyContent="center" textAlign="center" sx={{ backgroundColor: "#eee", padding: "2px" }}>
                    <Typography variant="p" sx={{ overflow: "auto", width: "130px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Typography>ราคา {product.price}</Typography>
                    <Typography>Detail</Typography>
                </Grid>
                <Grid container>
                    <Button fullWidth variant="contained" sx={{ backgroundColor: "#123456", color: "snow", marginTop: "5px" }} onClick={() => addOrder(1)} startIcon={<AddCircleOutline />}>Order</Button>
                </Grid>
            </div>
        </Badge>
    )
})

export default ProductCard