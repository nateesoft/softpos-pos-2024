const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const moment = require('moment')

const { TOPIC_NAME } = require('../config/kafka/constants');
const kafka = require('../config/kafka/config');
const { CharacterSet } = require("node-thermal-printer");

const PRINTER_TYPE = {
    RECEIPT: "receipt",
    COPY: "copy",
    REFUND: "refund",
    CHECK: "check"
}

const sendToKafkaMessage = async data => {
    const producer = kafka.producer()
    const messages = [{ key: "key1", value: data }];
    try {
        await producer.connect();
        await producer.send({
            topic: TOPIC_NAME,
            messages: messages,
        });
    } catch (error) {
        console.error(error);
    } finally {
        await producer.disconnect();
    }
}

const sendToDirectPrinter = async (config, data = {}) => {
    console.log('Start Print:', data.message, data.type)
    return new Promise((resolve) => {
        console.log('Printer finish: ', data.type)
        // printTest(config)
        resolve('Done')
    })
}

const printTest = (config) => {
    const { printerIp } = config

    return new Promise((resolve) => {
        console.log('Print test done')
        let printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,
            interface: `tcp://${printerIp}`, // IP address
            width: 42 // max width of text
        });

        // send to printer
        const data = {
            userId: "user001",
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

        const printWidth = printer.getWidth();
        console.log('printWidth:', printWidth);
        const pointAfter =
            data.pointBefore - data.item.reduce((a, b) => a + b.quantity * b.price, 0);
        const totalPoint = data.pointBefore - pointAfter;
        printer.setCharacterSet('HK_TW');
        printer.alignCenter();
        printer.bold(true);
        printer.println('結帳單');
        printer.bold(false);
        printer.alignLeft();
        printer.println(`戶號：${data.userId}`);
        printer.bold(true);
        printer.alignRight();
        printer.println(`品名 * 數量 ($單價) 金額`);
        printer.bold(false);
        data.item.map((e) => {
            printer.println(
                `${e.name} * ${e.quantity} ($${e.price})  $${e.quantity * e.price}`
            );
        });
        printer.println(`合計：$${totalPoint}`);
        printer.alignLeft();
        printer.println(`交易前點數：${data.pointBefore}   交易後點數：${pointAfter}`);
        printer.code128("Code128");                                 // Print code128 bar code
        printer.printQR("QR CODE");                                 // Print QR code
        // await printer.printImage('/Users/tx091511/Documents/Personal/MyMac/softpos-project/softpos-pos-2024/pos-microservice/printer-service/assets/cash.png');
        // await convert(printer, '/Users/tx091511/Documents/Personal/MyMac/softpos-project/softpos-pos-2024/pos-microservice/printer-service/assets/cash.png')
        // printer.beep();
        printer.println(`客服：${data.staff}`);
        printer.println(`總量：(${data.item.length})${data.date}`);
        printer.newLine();
        printer.print('簽名：__________________________');
        printer.cut();

        printer.execute()

        resolve('Done')
    })
}

