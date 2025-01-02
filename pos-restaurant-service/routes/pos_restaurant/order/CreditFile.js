const express = require('express');
const router = express.Router();

const CreditFileService = require('../../../services/CreditFileService');
const { getTempCredit, createListTempCredit } = require('../../../services/TCreditService');

router.get('/', function (req, res) {
  CreditFileService.getData()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:CrCode', function (req, res) {
  const { CrCode } = req.params
  CreditFileService.getDataByCrCode(CrCode)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/temp/:macno', function (req, res) {
  const { macno } = req.params
  getTempCredit(macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/temp', function (req, res) {
  const { payload } = req.body
  createListTempCredit(payload)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
