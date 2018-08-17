'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco de dados
//mongoose.connect('mongodb://prmorais:Paulo13@ds018308.mlab.com:18308/nostore', { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/nostore', { useNewUrlParser: true });
mongoose.connect(config.connectionString, { useNewUrlParser: true });

//Carrega os Models
const Product = require('./models/product');
const Costumer = require('./models/customer');
const Order = require('./models/order');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const costumertRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', costumertRoute);
app.use('/orders', orderRoute);

module.exports = app;