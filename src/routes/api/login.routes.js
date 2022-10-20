const loginRouter = require('express').Router();
const controller = require('../../controllers/login.controller');


loginRouter.post('/', controller.login);

module.exports = loginRouter;