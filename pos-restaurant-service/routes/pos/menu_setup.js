const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

router.get('/', function (req, res, next) {
  const response = {}
  pool.query(`SELECT * FROM menu_setup where menu_type='product'`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

router.get('/all', function (req, res, next) {
  const response = {}
  pool.query(`SELECT * FROM menu_setup`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

router.get('/optional/:menuCode', function (req, res, next) {
  const menuCode = req.params.menuCode

  const response = {}
  pool.query(`SELECT * FROM menu_setup where menu_type='optional' and ref_menu='${menuCode}'`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

router.get('/:menuCode', function (req, res, next) {
  const menuCode = req.params.menuCode

  const response = {}
  pool.query(`SELECT * FROM menu_setup where menu_type='product' and menu_code='${menuCode}'`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results[0]

    res.status(200).json(response)
  })
});


module.exports = router;
