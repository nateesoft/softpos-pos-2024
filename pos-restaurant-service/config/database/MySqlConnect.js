require("dotenv").config()

let mysqlConnection = null

if (process.env.IS_OLD_MYSQL5 === "Y") {
  mysqlConnection = require("mysql")
  console.log('old db use mysql5')
} else {
  mysqlConnection = require("mysql2")
  console.log('new db use mysql8')
}

const util = require('util')

const config = {
  host: process.env.MYSQL5_DB_HOST,
  user: process.env.MYSQL5_DB_USER,
  password: process.env.MYSQL5_DB_PASSWORD,
  database: process.env.MYSQL5_DB_NAME,
  port: process.env.MYSQL5_DB_PORT,
  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000
}
const pool = mysqlConnection.createConnection(config);
// console.log('MySqlConnect config:', config)

pool.query("SELECT 5+0 AS solution", function (error, results, fields) {
  if (error) throw error
  console.log("Connect old mysql version: ", results[0].solution)
})

pool.query = util.promisify(pool.query)

module.exports = pool
