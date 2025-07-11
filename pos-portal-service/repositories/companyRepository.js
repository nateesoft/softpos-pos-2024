const pool = require("../config/database/MySqlConnect")

const getDataCompanyByOne = async () => {
    const sql = `select * from company limit 1`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getDataCompanyByOne
}