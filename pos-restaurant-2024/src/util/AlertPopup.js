import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import QuestionMarkBox from '@mui/icons-material/QuestionMark'
import ErrorBox from '@mui/icons-material/Error'

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "16px",
    border: "1px solid #eee",
    boxShadow: 24
}

export const ModalInfo = ({ open, setOpen, header="Header", content="Show Content" }) => {
    return <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description" disableEscapeKeyDown>
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
            <Box display="flex" justifyContent="right">
                <Button variant='text' sx={{fontSize: "18px"}} color="error" onClick={() => setOpen(false)}>X</Button>
            </Box>
            <Box display="flex" justifyContent="center" sx={{marginTop: "20px"}}>
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

export const ModalConfirm = ({ open, setOpen, onSubmit, header="Header", content="Show Content" }) => {
    return <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description" disableEscapeKeyDown>
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
            <Box display="flex" justifyContent="right">
                <Button variant='text' sx={{fontSize: "18px"}} color="error" onClick={() => setOpen(false)}>X</Button>
            </Box>
            <Box display="flex" justifyContent="center" sx={{marginTop: "20px"}}>
                <QuestionMarkBox color='info' fontSize='large' />
            </Box>
            <Box display="flex" justifyContent="center" sx={{ padding: "10px", margin: "10px" }}>
                <Typography variant='h5'>{header}</Typography>
            </Box>
            <Box display="flex" textAlign="center" sx={{ padding: "10px", margin: "10px" }}>
                {content}
            </Box>
            <Box display="flex" justifyContent="center">
                <Button variant='contained' color='error' onClick={() => setOpen(false)} sx={{marginRight: "10px"}}>Close</Button>
                <Button variant='contained' color='primary' onClick={() => onSubmit()}>OK</Button>
            </Box>
        </Box>
    </Modal>
}