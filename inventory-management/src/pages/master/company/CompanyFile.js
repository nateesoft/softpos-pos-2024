import React, { useState } from "react"
import { Button, Container, Grid2, Typography } from "@mui/material"
import { JsonForms } from "@jsonforms/react"
import { materialCells } from "@jsonforms/material-renderers"
import PostAddIcon from "@mui/icons-material/PostAdd"
import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ListAltIcon from "@mui/icons-material/ListAlt"
import PrintIcon from "@mui/icons-material/Print"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import AssessmentIcon from "@mui/icons-material/Assessment"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import { useNavigate } from "react-router-dom"

import { renderers } from "../../../jsonforms/renderers"

import schema from "./schema.json"
import uischema from "./uischema.json"
import initData from "./data.json"

const CompanyFile = () => {
  const [data, setData] = useState(initData)

  const navigate = useNavigate()

  const handleClick = (event, setValue) => {
    setValue(event.currentTarget)
  }

  return (
    <Container maxWidth="lg" sx={{marginTop: 10}}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        กำหนดรายละเอียดบริษัท (Company File)
      </Typography>
      <Grid2
        container
        spacing={1}
        justifyContent="space-between"
        marginTop={1}
        marginBottom={1}
      >
        <Grid2 container spacing={1}>
          <Button variant="contained" color="error" startIcon={<CancelIcon />}>
            ยกเลิก
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />}>
            บันทึกข้อมูล
          </Button>
        </Grid2>
        <Grid2 container spacing={1}>
          <Button
            variant="contained"
            color="warning"
            endIcon={<ExitToAppIcon />}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Grid2>
      </Grid2>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={{}}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </Container>
  )
}

export default CompanyFile
