import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"

const GroupMenu = () => {
  const navigate = useNavigate()

  const handleShowDetail = () => {
    navigate("/detail")
  }

  return (
    <>
      <Box
        sx={{
          marginTop: "65px",
          padding: "10px",
          width: "100%"
        }}
      >
        <Typography fontSize={20} fontWeight={500}>หมวดเมนูอาหารทั้งหมด</Typography>
      </Box>
      <ImageList
        cols={2}
        sx={{
          overflow: "auto",
          width: "100%",
          height: "650px"
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={handleShowDetail}
            />
            <div
              style={{
                background: "radial-gradient(circle at center, #123456, #000)"
              }}
            >
              <Typography sx={{ margin: "8px", fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast"
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger"
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee"
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey"
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil"
  }
]

export default GroupMenu
