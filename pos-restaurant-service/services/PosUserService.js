const pool = require('../config/database/MySqlConnect')

const checkLogin = async (username, password, macno) => {
    const sql = `select * from posuser 
        where username='${username}' and password='${password}' `
    const results = await pool.query(sql)
    if (results.length > 0) {
        const sqlUpdate = `update posuser 
        set onact='Y', macno='${macno}' where username='${username}'`
        await pool.query(sqlUpdate)
        
        return results[0]
    }
    return null
}

const processLogout = async (username) => {
    const sqlUpdate = `update posuser set onact='N' where username='${username}'`
    const result = await pool.query(sqlUpdate)

    return result
}

const getAllData = async () => {
    const sql = `select * from posuser limit 1`;
    const results = await pool.query(sql)
    return results
}

const getDataByUserName = async (username) => {
    const sql = `select * from posuser where username='${username}'`
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

module.exports = {
    getAllData,
    getDataByUserName,
    checkLogin,
    processLogout
}
