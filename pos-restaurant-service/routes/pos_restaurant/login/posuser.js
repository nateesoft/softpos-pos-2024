const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect');
const { getAllData, getDataByUserName, checkLogin, processLogout } = require("../../../services/PosUserService");

router.get('/', (req, res, next) => {
  getAllData()
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.post('/login', function (req, res, next) {
  const { username, password, macno } = req.body

  checkLogin(username, password, macno)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.patch('/logout', function (req, res, next) {
  const { username } = req.body

  processLogout(username)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

router.get('/:username', (req, res, next) => {
  const { username } = req.params
  getDataByUserName(username)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;
