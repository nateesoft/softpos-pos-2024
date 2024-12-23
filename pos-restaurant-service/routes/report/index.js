const express = require('express');
const router = express.Router();

const { getTableOnAction, getTableOnActionList, getTerminalByMacno, getTerminalByCashier, getGroupPlu, getPluCode, getHourlyReport, getCustomerPerHour, getReceipt, getVoidBill, getCreditPayment, getTopSale, getPromotion, getSpecialCupon } = require('../../services/ReportService');

router.get('/', async (req, res, next) => {
  res.send('Success')
});

router.get('/table-on-action', async (req, res, next) => {
  getTableOnAction()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/table-on-action/list', async (req, res, next) => {
  getTableOnActionList()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/terminal-report', async (req, res, next) => {
  const { macno } = req.body
  getTerminalByMacno(macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/cashier-report', async (req, res, next) => {
  const { cashier } = req.body
  getTerminalByCashier(cashier)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/group-plu-report', async (req, res, next) => {
  const { groupCode } = req.body
  getGroupPlu(groupCode)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/plu-report', async (req, res, next) => {
  const { groupCode1, groupCode2 } = req.body
  getPluCode(groupCode1, groupCode2)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/customer-per-hour-report', async (req, res, next) => {
  getCustomerPerHour()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/hourly-report', async (req, res, next) => {
  getHourlyReport()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/receipt-report', async (req, res, next) => {
  getReceipt()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/void-report', async (req, res, next) => {
  getVoidBill()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/credit-report', async (req, res, next) => {
  getCreditPayment()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/top-sale-report', async (req, res, next) => {
  getTopSale()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/promotion-report', async (req, res, next) => {
  getPromotion()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/special-cupon-report', async (req, res, next) => {
  getSpecialCupon()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
