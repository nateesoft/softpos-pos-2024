const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const { Unicode2ASCII, ASCII2Unicode } = require('../../../utils/StringUtil')

const BalanceService = require('../../../services/BalanceService')

router.get('/', (req, res) => {
  BalanceService.getAllBalance()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.delete('/empty/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  BalanceService.emptyTableBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.patch('/printToKic/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  BalanceService.updatePrint2Kic(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.patch('/updateQty', (req, res) => {
  const { tableNo, rIndex, qty} = req.body
  BalanceService.updateBalanceQty(tableNo, rIndex, qty)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.get('/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getBalanceByTableNo(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.get('/totalBalance/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getTotalBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.get('/getMaxIndex/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getBalanceMaxIndex(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.post('/', function (req, res, next) {
  BalanceService.addNewBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  BalanceService.updateBalance(req.body, id)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
})

module.exports = router;