const printReceipt = (billData, printType, posConfigSetup, poshwSetup, creditList, tSale, memberInfo) => {

    return new Promise(async (resolve, reject) => {
        let printLineData = []

        const NumFormat = data => {
            return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        }

        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        let footers = [poshwSetup.Footting1, poshwSetup.Footting2, poshwSetup.Footting3]
        const orderListFilter = tSale.filter(o => o.R_Price > 0)

        printLineData.push({ type: 'charset', value: CharacterSet.HK_TW });
        printLineData.push({ type: 'align', value: 'center' });
        printLineData.push({ type: 'fontWeight', value: 'bold' });

        // print header
        if (PRINTER_TYPE.COPY === printType) {
            printLineData.push({ type: 'text', value: `Bill Copy (${billData.B_BillCopy})` });
        } else if (PRINTER_TYPE.RECEIPT === printType) {
            printLineData.push({ type: 'text', value: `*** ใบเสร็จรับเงิน ***` });
            headers.forEach(header => {
                printLineData.push({ type: 'text', value: `${header}` });
            })
            printLineData.push({ type: 'text', value: `====== LOGO ======` });
            printLineData.push({ type: 'text', value: `Receipt No: ${billData.B_Refno}` });
            printLineData.push({ type: 'text', value: `Date: ${moment().format('DD/MM/YYYY HH:mm:ss')}` });
            printLineData.push({ type: 'text', value: `Customer: ${billData.B_Cust}` });
            printLineData.push({ type: 'text', value: `Cashier: ${billData.B_Cashier} Employ: ${billData.B_Cashier} Mac: ${billData.B_MacNo}` });
        } else if (PRINTER_TYPE.REFUND === printType) {
            headers.forEach(header => {
                printLineData.push({ type: 'text', value: `${header}` });
            })
            printLineData.push({ type: 'text', value: `====== LOGO =====` });
            printLineData.push({ type: 'text', value: `REG ID: ${billData.B_MacNo}` });
            printLineData.push({ type: 'text', value: `*** บิลยกเลิกการขาย ***` });
            printLineData.push({ type: 'text', value: `*** (Refund) ***` });
            printLineData.push({ type: 'text', value: `Void User: ${billData.B_VoidUser}` });
            printLineData.push({ type: 'text', value: `Void Date/Time: ${billData.B_VoidTime}` });
            printLineData.push({ type: 'text', value: `อ้างถึงใบเสร็จรับเงินเลขที่: ${billData.B_Refno}` });
        }
        printLineData.push({ type: 'text', value: '__________________________' });
        printLineData.push({ type: 'fontWeight', value: 'plain' });
        orderListFilter.map(e => {
            if (e.R_Void !== 'V') {
                printLineData.push({
                    type: 'text', value: `[${e.R_ETD}] ${e.R_PName} * ${e.R_Quan} (${NumFormat(e.R_Price)})  ${NumFormat(e.R_Quan * e.R_Price)}`
                });
            } else if (e.R_Void === 'V') {
                printLineData.push({
                    type: 'text', value: `[${e.R_ETD}] ${e.R_PName} * ${e.R_Quan} (${NumFormat(e.R_Price)})  ${0.00} (ยกเลิก)`
                });
            }
        });
        printLineData.push({ type: 'text', value: '__________________________' });

        printLineData.push({ type: 'align', value: 'left' });
        printLineData.push({ type: 'text', value: `Sub-TOTAL....(Item ${orderListFilter.filter(item => item.R_Void !== 'V').length}) ${NumFormat(billData.B_Total)}` });
        printLineData.push({ type: 'text', value: `  อาหาร (Food)    ${NumFormat(billData.B_NetFood)}` });
        printLineData.push({ type: 'text', value: `  เครื่องดื่ม (Drink) ${NumFormat(billData.B_NetDrink)}` });
        printLineData.push({ type: 'text', value: `  สินค้าอื่นๆ (Other) ${NumFormat(billData.B_NetProduct)}` });

        printLineData.push({ type: 'text', value: `ค่าบริการ ${posConfigSetup.P_Service}% ${NumFormat(billData.B_ServiceAmt)}` });
        printLineData.push({ type: 'text', value: `มูลค่าสินค้า/บริการ..... ${NumFormat((billData.B_NetVat - billData.B_Vat))}` });
        printLineData.push({ type: 'text', value: `Vat ${posConfigSetup.P_Vat}%  ${billData.B_Vat}` });
        printLineData.push({ type: 'text', value: `Net Total ${NumFormat(billData.B_NetTotal)}` });
        printLineData.push({ type: 'text', value: `ค่ามัดจำ ${NumFormat(billData.B_Earnest)}` });
        printLineData.push({ type: 'text', value: `ค่า Entertain ${NumFormat(billData.B_Entertain)}` });

        creditList.forEach(item => {
            printLineData.push({ type: 'text', value: `${item.CrCode} ${item.CardNo}` });
            printLineData.push({ type: 'text', value: `CR_Charge ${item.CrCharge} ${NumFormat(item.CrChargeAmount)} ${NumFormat(item.CrAmt)}` });
        })

        printLineData.push({ type: 'text', value: `เงินสด ${NumFormat(billData.B_Cash)}` });
        printLineData.push({ type: 'text', value: `เงินทอน ${NumFormat(billData.B_Ton)}` });
        printLineData.push({ type: 'newline', value: 1 });
        printLineData.push({ type: 'text', value: `${posConfigSetup.P_PrintRecpMessage}` });
        printLineData.push({ type: 'text', value: '__________________________' });

        if (billData.B_MemCode) {
            printLineData.push({ type: 'text', value: `เลขที่สมาชิก: ${billData.B_MemCode} ${billData.B_MemName}` });
            printLineData.push({ type: 'text', value: `ยอดซื้อสะสม: ${memberInfo.Member_TotalPurchase}` });
            printLineData.push({ type: 'text', value: `คะแนนสะสม: ${memberInfo.Member_TotalScore}` });
            printLineData.push({ type: 'text', value: '__________________________' });
        }

        footers.forEach(item => {
            printLineData.push({ type: 'text', value: `${item}` });
        })
        printLineData.push({ type: 'newline', value: 1 });
        printLineData.push({ type: 'qrcode', value: billData.B_Refno });
        printLineData.push({ type: 'text', value: '__________________________' });

        printLineData.push({ type: 'newline', value: 1 });
        printLineData.push({ type: 'printer', value: 'cut' });

        printLineData.forEach(item => {
            if (item.type === 'text') {
                console.log(item.value)
            }
        })

        resolve(printLineData)
    })
}

