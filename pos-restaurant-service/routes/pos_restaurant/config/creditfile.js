const express = require('express');
const router = express.Router();

const CreditFileService = require('../../../services/CreditFileService');

router.get('/', (req, res, next) => {
  CreditFileService.getCreditFileService()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

module.exports = router;
