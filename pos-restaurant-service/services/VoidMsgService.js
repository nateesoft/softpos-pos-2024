const pool = require('../config/database/MySqlConnect')

const getVoidMsg = async () => {
    const sql = `select * from voidmsg order by VCode`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getVoidMsg
}
