const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

router.get('/', function (req, res) {
  const sql = `select * from product`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

module.exports = router;
