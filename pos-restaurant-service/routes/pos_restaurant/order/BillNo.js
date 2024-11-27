const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

const BillNoService = require('../../../services/BillNoService')

router.get('/', function (req, res) {
  const sql = `select * from billno`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

router.get('/:billNo', function (req, res) {
  const { billNo } = req.params
  BillNoService.getBillNoByRefno(billNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

// update billno
router.post('/', (req, res) => {
  BillNoService.addNewBill(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

module.exports = router;
