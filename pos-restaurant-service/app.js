var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var cors = require('cors')

// for Restaurant POS (old)
// login
var posuserRouter = require('./routes/pos_restaurant/login/posuser');
var employRouter = require('./routes/pos_restaurant/login/employ');

var poshwsetupRouter = require('./routes/pos_restaurant/config/poshwsetup');

// order
var tableFileRouter = require('./routes/pos_restaurant/order/TableFile');
var balanceRouter = require('./routes/pos_restaurant/order/Balance');
var billNoRouter = require('./routes/pos_restaurant/order/BillNo');
var tSaleRouter = require('./routes/pos_restaurant/order/TSale');
var posProductRouter = require('./routes/pos_restaurant/product/Product');
var optionFileRouter = require('./routes/pos_restaurant/optionfile');
var creditFileRouter = require('./routes/pos_restaurant/config/creditfile');
var genQrCode = require('./routes/payment/qrcode_promptpay')

// for New POS apis
var floorplanRouter = require('./routes/floorplan/floorplan');
var floorplanTemplateRouter = require('./routes/floorplan/floorplan_template');
var menuSetupRouter = require('./routes/pos/menu_setup');
var ordersRouter = require('./routes/pos/orders');
var productRouter = require('./routes/pos/product');
var productOrderRouter = require('./routes/pos/product_order');

// for printer thermal
var printerThermalRouter = require('./routes/printer');

// process stock
var processStockRouter = require('./routes/pos_restaurant/stock/processStock')

var app = express();
app.use(cors())
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

app.use('/api/orders', ordersRouter);
app.use('/api/product', productRouter);
app.use('/api/product_order', productOrderRouter);
app.use('/api/menu_setup', menuSetupRouter);
app.use('/api/optionfile', optionFileRouter);
app.use('/api/creditfile', creditFileRouter);

app.use('/api/process-stock', processStockRouter);

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
