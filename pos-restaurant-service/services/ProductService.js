const pool = require('../config/database/MySqlConnect')

const getProductByPCode = async pcode => {
    const sql = `select * from product where PCode='${pcode}'`;
    console.log('getProductByPCode:', sql)
    const results = await pool.query(sql)
    if (results) {
        return results[0]
    }
    return results
}

module.exports = {
    getProductByPCode
}
