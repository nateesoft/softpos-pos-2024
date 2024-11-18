const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

/* GET product listing. */
router.get('/', function (req, res, next) {
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

module.exports = router;
