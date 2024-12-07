const pool = require('../config/database/MySqlConnect')

const getEmployeeByCode = async (code) => {
    const sql = `select code,name from employ where Code='${code}' limit 1`
    const results = await pool.query(sql)
    if (results.length > 0) {
        return {
            pinValid: true
        }
    }
    return {
        pinValid: false
    }
}

module.exports = {
    getEmployeeByCode
}
