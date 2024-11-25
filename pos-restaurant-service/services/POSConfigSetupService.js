const pool = require('../config/database/MySqlConnect')

const getPOSConfigSetup = async () => {
    const sql = `select * from posconfigsetup limit 1`;
    console.log('getDataCompany:', sql)
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

module.exports = {
    getPOSConfigSetup
}
