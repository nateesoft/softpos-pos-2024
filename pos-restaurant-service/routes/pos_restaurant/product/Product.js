const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

router.get('/', function (req, res) {
  const sql = `select * from product`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {
      data: results
    }
    res.status(200).json(response)
  })
});

router.get('/:productCode', function (req, res) {
  const productCode = req.params.productCode
  const sql = `select * from product where PCode='${productCode}'`
  pool.query(sql, (err, results) => {
    if (err) throw err

    if (results.length > 0) {
      const response = {
        data: results[0]
      }
      res.status(200).json(response)
    } else {
      res.status(400).json({})
    }
  })
});

module.exports = router;
