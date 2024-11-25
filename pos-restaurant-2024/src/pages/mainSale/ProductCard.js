import React, { memo, useContext } from "react"
import AddCircleOutline from "@mui/icons-material/AddCircleOutline"
import SetMealIcon from "@mui/icons-material/MenuOpen"
import axios from "axios"
import Grid from "@mui/material/Grid2"
import { Box, Button, Badge, Typography } from "@mui/material"

import { POSContext } from "../../AppContext"

const ProductCard = memo(
  ({ id, tableNo, product, openModal, initLoadMenu, initLoadOrder, setShowMenuSet, handleNotification }) => {
    const { appData } = useContext(POSContext)
    const { empCode, macno, userLogin } = appData
    console.log("ProductCard")

    const addOrder = async (qty = 1) => {
      axios
        .post(`/api/balance`, {
          tableNo, menuInfo: product, qty, macno, userLogin, empCode
        })
        .then((response) => {
          initLoadMenu()
          initLoadOrder()
        })
        .catch((error2) => {
          handleNotification(error2)
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
              height={150}
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
