const express = require('express');
const router = express.Router();

const pool = require('../../../config/database')

router.post('/getEmployeeByCode', function (req, res, next) {
  const { code } = req.body
  const response = {}
  const sql = `select code,name from employ where Code='${code}' limit 1`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    if (results.length > 0) {
      response.data = {
        pinValid: true
      }
    } else {
      response.data = {
        pinValid: false
      }
    }

    res.status(200).json(response)
  })
});

module.exports = router;
