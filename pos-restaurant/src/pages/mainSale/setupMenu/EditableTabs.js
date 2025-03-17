import React, { useState } from "react";
import {
  Tabs, Tab, TextField, Box, IconButton, Typography, Paper, Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditableTable from "./EditableTable";

const EditableTabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "อาหารเข้า", editable: false },
    { id: 2, title: "ของทานเล่น", editable: false },
    { id: 3, title: "อาหารจีน", editable: false },
    { id: 4, title: "อาหารอิตาเลียน", editable: false },
    { id: 5, title: "เมนูเครื่องดื่ม", editable: false },
    { id: 6, title: "เมนูของหวาน", editable: false }
  ])

  const [selectedTab, setSelectedTab] = useState(0);

  // เปลี่ยนโหมดแก้ไขชื่อแท็บ
  const toggleEditTitle = (index) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) =>
        i === index ? { ...tab, editable: !tab.editable } : tab
      )
    );
  };

  // อัปเดตชื่อแท็บ
  const handleTitleChange = (event, index) => {
    const newTitle = event.target.value;
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) => (i === index ? { ...tab, title: newTitle } : tab))
    );
  };

  // อัปเดตเนื้อหาแท็บ
  const handleContentChange = (event) => {
    const newContent = event.target.value;
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) =>
        i === selectedTab ? { ...tab, content: newContent } : tab
      )
    );
  };

  // เพิ่มแท็บใหม่
  const addNewTab = () => {
    const newTab = {
      id: `${Date.now()}`, // ใช้ timestamp เป็น ID
      title: `Tab ${tabs.length + 1}`,
      content: `This is content for Tab ${tabs.length + 1}`,
      editable: false,
    };
    setTabs([...tabs, newTab]);
    setSelectedTab(tabs.length); // เลือกแท็บใหม่ทันที
  };

  // ลบแท็บ
  const deleteTab = (index) => {
    if (tabs.length === 1) return; // ป้องกันไม่ให้ลบแท็บสุดท้าย
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    setSelectedTab(Math.max(0, index - 1)); // เลือกแท็บก่อนหน้าหลังลบ
  };

  // จัดการการลากแท็บ
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTabs = Array.from(tabs);
    const [movedTab] = reorderedTabs.splice(result.source.index, 1);
    reorderedTabs.splice(result.destination.index, 0, movedTab);

    setTabs(reorderedTabs);
    setSelectedTab(result.destination.index); // อัปเดตแท็บที่เลือกหลังจากลาก
  };

  return (
    <Box sx={{ width: "100%" }} padding={1}>
      {/* ปุ่มเพิ่มแท็บ */}
      <Button 
        disabled={tabs.length > 5}
        size="small" 
        variant="contained" 
        startIcon={<AddIcon />} 
        onClick={addNewTab} sx={{ mb: 2 }} 
        color="success">
        Add Tab
      </Button>

      {/* Drag & Drop Tabs */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tabs" direction="horizontal">
          {(provided) => (
            <Tabs
              variant="scrollable"
              value={selectedTab}
              onChange={(e, newValue) => setSelectedTab(newValue)}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tabs.map((tab, index) => (
                <Draggable key={tab.id} draggableId={tab.id} index={index}>
                  {(provided, snapshot) => (
                    <Tab
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => setSelectedTab(index)}
                      selected={selectedTab === index}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {tab.editable ? (
                            <TextField
                              value={tab.title}
                              onChange={(e) => handleTitleChange(e, index)}
                              size="small"
                              onBlur={() => toggleEditTitle(index)}
                              autoFocus
                            />
                          ) : (
                            <>
                              {tab.title}
                              <IconButton size="small" onClick={(e) => {e.stopPropagation(); toggleEditTitle(index); }}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                              {tabs.length > 1 && (
                                <IconButton size="small" onClick={(e) => {e.stopPropagation(); deleteTab(index); }}>
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              )}
                            </>
                          )}
                        </Box>
                      }
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Tabs>
          )}
        </Droppable>
      </DragDropContext>

      {/* Content Section */}
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6">{tabs[selectedTab].title}</Typography>
        <EditableTable tabName={tabs[selectedTab].title} />
      </Paper>
    </Box>
  );
};

export default EditableTabs;
