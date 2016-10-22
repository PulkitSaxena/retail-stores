// module imports
var EXPRESS         = require('express');
var PATH            = require('path');
var LOGGER          = require('morgan');
var BODY_PARSER     = require('body-parser');


// app creation
var app = EXPRESS();

// view engine setup (pug engine used)
app.set('views', PATH.join(__dirname, 'views'));
app.set('view engine', 'pug');

// logger for app
app.use(LOGGER('dev'));
app.use(BODY_PARSER.json());
app.use(BODY_PARSER.urlencoded({ extended: false }));
app.use(EXPRESS.static(PATH.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// exporting the app
module.exports = app;