const getExecutePrinter = (printer, printData) => {
    return new Promise(async (resolve, reject) => {
        const printWidth = printer.getWidth();
        console.log('printWidth:', printWidth);

        printData.forEach(item => {
            if (item.type === 'text') {
                printer.println(item.value);
            }
            if (item.type === 'align') {
                if (item.value === 'center') {
                    printer.alignCenter();
                }
                if (item.value === 'right') {
                    printer.alignRight();
                }
                if (item.value === 'left') {
                    printer.alignLeft();
                }
            }
            if (item.type === 'charset') {
                printer.setCharacterSet(item.value)
            }
            if (item.type === 'qrcode') {
                printer.printQR(item.value)
            }
            if (item.type === 'newline') {
                printer.newLine()
            }
            if (item.type === 'fontWeight') {
                if (item.value === 'bold') {
                    printer.bold(true)
                }
                if (item.value === 'plain') {
                    printer.bold(false)
                }
            }
        })

        resolve(printer)
    })
}

const printReceiptProcess = (config, billData, printType, posConfigSetup, poshwSetup, creditList, tSale, memberInfo) => {
    const { printerIp } = config

    return new Promise(async (resolve, reject) => {
        let printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,
            interface: `tcp://${printerIp}`, // IP address
            width: 42 // max width of text
        });

        try {
            // generate data
            const printData = printReceipt(billData, printType, posConfigSetup, poshwSetup, creditList, tSale, memberInfo)

            console.log('Print receipt start')
            const isConnected = await printer.isPrinterConnected();
            console.log('isConnected:', isConnected);
            if (!isConnected) return reject('unConnected!');

            // send to printer
            getExecutePrinter(printer, printData)
                .then(printer => {
                    printer.execute()
                })

            // update bill print database

            console.log('Print done!')
            resolve('Done')
        } catch (error) {
            reject(error.message)
        }
    })
}

module.exports = {
    sendToKafkaMessage,
    sendToDirectPrinter,
    printTest,
    printReceiptProcess
}
