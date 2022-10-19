const loginController = {}
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const JWTkey = "esta es mi clave"

loginController.login = async (req, res) => {

    const { username, password } = req.body //obtengio los valores que envía el form de login

    const user = await User.findOne({ username }); // Busco en la db un usuario que coincida

    if (user && password == user.password) { // Chequeo si la contraseña coincida con la guardada previamente, si es así entonces retorno los datos del usuario

        const payload = { userId: user._id };
        const token = jwt.sign(payload, JWTkey, { expiresIn: "7d" });

        const sessionInfo = { token, username, name: user.name };

        res.json({ login: true, sessionInfo, cart: user.cart });
    } else {
        res.status(401).json({ login: false, errMsg: "Bad credentials" })//Si falla retorno un status 401 y un json de error
    }
}

module.exports = loginController;