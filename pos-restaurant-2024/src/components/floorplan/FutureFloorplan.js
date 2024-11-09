import React, { useCallback, useRef, useState } from 'react';
import { addEdge, Background, Controls, MarkerType, MiniMap, ReactFlow, ReactFlowProvider, useEdgesState, useNodesState } from '@xyflow/react';
import { motion } from 'framer-motion'

import '@xyflow/react/dist/style.css';

import OvalNode from "./nodes/OvalNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"
import LeftMenu from './LeftMenu';

import "./index.css"

const nodeTypes = {
    oval: OvalNode,
    square: SquareNode,
    long: LongNode,
    tall: TallNode
}

const FutureFloorplan = () => {
    const reactFlowWrapper = useRef(null)
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [reactFlowInstance, setReactFlowInstance] = useState(null)
    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge(
                    {
                        ...params,
                        label: "",
                        type: "smoothstep",
                        markerEnd: { type: MarkerType.Arrow }
                    },
                    eds
                )
            ),
        [setEdges]
    )

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

            const newNode = {
                id: `node_${Math.random().toString(36).substring(2, 8)}`,
                type,
                position,
                style: {
                    width: 80,
                    height: 50
                }
            }

            setNodes((nds) => nds.concat(newNode))
        },
        [reactFlowInstance, setNodes]
    )

    const onNodeClick = () => {
        nodes.forEach((node) => {
            if (node.selected) {
                console.log(node)
            }
        })
    }

    return (
        <motion.div className="dndflow" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LeftMenu />
            <ReactFlowProvider>
                <div
                    className="reactflow-wrapper"
                    ref={reactFlowWrapper}
                    style={{ height: "80vh" }}
                >
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onNodeClick={onNodeClick}
                        nodeTypes={nodeTypes}
                        fitView
                    >
                        <Controls />
                        <MiniMap zoomable pannable />
                        <Background />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </motion.div>

    );
}

export default FutureFloorplan
