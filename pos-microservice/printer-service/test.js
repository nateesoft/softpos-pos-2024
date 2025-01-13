const printThermalPrinter = require("./print");

const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
  // 11F TM-m10 thermal printer
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.1.27", // IP address
  width: 42 // max width of text
});

const Data = {
  userId: "9K",
  item: [
    { name: "奶油培根白醬義大利麵", quantity: 2, price: 175 },
    { name: "培根白醬義大利麵", quantity: 2, price: 175 },
    { name: "台灣式豚骨拉麵", quantity: 1, price: 155 },
    { name: "日式豚骨拉麵", quantity: 4, price: 155 }
  ],
  pointBefore: 2634,
  staff: "社區經理",
  date: "2022-05-11 18:53:27"
};

printThermalPrinter(printer, Data);
