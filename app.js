var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db=require('./model/index.model');

var adminRouter = require('./routes/admin.auth.routes');
var usersRouter = require('./routes/users');
var productRouter=require('./routes/product')
var authRouter=require('./routes/auth.routes')
const middleware =require('./middelware/middelware.jwt');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync();
//db.sequelize.sync({force:true});

app.use('/login', adminRouter);
app.use('/users', usersRouter);
app.use('/product',productRouter);
app.use('/auth',authRouter);


module.exports = app;
