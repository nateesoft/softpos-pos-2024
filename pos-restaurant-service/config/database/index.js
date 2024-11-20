require("dotenv").config()

const mysql8 = require("mysql2")

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 3,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
}
const pool = mysql8.createPool(config)
// console.log('mysql8 config:',config )

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log(error) 
    throw error
  }
  console.log("Connect new mysql complete: ", results[0].solution)
})

module.exports = pool
