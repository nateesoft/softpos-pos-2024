import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid2, Typography } from '@mui/material';

const ChangeProductList = ({ optionalList, setOptionalList, subMenuSelected, setSubMenuSelected, currentMenu, closeDialog }) => {
  const newOptionList = optionalList.filter(item => (item.checked === false && item.menu_code !== currentMenu))

  // const handleListItemClick = (event, menu) => {
  //   menu.checked = true
  //   const newFilter = [...optionalList, {...menu}]
  //   console.log('newFilter:', newFilter)
  //   setOptionalList(newFilter)
  //   closeDialog()
  // };

  const handleListItemClick = (menu) => {
    const updatedCheckedState = subMenuSelected.map((item, index) => {
      const found = item.menu_code === menu.menu_code
      return found ? !item : item
    })
    setSubMenuSelected(updatedCheckedState)

    const updatedOrderListSelected = optionalList.map((item, index) => {
      if (item.menu_code === menu.menu_code) {
        const position = index
        const updatedCheckedState = subMenuSelected.map((item, index2) => index2 === position ? !item : item)
        setSubMenuSelected(updatedCheckedState)
        return {
          ...item,
          checked: true
        }
      } else {
        return {
          ...item,
          checked: updatedCheckedState[index]
        }
      }
    })
    setOptionalList(updatedOrderListSelected)
    closeDialog()
  };

  return (
    <Box sx={{ width: "500px", height: "350px", bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {newOptionList.length === 0 && <Typography variant='h5'>ไม่มีเมนูอาหารที่สามารถเปลี่ยนได้ !!!</Typography>}
        {newOptionList && newOptionList.map((menu, index) =>
          <ListItemButton onClick={() => handleListItemClick(menu)}>
            <ListItemIcon>
              <img src={menu.image_url} alt={menu.menu_name} width={100} height={100} />
            </ListItemIcon>
            <Grid2 container padding={2} spacing={2} display="flex" direction="column">
              <Typography>{menu.menu_name}</Typography>
              <Typography>ราคา: {menu.menu_price || 0} บาท</Typography>
            </Grid2>
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}

export default ChangeProductList
