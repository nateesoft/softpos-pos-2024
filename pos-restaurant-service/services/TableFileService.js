const moment = require('moment')
const pool = require('../config/database/MySqlConnect')

const updateTableAvailableStatus = async tableNo => {
    const sql = `update tablefile set TOnact='N', Cashier=null where TCode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateTableOpenStatus = async (tableNo, Cashier, TUser) => {
    const sql = `update tablefile 
    set TOnact='Y', Cashier='${Cashier}', TUser=${TUser} 
    where TCode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateMember = async (memberInfo, tableNo) => {
    const memBegin = moment(memberInfo.Member_AppliedDate).format('YYYY-MM-DD')
    const memEnd = moment(memberInfo.Member_ExpiredDate).format('YYYY-MM-DD')
    const sql = `UPDATE tablefile SET 
    MemCode='${memberInfo.Member_Code}',
    MemName='${memberInfo.Member_NameThai}',
    MemBegin='${memBegin}',
    MemEnd='${memEnd}' 
    WHERE Tcode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const getTableByCode = async tableNo => {
    const sql = `select * from tablefile where TCode='${tableNo}' limit 1`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const checkTableOpen = async (tableNo) => {
    const sql = `select Cashier, TUser from tablefile where TOnact='Y' and TCode='${tableNo}'`;
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
    checkTableOpen,
    updateMember
}
