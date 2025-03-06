import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import ErrorBox from '@mui/icons-material/Error'
import CloseIcon from '@mui/icons-material/Cancel'
import OkIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #eee",
    boxShadow: 24
}

export const ModalInfo = ({ open, setOpen, header = "Header", content = "Show Content" }) => {
    return <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description" disableEscapeKeyDown>
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
            <Box display="flex" justifyContent="right">
                <Button variant='text' sx={{ fontSize: "18px" }} color="error" onClick={() => setOpen(false)}>X</Button>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ marginTop: "20px" }}>
                <ErrorBox color='error' fontSize='large' />
            </Box>
            <Box display="flex" justifyContent="center" sx={{ padding: "10px", margin: "10px" }}>
                <Typography variant='h5'>{header}</Typography>
            </Box>
            <Box display="flex" textAlign="center" sx={{ padding: "10px", margin: "10px" }}>
                {content}
            </Box>
            <Box display="flex" justifyContent="center">
                <Button variant='contained' color='error' onClick={() => setOpen(false)}>Close</Button>
            </Box>
        </Box>
    </Modal>
}

export const ModalConfirm = ({ open, setOpen, onSubmit, header = "Header", content = "Show Content" }) => {
    return <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description" disableEscapeKeyDown>
        <Box sx={{ ...modalStyle, width: 450, borderRadius: "5px" }}>
            <Box display="flex" justifyContent="space-between" sx={{ background: "radial-gradient(circle, #123456, #000)", borderRadius: "5px" }}>
                <Button variant='text' sx={{ color: "snow", fontWeight: "bold", marginLeft: "10px" }} startIcon={<HelpIcon sx={{color: "snow"}} />}>POS Restuarant</Button>
                <Button variant='text' color="error" onClick={() => setOpen(false)}>
                    <CloseIcon fontSize="large" />
                </Button>
            </Box>
            <Box margin={5}>
                <Box display="flex" justifyContent="center" sx={{ padding: "10px", margin: "10px" }}>
                    <Typography variant='h5'>{header}</Typography>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ padding: "10px", margin: "10px" }}>
                    {content}
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#eee", padding: "10px", borderRadius: "5px" }}>
                <Box display="flex" justifyContent="center">
                    <Button variant='contained' color='error' startIcon={<CloseIcon />} onClick={() => setOpen(false)} sx={{ marginRight: "10px" }}>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={() => onSubmit()} startIcon={<OkIcon />}>OK</Button>
                </Box>
            </Box>
        </Box>
    </Modal>
}