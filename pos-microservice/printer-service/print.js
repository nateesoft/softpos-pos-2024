
async function printTemplateA(printer, data) {
    console.log('printTemplateA')
    const printWidth = printer.getWidth();
    console.log('printWidth:', printWidth);
    const pointAfter =
        data.pointBefore - data.item.reduce((a, b) => a + b.quantity * b.price, 0);
    const totalPoint = data.pointBefore - pointAfter;
    console.log('pointBefore:', data.pointBefore);
    console.log('pointAfter:', pointAfter);
    console.log('totalPrice:', totalPoint);
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
    // console.log('Print image', result)
    // await convert(printer, '/Users/tx091511/Documents/Personal/MyMac/softpos-project/softpos-pos-2024/pos-microservice/printer-service/assets/cash.png')
    // printer.beep();
    printer.println(`客服：${data.staff}`);
    printer.println(`總量：(${data.item.length})${data.date}`);
    printer.newLine();
    printer.print('簽名：__________________________');
    printer.cut();
}

async function printThermalPrinter(printer, data) {
    console.log('printThermalPrinter')
    try {
        const isConnected = await printer.isPrinterConnected();
        console.log('isConnected:', isConnected);
        if (!isConnected) return console.log('unConnected!');
        printTemplateA(printer, data);
        printer.execute();
        console.log('Print done!');
    } catch (error) {
        console.error('Print failed:', error);
    }
}

module.exports = printThermalPrinter;
