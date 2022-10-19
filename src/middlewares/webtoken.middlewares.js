const jwt = require("jsonwebtoken");
const JWTkey = "esta es mi clave"

const Authentication = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"]

    if (!token) {
        res.status(401).json({ errMsg: "Authentication Token is required" })
        return
    }

    jwt.verify(token, JWTkey, (err, json) => {
        if (err) {
            res.status(401).json({ errMsg: "Invalid Authentication Token" })
        }
        else {
            req.decodedToken = json
            next()
        }
    })
}

const Authorization = () => { }

module.exports = { Authentication, Authorization };