import React, { useState } from "react"
import Grid from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { Button, Modal, Typography } from "@mui/material"
import TelephoneIcon from "@mui/icons-material/Phone"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import Moment from "react-moment"

import MemberInfoModal from "./MemberInfoModal"

const baseName = process.env.REACT_APP_BASE_NAME

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

const PointFormat = (data) => {
  return parseInt(data).toLocaleString("en", { minimumFractionDigits: 0 })
}

const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const MemberInfo = ({ tableNo, memberInfo, setMemberInfo }) => {
  const [openMember, setOpenMember] = useState(false)
  return (
    <Paper
      elevation={3}
      sx={{ margin: "5px", background: "#123456", boxShadow: "3px 4px black" }}
    >
      <Grid container justifyContent="center" spacing={1} padding={1}>
        <img src={`/${baseName}/images/profile_crm.png`} alt="" />
        <Button
          variant="outlined"
          sx={{ color: "snow" }}
          onClick={() => setOpenMember(true)}
          endIcon={<PersonSearchIcon fontSize="large" />}
        >
          เลือกสมาชิก
        </Button>
      </Grid>
      {memberInfo.Member_Code && (
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{ border: "1px solid snow", boxShadow: "3px 4px black" }}
        >
          <Grid padding={1}>
            <Typography
              variant="p"
              sx={{ color: "white", background: "purple", padding: "5px" }}
            >
              ( ข้อมูลส่วนตัว )
            </Typography>
            <Box sx={{ borderBlock: "2px solid white" }}>
              <Typography style={{ color: "white" }}>
                {memberInfo.Member_NameThai}
              </Typography>
              <Typography style={{ color: "white" }}>
                วันเกิด{" "}
                <Moment format="DD/MM/YYYY" date={memberInfo.Member_Brithday} />
              </Typography>
              <Grid container spacing={1}>
                <TelephoneIcon sx={{ color: "yellow" }} />
                <Typography style={{ color: "yellow" }}>
                  Tel. {memberInfo.Member_Mobile}
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid padding={1}>
            <Typography
              variant="p"
              sx={{ color: "white", background: "green", padding: "5px" }}
            >
              <u>คะแนนสะสม</u>
            </Typography>
            <Box sx={{ borderBlock: "2px solid yellow" }}>
              <Typography style={{ color: "white" }}>
                วันที่สมัคร:{" "}
                <Moment
                  format="DD/MM/YYYY"
                  date={memberInfo.Member_AppliedDate}
                />
              </Typography>
              <Typography style={{ color: "white" }}>
                คะแนน {PointFormat(memberInfo.Member_TotalScore)}
              </Typography>
              <Typography style={{ color: "white" }}>
                ยอดซื้อ {NumFormat(memberInfo.Member_TotalPurchase)} บาท
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
      <Modal open={openMember} onClose={() => setOpenMember(false)}>
        <Box sx={{ ...modalStyle, width: "80%" }}>
          <MemberInfoModal
            setClose={() => setOpenMember(false)}
            setMemberInfo={setMemberInfo}
            tableNo={tableNo}
          />
        </Box>
      </Modal>
    </Paper>
  )
}

export default MemberInfo
