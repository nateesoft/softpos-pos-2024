const pool = require('../config/database/MySqlConnect')

const getCreditFileService = async () => {
    const sql = `select * from creditfile`;
    console.log('getDataCompany:', sql)
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getCreditFileService
}
