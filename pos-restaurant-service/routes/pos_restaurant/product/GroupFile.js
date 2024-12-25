const express = require('express');
const router = express.Router();

const { getAllGroup } = require('../../../services/GroupFileService');

router.get('/all', function (req, res) {
  getAllGroup()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
