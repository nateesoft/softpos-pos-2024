import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Background, BackgroundVariant, Controls, ReactFlow, ReactFlowProvider, useNodesState } from '@xyflow/react';
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { Box, Modal } from '@mui/material';

import '@xyflow/react/dist/style.css';

import RoundNode from "./nodes/RoundNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"
import LeftMenu from './LeftMenu';

import "./index.css"
import ResizeNode from './nodes/ResizeNode';
import AppbarMenu from './AppbarMenu'
import TableSetup from './modal/TableSetup'

const nodeTypes = {
    round: RoundNode,
    square: SquareNode,
    long: LongNode,
    tall: TallNode,
    resize: ResizeNode
}
const floorPlanId = "floorPlanId"
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

const FutureFloorplan = () => {
    const navigate = useNavigate();
    const reactFlowWrapper = useRef(null)
    const [tableInfo, setTableInfo] = useState({})
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [reactFlowInstance, setReactFlowInstance] = useState(null)
    const [openTableSetup, setOpenTableSetup] = useState(false)

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
        setTableInfo(node)
        setOpenTableSetup(true)
    }

    const onSave = () => {
        if (reactFlowInstance) {
            const flow = reactFlowInstance.toObject()
            localStorage.setItem(floorPlanId, JSON.stringify(flow))
        }
    }

    const onExit = () => {
        navigate('/floorplan')
    }

    const handleCloseModal = () => {
        setOpenTableSetup(false)
        setTableInfo({})
    }

    const onTableInfoChange = (props) => {
        const updNode = {
            ...tableInfo,
            data: {
                ...props
            }
        }
        setNodes(nds => nds.concat(updNode))
    }

    const onRestore = useCallback(() => {
        const flow = JSON.parse(localStorage.getItem(floorPlanId))
        if (flow) {
            setNodes(flow.nodes || [])
        }
    }, [setNodes])

    useEffect(() => {
        console.log('FutureFLoorplan(init)')
        onRestore()
    }, [onRestore])

    return (
        <motion.div className="dndflow" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AppbarMenu onSave={onSave} onExit={onExit} />
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
                        fitView
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
                        onChange={onTableInfoChange}
                        closeModal={handleCloseModal} />
                </Box>
            </Modal>
        </motion.div>
    );
}

export default FutureFloorplan
