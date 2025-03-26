const style = {
  border: "1px solid #aaa",
  boxShadow: "2px 2px chocolate",
  borderRadius: "10px"
}

const baseName = process.env.REACT_APP_BASE_NAME

const SquareNode = (props) => {
  const { data, bgColor } = props
  return (
    <div align="center" style={{ width: "128px" }}>
      <img
        src={`/${baseName}${data.image}` ?? `/${baseName}/images/floorplan/rectangle-table.png`}
        width={128}
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

export default SquareNode
