const express = require('express');
const router = express.Router();

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

router.post('/deleteBalance', (req, res) => {
  const { index } = req.body
  console.log('route to delete:', req.body)
  BalanceService.deleteMenuBalance(index)
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

router.patch('/updateInfo', (req, res) => {
  const { tableNo, rIndex, qty} = req.body
  console.log('updateInfo:', req.body)
  BalanceService.updateExistsBalance(tableNo, rIndex, qty)
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

router.post('/', (req, res) => {
  BalanceService.addBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.post('/addList', function (req, res, next) {
  console.log('addList=>', req.body)
  BalanceService.addListBalance(req.body)
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
