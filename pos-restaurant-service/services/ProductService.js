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

const getProductActiveByPCode = async pcode => {
    const sql = `select * from product where PCode='${pcode}' and pactive='Y' limit 1`;
    console.log('getProductByPCode:', sql)
    const results = await pool.query(sql)
    if (results) {
        return results[0]
    }
    return results
}

const listIngredeint = async (pluCode) => {
    const sql = `select i.*,pdesc,PBPack,pstock,pactive 
    from product p inner join pingredent i on p.pcode=i.pingcode 
    where i.pcode='${pluCode}' and PFix='L' and PStock='Y'`;
    console.log('listIngredeint:', sql)
    const results = await pool.query(sql)
    return results
}

const getPSetByPCode = async (pluCode) => {
    const sql = `select * from pset where pcode='${pluCode}'`;
    console.log('getPSetByPCode:', sql)
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getProductByPCode,
    getProductActiveByPCode,
    listIngredeint,
    getPSetByPCode
}
