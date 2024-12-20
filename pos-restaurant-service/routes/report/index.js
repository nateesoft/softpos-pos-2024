const express = require('express');
const router = express.Router();

const { getTableOnAction, getTableOnActionList } = require('../../services/ReportService');

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

module.exports = router;
