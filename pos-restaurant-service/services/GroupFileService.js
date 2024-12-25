const pool = require('../config/database/MySqlConnect')

const getAllGroup = async () => {
    const sql = `select GroupCode, GroupName 
    from groupfile order by GroupCode`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getAllGroup
}
