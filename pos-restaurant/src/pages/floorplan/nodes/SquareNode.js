import { useContext } from "react"

import { POSContext } from "../../../AppContext"

const style = {
  border: "1px solid #aaa",
  boxShadow: "2px 2px chocolate",
  borderRadius: "10px"
}

const SquareNode = (props) => {
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const { data, bgColor } = props
  const displayImage = data.image ? `/${baseName}${data.image}` : `/${baseName}/images/floorplan/rectangle-table.png`
  return (
    <div align="center" style={{ width: "128px" }}>
      <img src={displayImage} width={128} alt="" />
      {data.label && (
        <div style={{ ...style, backgroundColor: data.bgColor ?? "blue" }}>
          <span
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            {data.label}
          </span>{" "}
          &nbsp;
          <span style={{ color: "yellow" }}>({data.customer})</span>
        </div>
      )}
    </div>
  )
}

export default SquareNode
