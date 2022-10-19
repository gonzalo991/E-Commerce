const routerApi = require('express').Router();
const loginRouter = require('./api/login.routes');
const userRouter = require('./api/user.routes');
const productRouter = require('./api/product.routes');


routerApi.use('/products', productRouter);
routerApi.use('/users', userRouter);
routerApi.use('/login', loginRouter);

module.exports = routerApi;

