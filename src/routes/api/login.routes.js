const loginRouter = require('express').Router();
const controller = require('../../controllers/login.controller');


loginRouter('/', controller.login);

module.exports = loginRouter;