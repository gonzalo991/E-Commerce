const mongoose = require('mongoose');

const {Schema, model} = mongoose

const productSchema = new Schema({
    "id": Number,
    "modelo": String,
    "marca": String,
    "categoria": String,
    "precio": Number
})


const Product = model("Product", productSchema)

module.exports = Product;
