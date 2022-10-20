const mongoose = require('mongoose');

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: String,
    username: String,
    email: { type: String, match: /^[\w_\-\.]{2,}@\w+(\.\w+){1,3}$/ },
    password: String,
    bornDate: Date,
    cart: Object
})


const User = model("User", userSchema)

module.exports = User;