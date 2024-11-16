import React from 'react'
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { motion } from 'framer-motion'
import axios from 'axios'

import { handleEnter } from '../../util/EventLisener'
import bg from "./bg/welcome.jpg";
import bgimg from "./bg/bgbg.jpg";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "70%",
    boxShadow: 24,
};


export default function Login() {
    const [open, setOpen] = useState(false);
    const [remember, setRemember] = useState(false);
    const vertical = "top";
    const horizontal = "right";
    const macno = localStorage.getItem('macno')

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        setOpen(true);
        event.preventDefault();

        axios.post("/api/posuser/login", {username: user, password, macno: "001"})
        .then((response) => {
            if (response.data.code === 200) {
                if(response.data.data.length >0){
                    localStorage.setItem('pos_login', user)
                    navigate("/floorplan");
                } else {
                    setOpen(true)
                }
            } else {
                setOpen(true)
            }
        })
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                TransitionComponent={TransitionLeft}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                    Failed! Enter correct username and password.
                </Alert>
            </Snackbar>
            <div
                style={{
                    background: `url(${bgimg}) no-repeat center center fixed`,
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100vw",
                    color: "#f5f5f5"
                }}
            >
                <Box sx={boxstyle}>
                    <Grid container>
                        <Grid item xs={12} sm={6} lg={6}>
                            <Box
                                style={{
                                    background: `url(${bg}) no-repeat center center fixed`,
                                    backgroundSize: "cover",
                                    height: "100%",
                                    width: "100%",
                                    color: "#f5f5f5",
                                    borderRadius: "10px 0px 0px 0px"
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <Box
                                style={{
                                    backgroundSize: "cover",
                                    height: "70vh",
                                    minHeight: "500px",
                                    backgroundColor: "#123456",
                                    borderRadius: "0px 0px 10px 0px"
                                }}
                            >
                                <ThemeProvider theme={darkTheme}>
                                    <Container>
                                        <Box height={35} />
                                        <Box display="flex" justifyContent="center">
                                            <Typography component="h1" variant="h4">
                                                POS Restaurant
                                            </Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="center">
                                            {macno && <Typography variant='p' sx={{color: "yellow"}}>- หมายเลขเครื่อง {macno} -</Typography>}
                                            {!macno && <Typography variant='p' sx={{color: "red"}}>( ไม่พบหมายเลขเครื่อง !!! )</Typography>}
                                        </Box>
                                        <Box
                                            component="form"
                                            noValidate
                                            onSubmit={handleSubmit}
                                            sx={{ mt: 2 }}
                                        >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Username"
                                                        name="email"
                                                        value={user}
                                                        onChange={e => setUser(e.target.value)}
                                                        autoComplete="email"
                                                        autoFocus
                                                        onKeyDown={(e) => handleEnter(e)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="new-password"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <FormControlLabel
                                                            sx={{ width: "60%" }}
                                                            onClick={() => setRemember(!remember)}
                                                            control={<Checkbox checked={remember} />}
                                                            label="Remember"
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            onClick={() => {
                                                                navigate("/reset-password");
                                                            }}
                                                            style={{ marginTop: "10px", cursor: "pointer" }}
                                                        >
                                                            Forgot ?
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth="true"
                                                        size="large"
                                                        sx={{
                                                            mt: "10px",
                                                            mr: "20px",
                                                            borderRadius: 28,
                                                            color: "#ffffff",
                                                            minWidth: "170px",
                                                            backgroundColor: "#FF9A01",
                                                        }}
                                                    >
                                                        Login
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <span
                                                            style={{ color: "#beb4fb", cursor: "pointer" }}
                                                            onClick={() => {
                                                                navigate("/register");
                                                            }}
                                                        >
                                                            Create an Account
                                                        </span>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Container>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </motion.div>
    );
}
