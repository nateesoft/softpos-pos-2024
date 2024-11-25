const pool = require('../config/database/MySqlConnect')
const { PrefixZeroFormat, Unicode2ASCII } = require('../utils/StringUtil');

const { getProductByPCode } = require('./ProductService');

const getTotalBalance = async (tableNo) => {
    const sql = `select sum(R_Total) R_Total from balance where R_Table='${tableNo}'`;
    console.log('getAllBalance:', sql)
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0].R_Total
    }

    return 0.00
}

const getAllBalance = async () => {
    const sql = `select * from balance`;
    console.log('getAllBalance:', sql)
    const results = await pool.query(sql)
    return results
}

const getBalanceByTableNo = async tableNo => {
    const sql = `select * from balance where R_Table='${tableNo}'`;
    console.log('getBalanceByTableNo:', sql)
    const results = await pool.query(sql)
    return results
}

const getBalanceMaxIndex = async tableNo => {
    const sql = `select max(R_Index) R_Index from balance where R_Table='${tableNo}' order by r_index`;
    console.log('getBalanceMaxIndex:', sql)
    const results = await pool.query(sql)

    let id = 1
    let index = tableNo + "/001"; // default

    if (results) {
        const R_Index = results[0].R_Index
        if (R_Index) {
            let data = R_Index.split("/");
            id = parseInt(data[1]) + 1

            index = tableNo + "/" + PrefixZeroFormat(id, 3)
        }
    }

    return index
}

const emptyTableBalance = async tableNo => {
    const sql = `delete from balance where R_Table='${tableNo}'`;
    console.log('emptyTableBalance:', sql)
    const results = await pool.query(sql)
    return results
}

const updatePrint2Kic = async tableNo => {
    const sql = `update balance set TranType='PDA', R_Pause='P' where R_Table='${tableNo}'`;
    console.log('updatePrint2Kic:', sql)
    const results = await pool.query(sql)
    return results
}

const updateBalanceQty = async (tableNo, rIndex, qty) => {
    if (qty === 0) {
        const sql = `delete from balance 
        where R_Table='${tableNo}' 
        and R_Index='${rIndex}' 
        and R_Pause <> 'P' `;
        console.log('updateBalanceQty(delete):', sql)
        const result = await pool.query(sql)
        return result
    } else {
        const sql = `update balance set R_Quan=${qty} 
        where R_Table='${tableNo}' 
        and R_Index='${rIndex}' 
        and R_Pause <> 'P'`
        console.log('updateBalanceQty(update):', sql)
        const result = await pool.query(sql)
        return result
    }
}

const addNewBalance = async payload => {
    const { tableNo, menuInfo, qty, macno, userLogin, empCode } = payload
    const posProduct = await getProductByPCode(menuInfo.menu_code)

    const R_Index = await getBalanceMaxIndex(tableNo)
    const R_Table = tableNo
    const R_PluCode = menuInfo.menu_code
    const R_PName = Unicode2ASCII(menuInfo.menu_name)
    const R_Quan = qty
    const R_Price = menuInfo.menu_price
    const R_Total = menuInfo.menu_price * qty
    const R_PrBath = 0
    const R_PrAmt = 0
    const R_DiscBath = 0
    const R_PrCuQuan = 0
    const R_PrCuAmt = 0
    const R_Redule = 0
    const R_Serve = ""
    const R_PrintOK = ""
    const R_KicOK = ""
    const StkCode = posProduct.PStock
    const PosStk = ""
    const R_Order = ""
    const R_PItemNo = 0
    const R_PKicQue = 0
    const R_MemSum = ""
    const R_PrVcAmt = 0
    const R_PrVcAdj = 0
    const R_VoidQuan = 0
    const R_MoveFlag = ""
    const R_MovePrint = ""
    const R_Pause = ""
    const R_SPIndex = ""
    const R_Earn = ""
    const R_SeparateFrom = ""
    const Macno = macno
    const Cashier = userLogin
    const R_Emp = empCode
    const R_ETD = "E"
    const TranType = ""
    const R_KicPrint = ""
    const R_Void = ""
    const R_Kic = posProduct.PKic
    const R_Type = posProduct.PType
    try {
        const sql = `INSERT INTO balance 
              ( R_Index,R_Table,R_PluCode,R_PName,R_Quan,R_Price,R_Total,R_PrBath,R_PrAmt,R_DiscBath,
                R_PrCuQuan,R_PrCuAmt,R_Redule,R_Serve,R_PrintOK,R_KicOK,StkCode,PosStk,R_Order,R_PItemNo,
                R_PKicQue,R_MemSum,R_PrVcAmt,R_PrVcAdj,R_VoidQuan,R_MoveFlag,R_MovePrint,R_Pause,R_SPIndex,R_Earn,
                R_SeparateFrom,R_Date, R_Time, macno, Cashier, R_Emp, R_ETD, TranType, R_KicPrint, R_Void, R_Kic,
                R_Type) 
                VALUES (
              ?,?,?,?,?,?,?,?,?,?,
              ?,?,?,?,?,?,?,?,?,?,
              ?,?,?,?,?,?,?,?,?,?,
              ?, curdate(), SUBSTR(now(), 12), 
              ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        console.log('addNewBalance:', sql)
        const results = await pool.query(sql,
            [R_Index, R_Table, R_PluCode, R_PName, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt,
                R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum,
                R_PrVcAmt, R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom,
                Macno, Cashier, R_Emp, R_ETD, TranType, R_KicPrint, R_Void, R_Kic, R_Type])
        return results
    } catch (error) {
        console.log('addNewBalance', error)
        return null
    }
}

module.exports = {
    getAllBalance,
    getBalanceByTableNo,
    emptyTableBalance,
    updatePrint2Kic,
    getBalanceMaxIndex,
    addNewBalance,
    updateBalanceQty,
    getTotalBalance
}
