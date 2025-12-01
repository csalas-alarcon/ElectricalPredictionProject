'use strict';

const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const Producto = require('./odels/producto');
const productoController = require('./controllers/productoController');
const app = express();
const PORT = 8080;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/producto')
.then(() => {
    console.log('Conexión a la base de datos extablecida');
}).catch (err => {
    console.error('Error de conexión a la base de datos:', err);
});

app.use(express.json());


// Definir las rutas y asignarles los metodos del controlador
app.get('/api/producto/:id', productoController.obtenerProductoporId);
app.post('/api/producto', productoController.crearProducto);
app.put('/api/producto/:id', productoController.actualizarProducto);

app.listen(PORT, () => {
    console.log(`API REST ejectuándose en http://localhost:${PORT}`);
});