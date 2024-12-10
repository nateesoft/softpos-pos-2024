const express = require('express');
const router = express.Router();

const {
  getAllBalance,
  orderStockOut,
  emptyTableBalance,
  deleteBalanceOnly,
  updatePrint2Kic,
  updateBalanceQty,
  getVoidMsgList,
  getBalanceByTableNo,
  getTotalBalance,
  addBalance,
  voidMenuBalance,
  addListBalance,
  updateBalance,
  summaryBalance
} = require('../../../services/BalanceService')
const { getBalanceByRIndex, getBalanceMaxIndex } = require('../../../services/CoreService')

router.get('/', (req, res) => {
  getAllBalance()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/summaryBalance', (req, res) => {
  const { tableNo } = req.body
  summaryBalance(tableNo)
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
  orderStockOut(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.delete('/empty/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  emptyTableBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/delete', (req, res) => {
  const { R_Index } = req.body
  deleteBalanceOnly(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.patch('/printToKic/:tableNo', (req, res) => {
  const tableNo = req.params.tableNo
  updatePrint2Kic(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.patch('/updateQty', (req, res) => {
  const { tableNo, rIndex, qty } = req.body
  updateBalanceQty(tableNo, rIndex, qty)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/void-msg-list', function (req, res) {
  getVoidMsgList()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  getBalanceByTableNo(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/totalBalance/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  getTotalBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/getMaxIndex/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  getBalanceMaxIndex(tableNo)
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
  addBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

// void or refund menu in balance
router.post('/void', (req, res) => {
  voidMenuBalance(req.body)
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
  getBalanceByRIndex(R_Index)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/addList', function (req, res, next) {
  addListBalance(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.put('/', function (req, res, next) {
  const id = req.params.id
  updateBalance(req.body, id)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
})

module.exports = router;
