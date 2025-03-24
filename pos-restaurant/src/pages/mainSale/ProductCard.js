import React, { memo, useContext } from "react"
import AddCircleOutline from "@mui/icons-material/AddCircleOutline"
import SetMealIcon from "@mui/icons-material/MenuOpen"
import Grid2 from "@mui/material/Grid2"
import { Box, Button, Badge, Typography } from "@mui/material"

import { CurrencyContext } from "../../contexts/CurrencyContext"

const baseName = process.env.REACT_APP_BASE_NAME

const ProductCard = memo((props) => {
  console.log("ProductCard")
  const { currency, convertCurrency } = useContext(CurrencyContext)
  const {
    id,
    product,
    openModal,
    setShowMenuSet,
    OrderList,
    setShowManualPrice,
    addOrder
  } = props
  const productList = OrderList.filter((p) => {
    return p.R_PluCode === product.menu_code && p.R_Void !== "V"
  })
  const saleQty = productList.reduce((totalQty, p) => totalQty + p.R_Quan, 0)

  const convertedTotal = convertCurrency(product.menu_price, currency)

  const handleShowDetailProduct = (product) => {
    if (product.show_list_menu === "Y") {
      setShowMenuSet(true)
    } else if (product.manual_price === "Y") {
      setShowManualPrice(true)
    } else {
      openModal()
    }
  }

  return (
    <Badge
      id={id}
      badgeContent={saleQty}
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
      <Grid2 xs="auto" padding={1}>
        <Box textAlign="center">
          <img
            src={`/${baseName}/${product.image_url}`}
            alt=""
            height={150}
            width={160}
            style={{ borderRadius: "3px 3px 0px 0px" }}
            onClick={() => handleShowDetailProduct(product)}
          />
          <br />
        </Box>
        <Grid2 container justifyContent="center" textAlign="center">
          <Typography
            variant="p"
            sx={{
              overflow: "auto",
              width: "130px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              color: "white"
            }}
          >
            {product.menu_name}
          </Typography>
        </Grid2>
        <Grid2 container spacing={1} justifyContent="space-around">
          <Typography
            sx={{
              fontWeight: product.show_list_menu === "Y" ? "bold" : "none",
              color: product.show_list_menu === "Y" ? "snow" : "yellow"
            }}
          >
            ราคา{" "}
            {new Intl.NumberFormat("th-TH", {
              style: "currency",
              currency
            }).format(convertedTotal)}
          </Typography>
          <Typography sx={{ color: "white" }}>{product.tab_group}</Typography>
        </Grid2>
        <Grid2 container spacing={1} justifyContent="space-evenly">
          {product.show_list_menu === "Y" && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "salmon",
                color: "black"
              }}
              startIcon={<SetMealIcon />}
              onClick={() => setShowMenuSet(true)}
              fullWidth
            >
              SET MENU
            </Button>
          )}
          {product.manual_price !== "Y" && product.show_list_menu !== "Y" && (
            <Button
              color="success"
              variant="contained"
              onClick={() => addOrder(1, product)}
              startIcon={<AddCircleOutline />}
              fullWidth
            >
              ADD ORDER
            </Button>
          )}
          {product.manual_price === "Y" && (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setShowManualPrice(true)}
              startIcon={<AddCircleOutline />}
            >
              Manual Price
            </Button>
          )}
        </Grid2>
      </Grid2>
    </Badge>
  )
})

export default ProductCard
