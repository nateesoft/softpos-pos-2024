const style = {
  border: "1px solid #aaa",
  boxShadow: "2px 2px chocolate",
  borderRadius: "10px"
}

function RoundNode(props) {
  console.log("RoundNode")
  const { data, bgColor } = props
  return (
    <div align="center" style={{ width: "256px" }}>
      <img
        src={data.image ?? "/images/floorplan/oval-table.png"}
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
