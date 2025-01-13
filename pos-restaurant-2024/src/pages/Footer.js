import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Grid2, Typography } from '@mui/material';

export default function FixedBottomNavigation() {

  return (
    <Box sx={{ pb: 7 }}>
      <Grid2 container 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          backgroundColor: "black", 
          padding: "10px", 
          borderTop: "1px solid #4c696b" }} 
        justifyContent="center">
        <Typography sx={{color: "snow", fontSize: "14px" }}>Copyright @SOFTPOS ( 2025-2026 )</Typography>
      </Grid2>
    </Box>
  );
}
