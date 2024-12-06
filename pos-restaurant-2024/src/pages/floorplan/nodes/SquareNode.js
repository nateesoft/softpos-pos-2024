const style = { border: "1px solid #aaa", boxShadow: "2px 2px chocolate", borderRadius: "10px" }

function SquareNode({ data, bgColor }) {
  return (
    <div align="center" style={{ width: "128px" }}>
      <img src={data.image ?? "/images/floorplan/rectangle-table.png"} width={128} alt="" />
      {data.label &&
        <div style={{...style, backgroundColor: bgColor ?? "blue"}}>
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>{data.label}</span> &nbsp;
          <span style={{color: "yellow"}}>({data.customerCount})</span>
        </div>}
    </div>
  )
}

export default SquareNode
