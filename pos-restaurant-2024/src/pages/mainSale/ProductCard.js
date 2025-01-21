import React, { memo } from "react"
import AddCircleOutline from "@mui/icons-material/AddCircleOutline"
import SetMealIcon from "@mui/icons-material/MenuOpen"
import Grid from "@mui/material/Grid2"
import { Box, Button, Badge, Typography } from "@mui/material"

const ProductCard = memo(
  ({ id, product, openModal, setShowMenuSet, OrderList, setShowManualPrice, addOrder }) => {

    const productList = OrderList.filter(p => p.R_PluCode === product.menu_code)
    const saleQty = productList.reduce((totalQty, p) => totalQty + p.R_Quan, 0);

    const handleShowDetailProduct = (product) => {
      if (product.show_list_menu === 'Y') {
        setShowMenuSet(true)
      } else if (product.manual_price === 'Y') {
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
        <div
          style={{
            margin: "2px",
            padding: "3px",
            borderRadius: "3px 3px 0px 0px",
            boxShadow: "2px 1px #eee"
          }}
        >
          <Box textAlign="center">
            <img
              src={product.image_url}
              alt=""
              height={150}
              width={160}
              style={{ borderRadius: "3px 3px 0px 0px" }}
              onClick={() => handleShowDetailProduct(product)}
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
          <Grid container justifyContent="space-between" padding={1} sx={{ border: "1px solid #bbb", borderRadius: "5px" }}>
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
                onClick={() => setShowMenuSet(true)}
              >
                Menu Set
              </Button>
            )}
            {product.manual_price !== "Y" && (
              <Button
                color="success"
                fullWidth
                variant="contained"
                sx={{ marginTop: "5px" }}
                onClick={() => addOrder(1, product)}
                startIcon={<AddCircleOutline />}
              >
                Order
              </Button>
            )}
            {product.manual_price === "Y" && (
              <Button
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ marginTop: "5px" }}
                onClick={() => setShowManualPrice(true)}
                startIcon={<AddCircleOutline />}
              >
                Manual Price
              </Button>
            )}
          </Grid>
        </div>
      </Badge>
    )
  }
)

export default ProductCard
