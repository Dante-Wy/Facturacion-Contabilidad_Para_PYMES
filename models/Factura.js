const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    productos: [{
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true }
    }],
    fecha: { type: Date, default: Date.now },
    total: { type: Number, required: true }
});

module.exports = mongoose.model('Factura', FacturaSchema);
