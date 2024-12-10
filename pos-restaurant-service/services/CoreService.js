const pool = require('../config/database/MySqlConnect')

const { PrefixZeroFormat } = require('../utils/StringUtil')

const getBalanceByRIndex = async R_Index => {
    const sql = `select * from balance 
    where R_Index='${R_Index}' order by R_Table, R_Index`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getBalanceMaxIndex = async tableNo => {
    const sql = `select max(R_Index) R_Index from balance 
    where R_Table='${tableNo}' order by r_index`;
    const results = await pool.query(sql)

    let id = 1
    let index = tableNo + "/001"; // default

    if (results.length > 0) {
        const R_Index = results[0].R_Index
        if (R_Index) {
            let data = R_Index.split("/");
            id = parseInt(data[1]) + 1

            index = tableNo + "/" + PrefixZeroFormat(id, 3)
        }
    }

    return index
}

const updateBalanceMove = async (balanceData, sourceTableNo) => {
    const sql = `update balance set 
    R_Table='${balanceData.R_Table}',
    R_Index='${balanceData.R_Index}', 
    R_MoveFrom='${balanceData.R_MoveFrom}' 
    where R_Table='${sourceTableNo}' and R_Index='${balanceData.R_MoveFrom}'`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getBalanceByRIndex,
    updateBalanceMove,
    getBalanceMaxIndex
}