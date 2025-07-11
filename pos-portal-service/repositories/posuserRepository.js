const pool = require("../config/database/MySqlConnect")

const findUsernameAndPassword = async (username, password) => {
  const sql = `select * from posuser 
    where username=? and password=? `
  const results = await pool.query(sql, [username, password])
  return results
}

const updateUserLogin = async (username, macno) => {
  const sqlUpdate = `update posuser 
    set onact='Y', macno=? where username=?`
  const resultUpdate = await pool.query(sqlUpdate, [username, macno])
  return resultUpdate
}

const updateUserLogout = async (username) => {
  const sqlUpdate = `update posuser set onact='N' where username=?`
  const resultUpdate = await pool.query(sqlUpdate, [username])
  return resultUpdate
}

const findUsername = async (username) => {
  const sql = `select * from posuser where username=?`
  const results = await pool.query(sql, [username])
  return results
}

const findOneData = async () => {
  const sql = `select * from posuser limit 1`
  const results = await pool.query(sql)
  return results
}

const findAllData = async () => {
  const sql = `select * from posuser`
  const results = await pool.query(sql)
  return results
}


module.exports = {
  findUsernameAndPassword,
  updateUserLogin,
  updateUserLogout,
  findUsername,
   findOneData,
   findAllData
}