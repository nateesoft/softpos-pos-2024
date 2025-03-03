const pool = require("../config/database/MySqlConnect")
const { ASCII2Unicode } = require("../utils/StringUtil")

const getDataCupon = async () => {
  const date = new Date()
  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "short" })
  const EE = formatter.format(date) // "Sun", "Mon", etc.

  const sql = `select * from cupon 
      where (curdate()>=cubegin) and (curdate()<=cuend) 
      and (cutype is not null) and (cucode is not null) 
      and CuStrDay like '%${EE}%' 
      and ChkMember='N' 
      order by cutype,cucode`
  const results = await pool.query(sql)
  const mappingResult = results.map((item, index) => {
    return {
      ...item,
      CuName: ASCII2Unicode(item.CuName),
      qty: 0
    }
  })
  return mappingResult
}

const saveData = async (payload, tableNo, macNo, cashier) => {
  const R_Index = tableNo+macNo
  const Time = ""
  const { CuCode, qty } = payload
  const CuAmt = qty * CuDiscBath
  const sql = `INSERT INTO tempcupon
    (R_Index, R_Table, Terminal, Cashier, \`Time\`, 
    CuCode, CuQuan, CuAmt, CuTotal, CuDisc, CuRedule, CuPayment, CuTextCode, 
    CuTextComment, CuEntertainFlag, CuEntertainUser)
    VALUES('${R_Index}', '${tableNo}', '${macNo}', '${cashier}', '${Time}', 
    '${CuCode}', ${qty}, ${CuAmt}, 0, 0, 0, 0, '', '', '', '');`
  await pool.query(sql)
}

const saveDataCupon = async (payload) => {
  const { cuponList, cashier, tableNo, macNo } = payload
  // clear tempcupon
  await pool.query(`delete from tempcupon where R_Index='${tableNo+macNo}'`)

  cuponList.forEach(async (cupon, index) => {
    await saveData(cupon, tableNo, macNo, cashier)
  })
}

module.exports = {
  getDataCupon,
  saveDataCupon
}
