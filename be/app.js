// app.js
import express from 'express';
import http from 'http';
import socket_io from 'socket.io';
import { fetchSudokuData } from './lib/utils';

let app = express();  
const server = http.createServer(app);
let io = socket_io(server);

io.on('connection', function(client) {  
	console.log('Client connected...');

	client.on('join', function(data) {
		console.log(data);
	});
	client.on('fetch-data', function() {
		fetchSudokuData((err, data) => {
			console.log([`fetchSudokuData`, err, {cmd: 'data-fetched',err,data}])
			client.emit('sudoku-event', {cmd: 'data-fetched',err,data});
		})
	});
});

// app.use(express.static(__dirname + '/node_modules'));  
// app.get('/', function(req, res,next) {  
//     res.sendFile(__dirname + '/index.html');
// });

server.listen(4200);  




/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
*/

