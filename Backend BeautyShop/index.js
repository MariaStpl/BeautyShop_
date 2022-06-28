const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');
const detailProductRoute = require('./routes/detail_product');
const billRoute = require('./routes/bill');
const cartRoute = require('./routes/cart');
const dashboardRoute = require('./routes/dashboard');
const checkoutRoute = require('./routes/checkout');
const orderRoute = require('./routes/order');
const ordersRoute = require('./routes/orders');
const notificationRoute = require('./routes/notification');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/detail', detailProductRoute);
app.use('/bill', billRoute);
app.use('/cart', cartRoute);
app.use('/dashboard', dashboardRoute);
app.use('/checkout', checkoutRoute);
app.use('/order', orderRoute);
app.use('/orders', ordersRoute);
app.use('/notification', notificationRoute);

module.exports = app;