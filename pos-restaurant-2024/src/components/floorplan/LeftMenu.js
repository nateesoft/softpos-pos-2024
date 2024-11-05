import React, { memo } from "react"
import Grid from "@mui/material/Grid2"
import { Box, Typography } from "@mui/material"

const LeftMenu = memo(() => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <aside>
      <div className="description" style={{ color: "#aaa" }}>TABLE LAYOUT</div>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "2px solid", borderRadius: "50%", height: '110px' }} onDragStart={(event) => onDragStart(event, "oval")}
            draggable>
            <Typography variant="h5">โต๊ะกลม</Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "2px solid", height: '110px' }} onDragStart={(event) => onDragStart(event, "square")}
            draggable>
            <Typography variant="h5">โต๊ะเหลี่ยม</Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "2px solid", height: '50px' }} onDragStart={(event) => onDragStart(event, "long")}
            draggable>
            <Typography variant="h5">แนวยาว</Typography>
          </Box>
        </Grid>
        <Grid size={12} display="flex" justifyContent="center" textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "2px solid", height: '110px', width: '50px' }} onDragStart={(event) => onDragStart(event, "tall")}
            draggable>
            <Typography variant="h5">แนวตั้ง</Typography>
          </Box>
        </Grid>
      </Grid>
    </aside>
  )
})

export default LeftMenu
