const routerApi = require('express').Router();
const loginRouter = require('./api/login.routes');
const userRouter = require('./api/user.routes');
const productRouter = require('./api/product.routes');
const { Authentication } = require('../middlewares/webtoken.middlewares');


routerApi.use('/products', productRouter);
routerApi.use('/users', Authentication, userRouter);
routerApi.use('/login', loginRouter);

module.exports = routerApi;

