import React, { forwardRef, Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Alert, Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid2, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

import OptionalList from './OptionalList'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const MenuSetupPage = ({ open, setOpen }) => {

  const [showError, setShowError] = useState(false)
  const [msgError, setMsgError] = useState("")

  const [tabGroup, setTabGroup] = useState("A")
  const [productGroup, setProductGroup] = useState("PG02")
  const [menuCode, setMenuCode] = useState("1001")
  const [menuType, setMenuType] = useState("product")
  const [menuStatus, setMenuStatus] = useState("active")

  const handleConfirm = () => {

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: "chocolate" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Menu Setup Page
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid2 container spacing={2} padding={2} direction="column">
          <Grid2 container spacing={1} size={12}>
            <FormControl sx={{ minWidth: "100px" }}>
              <InputLabel id="demo-simple-select-label">Tab Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tabGroup}
                label="Tab Group"
                onChange={e => setTabGroup(e.target.value)}
              >
                <MenuItem value={"A"}>Tab - A</MenuItem>
                <MenuItem value={"B"}>Tab - B</MenuItem>
                <MenuItem value={"C"}>Tab - C</MenuItem>
                <MenuItem value={"D"}>Tab - D</MenuItem>
                <MenuItem value={"E"}>Tab - E</MenuItem>
                <MenuItem value={"F"}>Tab - F</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Tab Title" />
            <FormControl sx={{ minWidth: "250px" }}>
              <InputLabel id="demo-simple-select-label">Product Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productGroup}
                label="Product Group"
                onChange={e => setProductGroup(e.target.value)}
              >
                <MenuItem value="PG01">PG01</MenuItem>
                <MenuItem value="PG02">PG02</MenuItem>
                <MenuItem value="PG03">PG03</MenuItem>
                <MenuItem value="PG04">PG04</MenuItem>
                <MenuItem value="PG05">PG05</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "250px" }}>
              <InputLabel id="demo-simple-select-label">Menu Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menuCode}
                label="Menu Code"
                onChange={e => setMenuCode(e.target.value)}
              >
                <MenuItem value="1001">1001</MenuItem>
                <MenuItem value="1002">1002</MenuItem>
                <MenuItem value="1003">1003</MenuItem>
                <MenuItem value="2001">2001</MenuItem>
                <MenuItem value="2002">2002</MenuItem>
                <MenuItem value="2004">2004</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Menu Number" />
          </Grid2>
          <Grid2 container spacing={1} size={12}>
            <FormControl sx={{ minWidth: "250px" }}>
              <InputLabel id="demo-simple-select-label">Menu Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menuType}
                label="Menu Type"
                onChange={e => setMenuType(e.target.value)}
              >
                <MenuItem value="product">Product</MenuItem>
                <MenuItem value="optional">Optional</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "250px" }}>
              <InputLabel id="demo-simple-select-label">Menu Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menuStatus}
                label="Menu Status"
                onChange={e => setMenuStatus(e.target.value)}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="deactive">Deactive</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 container spacing={1} size={12}>
            <FormControlLabel control={<Checkbox />} label="Show List Menu" />
            <Button variant='contained'>เลือก</Button>
          </Grid2>
          <Grid2 container spacing={1} size={12}>
            <OptionalList />
          </Grid2>
          <Grid2 container spacing={1} size={12}>
            <FormControlLabel control={<Checkbox />} label="Auto Select" />
            <FormControlLabel control={<Checkbox />} label="Can Change" />
            <FormControlLabel control={<Checkbox />} label="Free Price" />
            <FormControlLabel control={<Checkbox />} label="Manual Price" />
          </Grid2>
        </Grid2>
        {showError && <Alert severity="error">{msgError}</Alert>}
        <Box display="flex" justifyContent="center">
          <Grid2 container spacing={2} padding={2}>
            <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Reset</Button>
            <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Save</Button>
          </Grid2>
        </Box>
      </Dialog>
    </Fragment>
  );
}

export default MenuSetupPage
