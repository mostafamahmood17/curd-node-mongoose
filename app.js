const express = require('express');
const logger = require('morgan');
const db = require('./db/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const areaRouter = require('./routes/area');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/area', areaRouter);


module.exports = app;
