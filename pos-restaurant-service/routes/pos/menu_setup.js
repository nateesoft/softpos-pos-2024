const express = require('express');
const router = express.Router();

const { getMenuSetup, getMenuSetupAll, getOptionalByMenuCode, getMenuSetupByMenuCode } = require('../../services/management/MenuSetupService');

router.get('/', function (req, res, next) {
  getMenuSetup()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/all', function (req, res, next) {
  getMenuSetupAll()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/optional/:menuCode', function (req, res, next) {
  const menuCode = req.params.menuCode
  getOptionalByMenuCode(menuCode)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:menuCode', function (req, res, next) {
  const menuCode = req.params.menuCode
  getMenuSetupByMenuCode(menuCode)
  .then(rows => {
    res.status(200).json({ status: 2000, data: rows })
  })
  .catch(err => {
    res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
  })
});


module.exports = router;
