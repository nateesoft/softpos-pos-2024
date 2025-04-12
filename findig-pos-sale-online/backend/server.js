require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mysql = require("mysql2/promise")

const app = express()
app.use(express.json())
app.use(cors())

// เชื่อมต่อ MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

// Routes
app.use("/api/auth", require("./routes/auth")(db))
app.use("/api/posts", require("./routes/posts")(db))

const PORT = process.env.PORT || 5555
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
