import React, { useCallback, useRef, useState, useEffect } from "react"
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useNodesState
} from "@xyflow/react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Box, Modal } from "@mui/material"

import "@xyflow/react/dist/style.css"

import apiClient from '../../httpRequest'
import RoundNode from "./nodes/RoundNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"
import LeftMenu from "./LeftMenu"

import "./index.css"
import ResizeNode from "./nodes/ResizeNode"
import AppbarMenu from "./AppbarMenu"
import TableSetup from "./modal/TableSetup"
import ShowNotification from "../utils/ShowNotification"

const nodeTypes = {
  round: RoundNode,
  square: SquareNode,
  long: LongNode,
  tall: TallNode,
  resize: ResizeNode
}
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

const defaultViewport = { x: 400, y: 400, zoom: 0.5 };

const TableManagement = () => {
  const navigate = useNavigate()
  const reactFlowWrapper = useRef(null)
  const [tableInfo, setTableInfo] = useState({})
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [openTableSetup, setOpenTableSetup] = useState(false)
  const [selectFloor, setSelectFloor] = useState("STAND_ROOM")
  const [foundTable, setFoundTable] = useState(false)

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const type = event.dataTransfer.getData("application/reactflow")
      if (typeof type === "undefined" || !type) {
        return
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      })

      let newNode = {}

      let label = ""
      if (type === "resize") {
        label = ""
        newNode = {
          id: `node_${Math.random().toString(36).substring(2, 8)}`,
          type,
          position,
          data: { label },
          style: {
            width: 80,
            height: 50
          }
        }
      } else {
        newNode = {
          id: `node_${Math.random().toString(36).substring(2, 8)}`,
          type,
          position,
          data: { label },
          style: {
            width: 80,
            height: 50
          }
        }
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes]
  )

  const onNodeClick = (event, node) => {
    apiClient
      .get(`/api/floorplan/${node.id}`)
      .then((response) => {
        if (response.status === 200 && response.data.data != null) {
          setTableInfo({ ...node })
          setFoundTable(true)
          setOpenTableSetup(true)
        } else {
          setTableInfo({ ...node })
          setFoundTable(false)
          setOpenTableSetup(true)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const onSave = () => {
    if (reactFlowInstance) {
      console.log(reactFlowInstance)
      apiClient
        .patch(`/api/floorplan-template/${selectFloor}`, {
          template: JSON.stringify(reactFlowInstance.toObject())
        })
        .then((response) => {
          if (response.status === 200) {
            navigate("/floorplan")
          } else {
            handleNotification('พบข้อผิดพลาดในการแสดงข้อมูล!')
          }
        })
        .catch((error) => {
          handleNotification(error.message)
        })
    }
  }

  const onExit = () => {
    navigate("/floorplan")
  }

  const handleCloseModal = () => {
    setOpenTableSetup(false)
    setTableInfo({})
  }

  const handleSelect = (floor) => {
    setSelectFloor(floor)
    loadFloorPlan(floor)
  }

  const onTableInfoChange = (props) => {
    const payload = {
      id: tableInfo.id,
      table_no: props.label,
      zone: props.zone,
      customer_size: props.customerCount,
      table_image: props.image,
      table_status: props.tableStatus
    }
    if (foundTable) {
      apiClient
        .put(`/api/floorplan/${tableInfo.id}`, payload)
        .then((response) => {
          if (response.status === 200) {
            const updNode = {
              ...tableInfo,
              data: { ...props }
            }
            setNodes((nds) => nds.concat(updNode))
          } else {
            handleNotification("Error Update Floorplan Table Setup !!!")
          }
        })
        .catch((error) => {
          handleNotification(error.message)
        })
    } else {
      apiClient
        .post(`/api/floorplan`, payload)
        .then((response) => {
          if (response.status === 200) {
            const updNode = {
              ...tableInfo,
              data: { ...props }
            }
            setNodes((nds) => nds.concat(updNode))
          } else {
            handleNotification("Error Save Floorplan Table Setup !!!")
          }
        })
        .catch((error) => {
          handleNotification(error.message)
        })
    }
  }

  const loadFloorPlan = useCallback((floor) => {
    apiClient.get(`/api/floorplan-template/${floor}`)
      .then(response => {
        if (response.data.data) {
          const flow = response.data.data.template
          if (flow) {
            setNodes(flow.nodes || [])
          } else {
            setNodes([])
          }
        } else {
          setNodes([])
        }
      })
      .catch(err => handleNotification(err.message))
  }, [setNodes])

  useEffect(() => {
    loadFloorPlan(selectFloor)
  }, [loadFloorPlan, selectFloor])

  return (
    <motion.div
      className="dndflow"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppbarMenu
        onSave={onSave}
        onExit={onExit}
        selectFloor={selectFloor}
        setSelectFloor={handleSelect}
      />
      <LeftMenu />
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{
            height: "100vh"
          }}
        >
          <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            defaultViewport={defaultViewport}
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
      <Modal open={openTableSetup} onClose={() => setOpenTableSetup(false)}>
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
          <TableSetup
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            onChange={onTableInfoChange}
            closeModal={handleCloseModal}
          />
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  )
}

export default TableManagement
