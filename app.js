const express = require('express');
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/clienteRoutes');
const productoRoutes = require('./routes/productoRoutes');
const facturaRoutes = require('./routes/facturaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

require('dotenv').config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch(err => {
    console.error('Error al conectar a MongoDB', err);
});

app.use('/api', clienteRoutes);
app.use('/api', productoRoutes);
app.use('/api', facturaRoutes);
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
