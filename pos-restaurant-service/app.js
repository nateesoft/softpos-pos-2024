var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// for Restaurant POS (old)
// login
var posuserRouter = require('./routes/pos_restaurant/login/posuser');
var employRouter = require('./routes/pos_restaurant/login/employ');
// order
var tableFileRouter = require('./routes/pos_restaurant/order/TableFile');
var balanceRouter = require('./routes/pos_restaurant/order/Balance');
var billNoRouter = require('./routes/pos_restaurant/order/BillNo');
var tSaleRouter = require('./routes/pos_restaurant/order/TSale');


// for New POS apis
var floorplanRouter = require('./routes/floorplan/floorplan');
var ordersRouter = require('./routes/pos/orders');
var productRouter = require('./routes/pos/product');
var productOrderRouter = require('./routes/pos/product_order');

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posuser', posuserRouter);
app.use('/api/floorplan', floorplanRouter);
app.use('/api/tablefile', tableFileRouter);
app.use('/api/employ', employRouter);

app.use('/api/orders', ordersRouter);
app.use('/api/product', productRouter);
app.use('/api/product_order', productOrderRouter);

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
