const kafka = require('kafka-node');
require("dotenv").config()

const { TOPIC_NAME, BROKERS } = require('./constants');

const printThermalPrinter = require("./print");
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: BROKERS });

const consumer = new Consumer(client, [{ topic: TOPIC_NAME, partition: 0 }], {
  autoCommit: true,
});

consumer.on('message', function (message) {
  console.log(message.value);

  if(process.env.USE_PRINTER === 'Y'){
    let printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "tcp://192.168.1.27", // IP address
      width: 42 // max width of text
    });
  
    // send to printer
    const Data = {
      userId: message.value,
      item: [
        { name: "aaa", quantity: 2, price: 175 },
        { name: "bbb", quantity: 2, price: 175 },
        { name: "ccc", quantity: 1, price: 155 },
        { name: "ddd", quantity: 4, price: 155 }
      ],
      pointBefore: 2634,
      staff: "aaa",
      date: "2022-05-11 18:53:27"
    };
    printThermalPrinter(printer, Data);
  }
});
