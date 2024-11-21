import React, { memo, useContext } from "react"
import AddCircleOutline from "@mui/icons-material/AddCircleOutline"
import SetMealIcon from "@mui/icons-material/MenuOpen"
import axios from "axios"
import Grid from "@mui/material/Grid2"
import { Box, Button, Badge, Typography } from "@mui/material"

import { POSContext } from "../../AppContext"

const ProductCard = memo(
  ({ id, product, openModal, initLoadMenu, initLoadOrder, setShowMenuSet }) => {
    const { appData } = useContext(POSContext)
    const { tableInfo, empCode, macno, userLogin } = appData
    console.log("ProductCard:", tableInfo)
    // const addOrder = (updateQty) => {
    //     product.qty = product.qty + updateQty
    //     axios.patch(`/api/product/${product.id}`, { ...product })
    //         .then((response) => {
    //             if (response.data.code === 200) {
    //                 // add order
    //                 axios.post(`/api/product_order`,
    //                     { name: product.name, url: product.url, qty: updateQty, price: product.price, totalAmount: updateQty * product.price })
    //                     .then((response2) => {
    //                         if (response2.data.code === 200) {
    //                             initLoadMenu()
    //                             initLoadOrder()
    //                         }
    //                     })
    //             }
    //         })
    // }
    const addOrder = async (qty = 1) => {
      const responseProduct = await axios.get(`/api/pos-product/${product.menu_code}`)
      const responseRIndex = await axios.get(`/api/balance/getMaxIndex/${tableInfo.tableNo}`)
      const R_Index = responseRIndex.data.R_Index
      const POSProduct = responseProduct.data.data
      console.log('addOrder(POSProduct):', POSProduct)

      const payload = {
        R_Index: R_Index,
        R_Table: tableInfo.tableNo,
        R_PluCode: product.menu_code,
        R_PName: product.menu_name,
        R_Quan: qty,
        R_Price: product.menu_price,
        R_Total: product.menu_price * qty,
        R_PrBath: 0,
        R_PrAmt: 0,
        R_DiscBath: 0,
        R_PrCuQuan: 0,
        R_PrCuAmt: 0,
        R_Redule: 0,
        R_Serve: "",
        R_KicOK: "",
        StkCode: POSProduct.PStock,
        PosStk: "",
        R_Order: "",
        R_PItemNo: 0,
        R_PKicQue: 0,
        R_MemSum: "",
        R_PrVcAmt: 0,
        R_PrVcAdj: 0,
        R_VoidQuan: 0,
        R_MoveFlag: "",
        R_MovePrint: "",
        R_SPIndex: "",
        R_Earn: "",
        R_SeparateFrom: "",
        Macno: macno,
        Cashier: userLogin,
        R_Emp: empCode,
        R_ETD: "E",
        R_PrintOK: "Y",
        R_Pause: "",
        TranType: "",
        R_KicPrint: "",
        R_Void: "",
        R_Kic: POSProduct.PKic
      }
      axios
        .post(`/api/balance`, payload)
        .then((response2) => {
          initLoadMenu()
          initLoadOrder()
        })
        .catch((error2) => {
          alert(error2)
        })
    }
    return (
      <Badge
        id={id}
        badgeContent={product.qty}
        color="primary"
        sx={{
          "& .MuiBadge-badge": {
            fontSize: 18,
            height: 25,
            minWidth: 35,
            top: 15,
            right: 18,
            borderRadius: 1,
            color: "snow",
            fontWeight: "bold"
          }
        }}
      >
        <div
          style={{
            border: "1px solid #eee",
            padding: "5px",
            borderRadius: "8px 8px 0px 0px",
            boxShadow: "2px 1px #eee"
          }}
        >
          <Box textAlign="center">
            <img
              src={product.image_url}
              alt=""
              width={160}
              style={{ borderRadius: "8px 8px 0px 0px" }}
              onClick={product.show_list_menu === "N" ? openModal: ()=>setShowMenuSet(true)}
            />
            <br />
          </Box>
          <Grid
            container
            justifyContent="center"
            textAlign="center"
            sx={{ backgroundColor: "#eee", padding: "2px" }}
          >
            <Typography
              variant="p"
              sx={{
                overflow: "auto",
                width: "130px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {product.menu_name}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" padding={1} sx={{border: "1px solid #bbb", borderRadius: "5px"}}>
            <Typography
              sx={{
                backgroundColor: "white",
                fontWeight: product.show_list_menu === "Y" ? "bold" : "none",
                color: product.show_list_menu === "Y" ? "green" : "black"
              }}
            >
              ราคา {product.menu_price}
            </Typography>
            <Typography>
              {product.tab_group}
            </Typography>
          </Grid>
          <Grid container>
            {product.show_list_menu === "Y" && (
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "salmon",
                  color: "black",
                  marginTop: "5px"
                }}
                startIcon={<SetMealIcon />}
                onClick={()=>setShowMenuSet(true)}
              >
                Menu Set
              </Button>
            )}
            {product.show_list_menu !== "Y" && (
              <Button
                color="success"
                fullWidth
                variant="contained"
                sx={{ marginTop: "5px" }}
                onClick={() => addOrder(1)}
                startIcon={<AddCircleOutline />}
              >
                Order
              </Button>
            )}
          </Grid>
        </div>
      </Badge>
    )
  }
)

export default ProductCard
