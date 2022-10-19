const userRouter = require('express').Router();
const controller = require('../../controllers/user.controller');

userRouter.get('/me', controller.index);
userRouter.get('/me/cart', controller.cart);
userRouter.put('/me/cart', controller.updateCart);
userRouter.delete('/me/cart', controller.deleteCart);

module.exports = userRouter;