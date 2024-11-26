import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios';

const ChangeProductList = () => {
  const [menuList, setMenuList] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const initLoadMenu = useCallback(() => {
    axios
      .get(`/api/menu_setup/all`)
      .then(response => {
        setMenuList(response.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    initLoadMenu()
  }, [initLoadMenu])

  return (
    <Box sx={{ width: "500px", height: "550px", bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {menuList && menuList.map((menu, index) =>
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={`${menu.menu_name} ราคา: ${menu.menu_price||0} บาท`} />
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}

export default ChangeProductList
