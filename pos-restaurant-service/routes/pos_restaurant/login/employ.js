const express = require('express');
const { getEmployeeByCode } = require('../../../services/EmployeeService');
const router = express.Router();

router.post('/getEmployeeByCode', function (req, res, next) {
  const { code } = req.body
  getEmployeeByCode(code)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
