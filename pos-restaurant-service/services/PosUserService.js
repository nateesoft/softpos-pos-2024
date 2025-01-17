const pool = require('../config/database/MySqlConnect')
const { decryptData } = require('../utils/StringUtil')

// const { TOPIC_NAME } = require('../config/kafka/constants');
// const kafka = require('../config/kafka/config');

const checkLogin = async (username, password, macno) => {
    const sql = `select * from posuser 
        where username='${username}' and password='${decryptData(password)}' `
    const results = await pool.query(sql)
    if (results.length > 0) {
        const sqlUpdate = `update posuser 
        set onact='Y', macno='${macno}' where username='${username}'`
        await pool.query(sqlUpdate)

        // const producer = kafka.producer()
        // const messages = [{ key: "key1", value: `User: ${username} loggedIn.` }];
        // try {
        //     await producer.connect();
        //     await producer.send({
        //         topic: TOPIC_NAME,
        //         messages: messages,
        //     });
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     await producer.disconnect();
        // }

        return {...results[0], Password: ""}
    }
    return null
}

const getLoginAuthen = async (username, password) => {
    const sql = `select * from posuser 
        where username='${username}' and password='${decryptData(password)}' `
    const results = await pool.query(sql)
    if (results.length > 0) {
        return {...results[0], Password: ""}
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
    const mappingResult = results.map((item, index) => {
        return { ...item, Password: "" }
    })
    return mappingResult
}

const getDataByUserName = async (username) => {
    const sql = `select * from posuser where username='${username}'`
    const results = await pool.query(sql)
    if (results.length > 0) {
        return {...results[0], Password: ""}
    }
    return null
}

module.exports = {
    getAllData,
    getDataByUserName,
    checkLogin,
    processLogout,
    getLoginAuthen
}
