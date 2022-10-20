const express = require('express');
const app = express();
const cors = require('cors');
//const mongoose = require('mongoose');
const multer = require('multer');
const port = 3000;
const mongoose = require('./database/db.database');


//Decodificadores de multiparfiles,json , cors
app.use(express.json());
app.use(multer().none());
app.use(cors);


//Default Router
app.get("/", (req, res) => {
    res.send("Hola, bienvenid@s a la API")
});

app.use('/api', require('./routes/api.routes'));



app.listen(port, () => console.log(`Servidor funcionando en el puerto http://localhost:${port}!`));