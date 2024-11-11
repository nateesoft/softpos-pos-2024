const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

/* GET product listing. */
router.get('/', function (req, res, next) {
  const response = {}
  pool.query(`SELECT * FROM posdb.product_order`, (err, results) => {
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
    `SELECT * FROM posdb.product_order WHERE id = ?`, [id], (err, results) => {
      if (err) throw err

      if (results.length == 0) {
        response.status = true
        response.code = 404
        response.message = "product order not found"
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
  const { name, url, qty, price, totalAmount } = req.body
  pool.query(
    `INSERT INTO posdb.product_order (name, url, qty, price, totalAmount, id)
    VALUES (?, ?, ?, ?, ?, ?)`, [name, url, qty, price, totalAmount, newId],
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
  const { payload } = req.body
  const response = {}

  response.status = true
  response.code = 200
  response.message = "Success"
  response.data = payload

  res.json(response);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id
  const response = {}

  pool.query(`delete from posdb.product_order where id=?`, [id], (err, results) => {
      if (err) throw err

      response.status = true
      response.code = 200
      response.message = "Success"
      response.data = id

      res.status(201).json(response)
    }
  )
});

module.exports = router;
