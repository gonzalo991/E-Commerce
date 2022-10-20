const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(URI).
    then(db => console.log('Conexión con la base de datos establecida'))
    .then(err => console.error(err));

module.exports = mongoose;