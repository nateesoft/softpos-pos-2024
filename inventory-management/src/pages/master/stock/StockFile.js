import React, { useState } from "react"
import { Button, Container, Grid2, Typography } from "@mui/material"
import { JsonForms } from "@jsonforms/react"
import { materialCells } from "@jsonforms/material-renderers"
import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { useNavigate } from "react-router-dom"

import { renderers } from "../../../jsonforms/renderers"

import schema from "./schema.json"
import uischema from "./uischema.json"
import initData from "./data.json"

const StockFile = () => {
  const [data, setData] = useState(initData)

  const navigate = useNavigate()

  const handleClick = (event, setValue) => {
    setValue(event.currentTarget)
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        กำหนดรายการสต็อกสินค้า (Stock Setting)
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
          <Button variant="contained" color="warning" startIcon={<SaveIcon />}>
            ลบข้อมูล
          </Button>
        </Grid2>
        <Grid2 container spacing={1}>
          <Button variant="contained" startIcon={<SaveIcon />}>
            พิมพ์
          </Button>
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

export default StockFile
