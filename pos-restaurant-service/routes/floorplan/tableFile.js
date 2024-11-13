const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

router.post('/checkTableOpen', function (req, res, next) {
  const { tableNo } = req.body
  const response = {}
  const sql = `select Cashier from tablefile where TOnact='Y' and tcode='${tableNo}'`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});


module.exports = router;
