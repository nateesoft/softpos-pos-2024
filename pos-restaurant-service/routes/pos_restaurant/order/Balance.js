const express = require('express');
const router = express.Router();

const BalanceService = require('../../../services/BalanceService')

router.get('/', (req, res) => {
  BalanceService.getAllBalance()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

// order adjust stock
router.post('/stock-out', (req, res) => {
  const { R_Index } = req.body
  console.log('balance stock out:', R_Index)
  BalanceService.orderStockOut(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

// void
router.post('/stock-in', (req, res) => {
  const { R_Index } = req.body
  console.log('balance stock in:', R_Index)
  BalanceService.voidStockIn(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.delete('/empty/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  BalanceService.emptyTableBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.patch('/printToKic/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  BalanceService.updatePrint2Kic(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.patch('/updateQty', (req, res) => {
  const { tableNo, rIndex, qty } = req.body
  BalanceService.updateBalanceQty(tableNo, rIndex, qty)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/void-msg-list', function (req, res) {
  BalanceService.getVoidMsgList()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getBalanceByTableNo(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/totalBalance/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getTotalBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/getMaxIndex/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  BalanceService.getBalanceMaxIndex(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

// add new menu in balance
router.post('/', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw new Error("Payload Information Notfound !!!")
  }
  BalanceService.addBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

// void or refund menu in balance
router.post('/void', (req, res) => {
  const { R_Index } = req.body
  if (Object.keys(req.body).length === 0) {
    throw new Error("R_Index !!!")
  }
  BalanceService.voidMenuBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/getData', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw new Error("Payload Information Notfound !!!")
  }
  const { R_Index } = req.body
  BalanceService.getBalanceByRIndex(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/addList', function (req, res, next) {
  // console.log('addList=>', req.body)
  BalanceService.addListBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.put('/', function (req, res, next) {
  const id = req.params.id
  BalanceService.updateBalance(req.body, id)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
})

module.exports = router;
