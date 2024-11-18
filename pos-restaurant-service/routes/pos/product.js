const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

/* GET product listing. */
router.get('/', function (req, res, next) {
  const response = {}
  pool.query(`SELECT * FROM product`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id

  const response = {}
  pool.query(
    `SELECT * FROM product WHERE id = ?`, [id], (err, results) => {
      if (err) throw err

      if (results.length == 0) {
        response.status = true
        response.code = 404
        response.message = "product not found"
        response.data = null
      } else {
        response.status = true
        response.code = 200
        response.message = "Success"
        response.data = results[0]
      }

      res.status(200).json(response)
    }
  )
});

router.post('/', function (req, res, next) {
  const newId = uuid.v4()
  const { name, url, qty, price } = req.body
  pool.query(
    `INSERT INTO product (name, url, qty, price, id)
    VALUES (?, ?, ?, ?, ?)`, [name, url, qty, price, newId],
    (err, results) => {
      if (err) throw err
      res.status(201).json({ id: newId, code: 200 })
    }
  )
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { payload } = req.body
  const response = {}

  res.json(payload);
});

router.patch('/:id', function (req, res, next) {
  const id = req.params.id
  const { qty } = req.body
  const response = {}
  pool.query(`UPDATE product SET qty = ? WHERE id = ?`, [ qty, id ],
    (err, results) => {
      if (err) throw err

      response.status = true
      response.code = 200
      response.message = "Product updated successed"
      response.data = null
      res.status(200).send(response)
    }
  )
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id
  pool.query(`delete from product where id=?`, [id], (err, results) => {
      if (err) throw err
      res.status(201).json({ id })
    }
  )
});

module.exports = router;
