const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const { ThermalPrinterConnect } = require("../../services/ThermalPrinter");

router.post('/', function (req, res, next) {
  const { printerIp, printerPort} = req.body

  ThermalPrinterConnect(printerIp, printerPort)
  res.status(200).json({
    printerIp, printerPort
  })
});

module.exports = router;
