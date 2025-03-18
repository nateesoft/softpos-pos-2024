import React, { memo } from "react"
import { rankWith, uiTypeIs } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"

const TableControl = withJsonFormsControlProps((props) => {
  const dataGrid = props.uischema.options
  let columns = []
  let rows = []

  if(dataGrid && dataGrid.columns){
    columns = dataGrid.columns
  }
  if(dataGrid && dataGrid.rows){
    rows = dataGrid.rows
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(item => <TableCell>{item.title}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {columns.map(item => <TableCell>{row[item.field]}</TableCell>)}
            </TableRow>
          ))}
          {rows.length===0 && 
          <TableRow>
              <TableCell align="center" colSpan={columns.length}>
                ไม่พบข้อมูล
              </TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

const customComparator = (prevProps, nextProps) => {
  return nextProps.label === prevProps.label
}

export const tableTester = rankWith(3, uiTypeIs("Table"))
export default memo(TableControl, customComparator)
