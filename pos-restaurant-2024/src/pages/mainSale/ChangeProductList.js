import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid2, Typography } from '@mui/material';

const ChangeProductList = ({ optionalList, currentMenu, closeDialog }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const newOptionList = optionalList.filter(item => (item.checked === false && item.menu_code !== currentMenu))

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    closeDialog()
  };

  return (
    <Box sx={{ width: "500px", height: "350px", bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {newOptionList.length === 0 && <Typography variant='h5'>ไม่มีเมนูอาหารที่สามารถเปลี่ยนได้ !!!</Typography>}
        {newOptionList && newOptionList.map((menu, index) =>
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
              <ListItemIcon>
                <img src={menu.image_url} alt={menu.menu_name} width={100} height={100} />
              </ListItemIcon>
            <Grid2 container padding={2} spacing={2} display="flex" direction="column">
              <Typography>{menu.menu_name}</Typography>
              <Typography>ราคา: {menu.menu_price||0} บาท</Typography>
            </Grid2>
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}

export default ChangeProductList
