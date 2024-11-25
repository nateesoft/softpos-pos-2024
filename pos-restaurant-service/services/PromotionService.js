const pool = require('../config/database/MySqlConnect')

const getAllProtab = async (pluCode) => {
    const sql = `select procode,prodesc,pdate1,pdate2,ptype,psum1 from protab`;
    console.log('getPSetByPCode:', sql)
    const results = await pool.query(sql)
    return results
}

const updatePromotion = async (tableNo, allBalance) => {
    // clear temp promotion
    await pool.query(`delete from tpromotion2 where TCode='${tableNo}'`)
    await pool.query(`delete from tpromotion3 where TCode='${tableNo}'`)
    await pool.query(`delete from tpromotion4 where TCode='${tableNo}'`)

    
}

module.exports = {
    getAllProtab,
    updatePromotion
}
