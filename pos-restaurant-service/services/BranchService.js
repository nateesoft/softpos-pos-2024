const pool = require('../config/database/MySqlConnect')

const getBranch = async () => {
    const sql = `select * from branch limit 1`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

module.exports = {
    getBranch
}
