const pool = require('../config/database/MySqlConnect')

const updateTableAvailableStatus = async tableNo => {
    const sql = `update tablefile set TOnact='N', Cashier=null where TCode='${tableNo}'`;
    console.log('updateTableAvailableStatus:', sql)
    const results = await pool.query(sql)
    return results
}

const updateTableOpenStatus = async (tableNo, Cashier, TUser) => {
    const sql = `update tablefile 
    set TOnact='Y', Cashier='${Cashier}', TUser=${TUser} 
    where TCode='${tableNo}'`;
    console.log('updateTableChheckInStatus:', sql)
    const results = await pool.query(sql)
    return results
}

const getTableByCode = async tableNo => {
    const sql = `select * from tablefile where TCode='${tableNo}' limit 1`;
    console.log('getTableByCode:', sql)
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const checkTableOpen = async (tableNo) => {
    const sql = `select Cashier, TUser from tablefile where TOnact='Y' and TCode='${tableNo}'`;
    console.log('checkTableOpen:', sql)
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

module.exports = {
    getTableByCode,
    updateTableAvailableStatus,
    updateTableOpenStatus,
    checkTableOpen
}