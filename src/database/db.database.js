const mongoose = require('mongoose');
const URI = 'mongodb://usqiq9g3lya9aq5levnz:I0tfhegbPVfReGi46Yoo@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bcey26m4851cqal?replicaSet=rs0';

mongoose.connect(URI).
    then(db => console.log('Conexión con la base de datos establecida'))
    .then(err => console.error(err));

module.exports = mongoose;