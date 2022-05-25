const express = require('express');
const cors = require('cors');
require('dotenv').config();
const{getConnection} = require('./db/db-connection-mongo');
const Marca = require('./modelos/Marca');
const EstadoEquipo = require('./modelos/EstadoEquipo');
const TipoEquipo = require('./modelos/TipoEquipo');
const Usuario = require('./modelos/Usuario');


const app = express();

getConnection();

app.use(express.json());

const inventario = require('./rutas/inventarios');
app.use('/inventario', inventario);

const usuario = require('./rutas/usuario');
app.use('/usuario', usuario);

const estadoEquipo = require('./rutas/estadoEquipo');
app.use('/estadoEquipo', estadoEquipo );

const marca = require('./rutas/marca');
app.use('/marca', marca);

const tipoEquipo = require('./rutas/tipoEquipo');
app.use('/tipoEquipo', tipoEquipo);


app.listen(3000, function(){
    console.log('Aplicacion corriendo en el puerto 3000');
});