import React, { useState } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Typography from "@mui/material/Typography"
import { Button, Grid2 } from "@mui/material"

import BackGroupMenu from "./BackGroupMenu"
import MenuDetailModal from "./modal/MenuDetailModal"

const MenuDetail = () => {
  const [openOptional, setOpenOptional] = useState(false)

  const handleOpenOptional = () => {
    setOpenOptional(true)
  }

  return (
    <div style={{ marginTop: "60px" }}>
      <BackGroupMenu />
      <Grid2 textAlign="left" margin={1}>
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          โปรโมชั่นต่างๆ
        </Typography>
      </Grid2>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {itemData &&
          itemData.map((item, index) => (
            <div key={`${item}_${index}`} onClick={handleOpenOptional}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <Button variant="contained" color="success">
                    ฿ 199.00 +
                  </Button>
                }
              >
                <ListItemAvatar>
                  <img
                    src={item.img}
                    alt=""
                    width="auto"
                    height={80}
                    style={{ borderRadius: "5px", marginRight: "10px" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
      </List>

      <MenuDetailModal openOptional={openOptional} setOpenOptional={setOpenOptional} />
    </div>
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
  },
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
  },
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
  },
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
  },
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

export default MenuDetail
