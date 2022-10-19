const userController = {};
const User = require('../models/user.model');

userController.index = async (req, res) => {
    //Como recibo JWT -> conozco el username
    //Find basado en el username
    const _id = req.decodedToken.userId
    const user = await User.findOne({ _id }, { _id: 0, password: 0 })
    res.json(user)
}

userController.cart = async (req, res) => {
    const _id = req.decodedToken.userId
    const user = await User.findOne({ _id }, { _id: 0, cart: 1 })
    res.json(user)
}

userController.updateCart = async (req, res) => {
    //Update bazado en el username -> actualizo el carrito
    const _id = req.decodedToken.userId
    const rta = await Product.updateOne({ _id }, { cart: req.body })
    res.json(rta)
}

userController.deleteCart = async (req, res) => {
    //traunca el carrito a 0
    const { _id } = req.params
    const { body } = req

    if (!body.marca || !body.modelo || !body.categoria || !body.precio) {
        res.status(402).json({ error: true, errMsg: "faltan datos" })
    }
    else {
        const rta = await Product.updateOne({ _id }, body)
        res.json(rta)

    }
}

module.exports = userController;