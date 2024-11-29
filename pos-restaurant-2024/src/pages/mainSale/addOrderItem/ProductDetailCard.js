import React, { useContext, useState } from 'react'
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Cancel"
import VoidIcon from "@mui/icons-material/NotInterested"
import ConfirmIcon from "@mui/icons-material/Check"
import {
    Alert,
    Box,
    Button,
    TextField,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    IconButton,
    Grid2
} from "@mui/material"
import axios from 'axios';

import OptionMenuSelect from "../OptionMenuSelect"
import { POSContext } from '../../../AppContext'

const ProductDetailCard = ({
    tableNo,
    product,
    handleNotification,
    closeModal,
    initLoadOrder,
    initLoadMenu
}) => {
    const { appData } = useContext(POSContext)
    const { empCode, macno, userLogin } = appData

    const [count, setCount] = useState(product.R_Quan || 1)
    const [orderType, setOrderType] = useState("E")
    const [optList, setOptList] = useState([])
    const [specialText, setSpecialText] = useState("")

    const handleChange = (event, oType) => {
        setOrderType(oType)
    }

    const handleConfirm = () => {
        if (count === 0) {
            // delete item
            axios.post(`/api/balance/void`, {
                R_Index: product.R_Index,
                Cachier: userLogin,
                empCode: empCode,
                macno: macno,
                voidMsg: "Test void"
            })
                .then((response) => {
                    if (response.data.status = 200) {
                        initLoadMenu()
                        initLoadOrder()
                        closeModal()
                    }
                })
                .catch((error) => {
                    handleNotification(error)
                })
        } else {
            // update item
            product.qty = count
            axios
                .put(`/api/balance`, {
                    oldBalance: product,
                    optList,
                    specialText,
                    qty: count,
                    macno,
                    userLogin,
                    empCode
                })
                .then((response) => {
                    console.log('UPDATE BALANCE=>', response)
                    if (response.data.status === 200) {
                        initLoadMenu()
                        initLoadOrder()
                        closeModal()
                    }
                })
                .catch((error) => {
                    handleNotification(error)
                })
        }
    }

    return (
        <div
            style={{
                padding: "15px",
                border: "2px solid #eee",
                borderRadius: "10px"
            }}
        >
            <div align="center" style={{ padding: "10px" }}>
                <Box sx={{ padding: "10px" }}>
                    <Typography variant="h5">{product.menu_name}</Typography>
                </Box>
                <table width="100%">
                    <tr>
                        <td colSpan={2} align="center">
                            <img
                                src={product.image_url}
                                width={150}
                                alt=""
                                style={{ borderRadius: "10px", boxShadow: "2px 3px #ccc" }}
                            />
                            <br />
                        </td>
                    </tr>
                </table>
            </div>
            <Alert severity="success" sx={{ width: "100%" }}>
                <Box>
                    <Typography variant="span">เวลาสั่ง: 06/11/2024 10.10.000</Typography>
                </Box>
                <Box>
                    <Typography variant="span">สถานะส่งครัว: ยังไม่ได้ส่ง</Typography>
                </Box>
            </Alert>
            <div align="center" style={{ padding: "10px" }}>
                <table width="100%">
                    <tr>
                        <td align="left">
                            <u>ราคา {product.menu_price} บาท</u>
                        </td>
                        <td
                            align="right"
                            style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}
                        >
                            อาหารหลัก*
                        </td>
                    </tr>
                </table>
            </div>
            <Grid2 container spacing={2} display="flex" justifyContent="space-evenly">
                <IconButton
                    size="large"
                    sx={{ backgroundColor: "red", color: "white" }}
                    onClick={() => {
                        setCount(Math.max(count - 1, 0))
                    }}
                >
                    <RemoveIcon fontSize="large" />
                </IconButton>
                <TextField
                    variant="outlined"
                    type="number"
                    value={count}
                    onChange={(evt) => setCount(evt.target.value)}
                    inputProps={{
                        min: 0,
                        style: { textAlign: "center", fontSize: "20px", width: "100px" }
                    }}
                />
                <IconButton
                    size="large"
                    sx={{ backgroundColor: "green", color: "white" }}
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    <AddIcon fontSize="large" />
                </IconButton>
            </Grid2>
            <OptionMenuSelect setSpecialText={setSpecialText} productCode={product.R_PluCode} optList={optList} setOptList={setOptList} />
            <Box sx={{ padding: "10px" }}>
                <Box>
                    <Typography variant="p">ประเภทอาหาร</Typography>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ margin: "10px" }}>
                    <ToggleButtonGroup
                        color="primary"
                        value={orderType}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="E">Dine In</ToggleButton>
                        <ToggleButton value="T">Take Away</ToggleButton>
                        <ToggleButton value="D">Delivery</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            {count === 0 && (
                <Alert severity="error" sx={{ width: "100%", marginBottom: "5px" }}>
                    <Box>
                        <Typography variant="span">
                            คุณต้องการลบรายการอาหารนี้หรือไม่ !!!
                        </Typography>
                    </Box>
                </Alert>
            )}
            <Grid2 container justifyContent="center">
                <Button
                    variant="contained"
                    color="error"
                    onClick={closeModal}
                    sx={{ marginRight: "10px" }}
                    startIcon={<CloseIcon />}
                >
                    CANCEL
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={closeModal}
                    sx={{ marginRight: "10px" }}
                    startIcon={<VoidIcon />}
                >
                    ยกเลิก (VOID)
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleConfirm}
                    startIcon={<ConfirmIcon />}
                >
                    CONFIRM
                </Button>
            </Grid2>
        </div>
    )
}

export default ProductDetailCard
