const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const { getPOSConfigSetup } = require('../../../services/POSConfigSetupService');

router.get('/', (req, res, next) => {
  getPOSConfigSetup()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;