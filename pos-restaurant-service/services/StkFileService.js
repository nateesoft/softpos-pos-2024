const pool = require('../config/database/MySqlConnect')

const getStkFile = async () => {
    const sql = `select * from stkfile`;
    console.log('getStkFile:', sql)
    const results = await pool.query(sql)
    return results
}

const getStkFileByBPCode = async (BPCode) => {
    const sql = `select * from stkfile where BPCode='${BPCode}'`;
    console.log('getStkFileByBPCode:', sql)
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getStkFile,
    getStkFileByBPCode
}
