const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

/* GET orders listing. */
router.get('/', function (req, res, next) {
  const response = {}
  pool.query(`SELECT * FROM orders`, (err, results) => {
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
    `SELECT * FROM orders WHERE id = ?`, [id], (err, results) => {
      if (err) throw err

      if (results.length == 0) {
        response.status = true
        response.code = 404
        response.message = "serviceflow not found"
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
  const {
    order_no,
    table_no,
    customer_count = 0,
    member_code = "",
    member_name = "",
    discount_amount_dinein = 0,
    discount_amount_takeaway = 0,
    discount_amount_delivery = 0,
    discount_amount = 0,
    total_amount_dinein = 0,
    total_amount_takeaway = 0,
    total_amount_delivery = 0,
    vat_percent = 0,
    vat_amount_dinein = 0,
    vat_amount_takeaway = 0,
    vat_amount_delivery = 0,
    vat_amount = 0,
    net_total_amount_dinein = 0,
    net_total_amount_takeaway = 0,
    net_total_amount_delivery = 0,
    net_total_amount = 0,
    employee_checkin = "",
    create_by = "",
    bill_status = "A"
  } = req.body
  pool.query(
    `INSERT INTO orders (
      order_no, table_no, customer_count, member_code, member_name,
      discount_amount_dinein, discount_amount_takeaway, discount_amount_delivery, discount_amount,
      total_amount_dinein, total_amount_takeaway, total_amount_delivery,
      vat_percent, vat_amount_dinein, vat_amount_takeaway, vat_amount_delivery, vat_amount,
      net_total_amount_dinein, net_total_amount_takeaway, net_total_amount_delivery,
      net_total_amount, employee_checkin, create_date, create_by, bill_status, id)
    VALUES (?, ?, ?, ?, ?, 
            ?, ?, ?, ?, 
            ?, ?, ?, 
            ?, ?, ?, ?, ?, 
            ?, ?, ?, 
            ?, ?, now(), ?, ?, ?)`,
    [
      order_no, table_no, customer_count, member_code, member_name,
      discount_amount_dinein, discount_amount_takeaway, discount_amount_delivery, discount_amount,
      total_amount_dinein, total_amount_takeaway, total_amount_delivery,
      vat_percent, vat_amount_dinein, vat_amount_takeaway, vat_amount_delivery, vat_amount,
      net_total_amount_dinein, net_total_amount_takeaway, net_total_amount_delivery,
      net_total_amount, employee_checkin, create_by, bill_status, newId
    ],
    (err, results) => {
      if (err) throw err
      res.status(201).json({ id: newId })
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

  res.json(payload);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id
  const response = {}

  console.log('delete order for id:', id)
  res.json({
    version: 1,
    message: "Home for orders"
  });
});

module.exports = router;
