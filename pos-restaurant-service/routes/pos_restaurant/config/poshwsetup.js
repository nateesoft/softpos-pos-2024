const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const { PrefixFormat, PrefixZeroFormat } = require('../../../utils/StringUtil')

router.get('/:macno', (req, res, next) => {
  const { macno } = req.params
  const response = {}
  const sql = `select ReceNo1 from poshwsetup where Terminal='${macno}' limit 1`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    let RunningNumber = ""
    if (results) {
      RunningNumber = PrefixZeroFormat(results[0].ReceNo1, 7)
    } else {
      PrefixZeroFormat(1, 7)
    }

    response.billId = macno + RunningNumber

    res.status(200).json(response)
  })
});

router.patch('/:macno', (req, res, next) => {
  const { macno } = req.params
  const sql = `UPDATE poshwsetup set receno1=receno1+1 where terminal='${macno}'`
  pool.query(sql, (err, results) => {
    res.status(200).json({ status: "update next billno success" })
  })
})

module.exports = router;
