import React from "react"
import Paper from "@mui/material/Paper"
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  { field: "id", headerName: "ID" },
  { field: "product_group", headerName: "Group Code" },
  { field: "menu_code", headerName: "Menu Code" },
  { field: "menu_name", headerName: "Menu Name" },
  { field: "menu_price", headerName: "Menu Price" },
  { field: "image_url", headerName: "Menu URL", width: 200 },
  { field: "auto_select", headerName: "Auto Select" },
  { field: "can_change", headerName: "Can Change" }
]

const paginationModel = { page: 0, pageSize: 5 }

const OptionalList = ({ modalList, showDeleteItem }) => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={modalList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        onRowSelectionModelChange={(data) => showDeleteItem(data)}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default OptionalList
