const express = require("express")

module.exports = (db) => {
  const router = express.Router()

  router.get("/", async (req, res) => {
    const [posts] = await db.query("SELECT * FROM posts")
    res.json(posts)
  })

  router.post("/", async (req, res) => {
    const { content } = req.body
    await db.query("INSERT INTO posts (content) VALUES (?)", [content])
    res.json({ message: "Post added" })
  })

  router.delete("/:id", async (req, res) => {
    await db.query("DELETE FROM posts WHERE id = ?", [req.params.id])
    res.json({ message: "Post deleted" })
  })

  return router
}
