import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AssessmentIcon from '@mui/icons-material/Print';
import TableBarIcon from '@mui/icons-material/TableBar';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export default function AppbarMenu() {
  const navigate = useNavigate();
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const onBackFloorPlan = () => {
    navigate('/floorplan')
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <AssessmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            fontWeight: 700
          }}
        >
          Monitor รายการอาหารเข้าครัว
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Grid container spacing={1}>
          <Button variant='contained' color="info" startIcon={<TableBarIcon />} onClick={onBackFloorPlan}>Zone ร้านอาหาร</Button>
          <Button variant='contained' color="info" startIcon={<TableBarIcon />} onClick={onBackFloorPlan}>Zone บาร์น้ำ</Button>
          <Button variant='contained' color="error" endIcon={<HomeIcon />} onClick={onBackFloorPlan}>กลับหน้าหลัก</Button>
        </Grid>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}