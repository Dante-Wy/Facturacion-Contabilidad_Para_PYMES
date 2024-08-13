const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    direccion: {
        calle: { type: String, required: true },
        ciudad: { type: String, required: true },
        codigoPostal: { type: String, required: true },
        pais: { type: String, required: true }
    },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
