const productRouter = require('express').Router();
const controller = require('../../controllers/product.controller');

productRouter.get('/', controller.index);
productRouter.get('/:_id', controller.getOne);
productRouter.post('/', controller.add);
productRouter.put('/:_id', controller.update);
productRouter.delete('/:_id', controller.delete);

module.exports = productRouter;