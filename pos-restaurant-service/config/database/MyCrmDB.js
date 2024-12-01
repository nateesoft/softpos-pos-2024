require("dotenv").config()

let mysqlConnection = null

if (process.env.IS_OLD_MYSQL5_CRM === "Y") {
  mysqlConnection = require("mysql")
  console.log('old db use crm mysql5')
} else {
  mysqlConnection = require("mysql2")
  console.log('new db use crm mysql8')
}

const util = require('util')

const config = {
  host: process.env.MYSQL5_CRM_DB_HOST,
  user: process.env.MYSQL5_CRM_DB_USER,
  password: process.env.MYSQL5_CRM_DB_PASSWORD,
  database: process.env.MYSQL5_CRM_DB_NAME,
  port: process.env.MYSQL5_CRM_DB_PORT
}
const pool = mysqlConnection.createConnection(config);
// console.log('MyCrmDB config:', config)

pool.query("SELECT 5+0 AS solution", function (error, results, fields) {
  if (error) throw error
  console.log("Connect crm old mysql ip: ", config.host)
  console.log("Connect crm old mysql version: ", results[0].solution)
  console.log('##### ##### #####')
})

pool.query = util.promisify(pool.query)

module.exports = pool
