const express = require('express');
const router = express.Router();

const BillNoService = require('../../../services/BillNoService')

router.get('/', function (req, res) {
  BillNoService.getAllBillNoToday()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.get('/:billNo', function (req, res) {
  const { billNo } = req.params
  BillNoService.getBillNoByRefno(billNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

// create new billno
router.post('/', (req, res) => {
  BillNoService.addNewBill(req.body)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

// search data
router.post('/search', function (req, res) {
  const { billNo, postDate, macno } = req.body
  BillNoService.searchBillNoCondition(billNo, postDate, macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

// refund bill
router.post('/refund', (req, res) => {
  const { billNo, Cashier, macno } = req.body
  BillNoService.billRefundStockIn(billNo, Cashier, macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

module.exports = router;
