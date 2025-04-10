import { useContext } from "react"
import { POSContext } from "../../../AppContext"

const style = {
  border: "1px solid #aaa",
  boxShadow: "2px 2px chocolate",
  borderRadius: "10px"
}

function RoundNode(props) {
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const { data, bgColor } = props
  return (
    <div align="center" style={{ width: "256px" }}>
      <img
        src={`/${baseName}${data.image}` ?? `/${baseName}/images/floorplan/oval-table.png`}
        width={200}
        alt=""
      />
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

export default RoundNode
