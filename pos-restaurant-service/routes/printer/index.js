const express = require('express');
const router = express.Router();

const { ThermalPrinterConnect } = require("../../services/ThermalPrinter");
const controllers = require('../../controllers/kafka')

router.post('/', async (req, res, next) => {
  const { printerIp, printerPort, message} = req.body

  await ThermalPrinterConnect(printerIp, printerPort, message)
  res.status(200).json({
    printerIp, printerPort
  })
});

router.post('/send', controllers.sendMessageToKafka);

module.exports = router;
