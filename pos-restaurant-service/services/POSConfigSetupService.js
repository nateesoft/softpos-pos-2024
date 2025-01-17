const pool = require('../config/database/MySqlConnect')

const getPOSConfigSetup = async () => {
    const sql = `select * from posconfigsetup limit 1`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getPOSConfigSetupByTerminal = async (terminal) => {
    const sql = `select * from posconfigsetup where P_Terminal='${terminal}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

module.exports = {
    getPOSConfigSetup,
    getPOSConfigSetupByTerminal
}
