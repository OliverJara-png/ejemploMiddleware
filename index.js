const express = require('express');
const rutaUno = require('./rutaUno');
const rutaDos = require('./rutaDos');

const app = express();

app.use('/ruta1', rutaUno);
app.use('/ruta2', rutaDos);

const port = 4000;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:"+port);
});
