require("dotenv").config()

const mysql5 = require("mysql")
// const mysql = require("mysql2")

const config = {
  host: process.env.MYSQL5_DB_HOST,
  user: process.env.MYSQL5_DB_USER,
  password: process.env.MYSQL5_DB_PASSWORD,
  database: process.env.MYSQL5_DB_NAME,
  port: process.env.MYSQL5_DB_PORT
}
const pool = mysql5.createPool(config);
// console.log('mysql5 config:',config )

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error
  console.log("Connect old mysql complete: ", results[0].solution)
})

module.exports = pool
