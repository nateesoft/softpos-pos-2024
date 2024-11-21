require("dotenv").config()

let mysqlConnection = require("mysql2")
if (process.env.IS_OLD_MYSQL5 === true) {
  console.log("Connect old mysql")
  mysqlConnection = require("mysql")
}

const config = {
  host: process.env.MYSQL5_DB_HOST,
  user: process.env.MYSQL5_DB_USER,
  password: process.env.MYSQL5_DB_PASSWORD,
  database: process.env.MYSQL5_DB_NAME,
  port: process.env.MYSQL5_DB_PORT
}
const pool = mysqlConnection.createPool(config);
// console.log('mysql5 config:', config)

pool.query("SELECT 5+0 AS solution", function (error, results, fields) {
  if (error) throw error
  console.log("Connect old mysql version: ", results[0].solution)
})

module.exports = pool
