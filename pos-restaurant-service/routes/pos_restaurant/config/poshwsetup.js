const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const { PrefixFormat, PrefixZeroFormat, ASCII2Unicode } = require('../../../utils/StringUtil');
const { updateNextBillNo, getAllData } = require('../../../services/PosHwSetup');

router.get('/', (req, res, next) => {
  getAllData()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:macno', (req, res, next) => {
  const { macno } = req.params
  const response = {}
  const sql = `select * from poshwsetup where Terminal='${macno}' limit 1`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    let RunningNumber = ""
    if (results.length > 0) {
      RunningNumber = PrefixZeroFormat(results[0].ReceNo1, 7)

      response.billId = macno + RunningNumber
      response.data = { ...results[0], Footting3: ASCII2Unicode(results[0].Footting3) }

      res.status(200).json(response)
    } else {
      res.status(400).json({})
    }
  })
});

router.patch('/:macno', (req, res, next) => {
  const { macno } = req.params
  updateNextBillNo(macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: "update next billno success" })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
})

module.exports = router;
