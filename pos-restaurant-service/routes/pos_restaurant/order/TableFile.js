const express = require('express');
const router = express.Router();

const pool = require('../../../config/database')

router.post('/checkTableOpen', function (req, res, next) {
  const { tableNo } = req.body
  const sql = `select Cashier from tablefile where TOnact='Y' and tcode='${tableNo}'`
  pool.query(sql, (err, results) => {
    if (err) throw err
    
    const response = { status: "available" }
    if(results.length > 0){
      response.status = "employInUse"
    }
    res.status(200).json(response)
  })
});

module.exports = router;
