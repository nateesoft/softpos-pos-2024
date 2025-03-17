import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, IconButton, Button, Grid2, Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const EditableTable = ({ tabName }) => {
  const [rows, setRows] = useState([]);

  const [editRowData, setEditRowData] = useState(null);
  const [error, setError] = useState("");

  // แก้ไขข้อมูล
  const handleEdit = (index) => {
    setEditRowData({ ...rows[index] });
    setRows(rows.map((row, i) => (i === index ? { ...row, isEditing: true } : row)));
    setError("");
  };

  // ยกเลิกการแก้ไข
  const handleCancel = (index) => {
    setRows(rows.map((row, i) => (i === index ? { ...row, isEditing: false } : row)));
    setEditRowData(null);
    setError("");
  };

  // บันทึกข้อมูล
  const handleSave = (index) => {
    if (!editRowData.name || !editRowData.email || isNaN(editRowData.age)) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วนและอายุต้องเป็นตัวเลข");
      return;
    }
    setRows(rows.map((row, i) => (i === index ? { ...editRowData, isEditing: false } : row)));
    setEditRowData(null);
    setError("");
  };

  // อัปเดตค่าตอนพิมพ์
  const handleInputChange = (e, field) => {
    setEditRowData({ ...editRowData, [field]: e.target.value });
  };

  // เพิ่มแถวใหม่
  const handleAddRow = () => {
    const newRow = { 
      id: "",
      menu_id: "",
      menu_code: "",
      menu_name: "",
      menu_number: "",
      menu_type: "",
      menu_status: "",
      show_list_menu: "",
      ref_menu: "",
      auto_select: "",
      can_change: "",
      min_count_set: "",
      max_count_set: "",
      menu_free: "",
      percent_discount: "",
      manual_discount: "",
      image_url: "",
      tab_group: "",
      menu_price: "",
      product_group: "",
      manual_price: "",
      isEditing: true 
    };
    setRows([...rows, newRow]);
    setEditRowData(newRow);
  };

  // ลบแถว
  const handleDeleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <Grid2>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddRow} sx={{ mb: 2 }}>
        เพิ่มเมนู ({tabName})
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>menu_id</TableCell>
              <TableCell>menu_code</TableCell>
              <TableCell>menu_name</TableCell>
              <TableCell>menu_number</TableCell>
              <TableCell>menu_type</TableCell>
              <TableCell>menu_status</TableCell>
              <TableCell>show_list_menu</TableCell>
              <TableCell>ref_menu</TableCell>
              <TableCell>auto_select</TableCell>
              <TableCell>can_change</TableCell>
              <TableCell>min_count_set</TableCell>
              <TableCell>max_count_set</TableCell>
              <TableCell>menu_free</TableCell>
              <TableCell>percent_discount</TableCell>
              <TableCell>manual_discount</TableCell>
              <TableCell>image_url</TableCell>
              <TableCell>tab_group</TableCell>
              <TableCell>menu_price</TableCell>
              <TableCell>product_group</TableCell>
              <TableCell>manual_price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_id}
                      onChange={(e) => handleInputChange(e, "menu_id")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_id
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_code}
                      onChange={(e) => handleInputChange(e, "menu_code")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_code
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_name}
                      onChange={(e) => handleInputChange(e, "menu_name")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_name
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_number}
                      onChange={(e) => handleInputChange(e, "menu_number")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_number
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_type}
                      onChange={(e) => handleInputChange(e, "menu_type")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_type
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_status}
                      onChange={(e) => handleInputChange(e, "menu_status")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_status
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.show_list_menu}
                      onChange={(e) => handleInputChange(e, "show_list_menu")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.show_list_menu
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.ref_menu}
                      onChange={(e) => handleInputChange(e, "ref_menu")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.ref_menu
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.auto_select}
                      onChange={(e) => handleInputChange(e, "auto_select")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.auto_select
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.can_change}
                      onChange={(e) => handleInputChange(e, "can_change")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.can_change
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.min_count_set}
                      onChange={(e) => handleInputChange(e, "min_count_set")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.min_count_set
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.max_count_set}
                      onChange={(e) => handleInputChange(e, "max_count_set")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.max_count_set
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_free}
                      onChange={(e) => handleInputChange(e, "menu_free")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_free
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.percent_discount}
                      onChange={(e) => handleInputChange(e, "percent_discount")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.percent_discount
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.manual_discount}
                      onChange={(e) => handleInputChange(e, "manual_discount")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.manual_discount
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.image_url}
                      onChange={(e) => handleInputChange(e, "image_url")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.image_url
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.tab_group}
                      onChange={(e) => handleInputChange(e, "tab_group")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.tab_group
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.menu_price}
                      onChange={(e) => handleInputChange(e, "menu_price")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.menu_price
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.product_group}
                      onChange={(e) => handleInputChange(e, "product_group")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.product_group
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={editRowData.manual_price}
                      onChange={(e) => handleInputChange(e, "manual_price")}
                      onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                      autoFocus
                    />
                  ) : (
                    row.manual_price
                  )}
                </TableCell>

                {/* Actions Column */}
                <TableCell align="center">
                  {row.isEditing ? (
                    <>
                      <IconButton onClick={() => handleSave(index)} color="success">
                        <SaveIcon />
                      </IconButton>
                      <IconButton onClick={() => handleCancel(index)} color="error">
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(index)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteRow(index)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && <TableCell align="center" colSpan={4}><Typography>ยังไม่มีเมนูอาหาร</Typography></TableCell>}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  );
};

export default EditableTable;
