const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = (db) => {
  const router = express.Router()

  router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email])

    if (rows.length === 0)
      return res.status(400).json({ message: "User not found" })

    const user = rows[0]
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" })

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    })
    res.json({ token })
  })

  return router
}
