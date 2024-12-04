const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
// const cors = require('cors')

// for Restaurant POS (old)
// login
const posuserRouter = require('./routes/pos_restaurant/login/posuser');
const employRouter = require('./routes/pos_restaurant/login/employ');

const poshwsetupRouter = require('./routes/pos_restaurant/config/poshwsetup');

// order
const tableFileRouter = require('./routes/pos_restaurant/order/TableFile');
const balanceRouter = require('./routes/pos_restaurant/order/Balance');
const billNoRouter = require('./routes/pos_restaurant/order/BillNo');
const tSaleRouter = require('./routes/pos_restaurant/order/TSale');
const posProductRouter = require('./routes/pos_restaurant/product/Product');
const optionFileRouter = require('./routes/pos_restaurant/optionfile');
const voidMsgRouter = require('./routes/pos_restaurant/order/VoidMsg');
const creditFileRouter = require('./routes/pos_restaurant/order/CreditFile');
const genQrCode = require('./routes/payment/qrcode_promptpay')

// for New POS apis
const floorplanRouter = require('./routes/floorplan/floorplan');
const floorplanTemplateRouter = require('./routes/floorplan/floorplan_template');
const menuSetupRouter = require('./routes/pos/menu_setup');

// for CRM POS
const memmasterRouter = require('./routes/member/crm/Memmaster');

// for printer thermal
const printerThermalRouter = require('./routes/printer');

// process stock
const processStockRouter = require('./routes/pos_restaurant/stock/processStock')
const stkFileRouter = require('./routes/pos_restaurant/stock/stkfile')
const stcardRouter = require('./routes/pos_restaurant/stock/stcard')

// pos config
const posConfigSetup = require('./routes/pos_restaurant/config/posconfigsetup')
const posHwSetup = require('./routes/pos_restaurant/config/poshwsetup')

const app = express();
// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/floorplan', floorplanRouter);
app.use('/api/floorplan-template', floorplanTemplateRouter);

app.use('/api/posuser', posuserRouter);
app.use('/api/tablefile', tableFileRouter);
app.use('/api/employ', employRouter);
app.use('/api/poshwsetup', poshwsetupRouter);

app.use('/api/pos-product', posProductRouter);
app.use('/api/balance', balanceRouter);
app.use('/api/tablefile', tableFileRouter);
app.use('/api/billno', billNoRouter);
app.use('/api/tsale', tSaleRouter);
app.use('/api/qr-payment', genQrCode);

app.use('/api/menu_setup', menuSetupRouter);
app.use('/api/optionfile', optionFileRouter);
app.use('/api/voidmsg', voidMsgRouter);
app.use('/api/creditfile', creditFileRouter);

app.use('/api/process-stock', processStockRouter);
app.use('/api/stkfile', stkFileRouter);
app.use('/api/stcard', stcardRouter);

app.use('/api/posconfigsetup', posConfigSetup);
app.use('/api/poshwsetup', posHwSetup);

// crm member
app.use('/api/crm/member', memmasterRouter)

// route for test printer
app.use('/api/printer-thermal', printerThermalRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
