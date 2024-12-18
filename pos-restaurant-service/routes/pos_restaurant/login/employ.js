const express = require('express');
const { getEmployeeByCode, getEmployeeActiveStatus, employForceLogout } = require('../../../services/EmployeeService');
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

router.get('/status', function (req, res, next) {
  getEmployeeActiveStatus()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/forceLogout', function (req, res, next) {
  const { username } = req.body
  employForceLogout(username)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
