const productController = {};
const Product = require('../models/product.model');

//Todos los products
productController.index = async (req, res) => {
    const match = req.query || {};

    const products = await Product.find(match);

    res.json(products);
}

//Solo el producto con el id especificado
productController.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findOne({ _id });
        res.json(product);
    }
    catch (e) {
        console.log(e);
        res.json(e);
    }

}

//crear
productController.add = async (req, res) => {
    const body = req.body;
    if (!body.marca || !body.modelo || !body.categoria || !body.precio) {
        res.status(402).json({ error: true, errMsg: "faltan datos" });
    }
    else {
        const product = await Product.create(body);
        res.json(product);

    }
}

//put
productController.update = async (req, res) => {
    const { _id } = req.params;
    const { body } = req;

    if (!body.marca || !body.modelo || !body.categoria || !body.precio) {
        res.status(402).json({ error: true, errMsg: "faltan datos" });
    }
    else {
        const rta = await Product.updateOne({ _id }, body);
        res.json(rta);

    }
}

//delete
productController.delete = async (req, res) => {
    const { _id } = req.params;
    const rta = await Product.deleteOne({ _id });
    res.json(rta);

}

module.exports = productController;