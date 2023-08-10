require('./config/mongoose');
const express = require('express');
const path = require('path');
const app = express();
const productRouterV3 = require('./app/product_v1/routes');
const productRouterV4 = require('./app/product_v2/routes');
const logger = require('morgan');


app.use(logger());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v3', productRouterV3)
app.use('/api/v4', productRouterV4)
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        message: 'resource' + req.originalUrl + 'not found'
    })
})
app.listen(3000, () => console.log('server: http://localhost:3000'))