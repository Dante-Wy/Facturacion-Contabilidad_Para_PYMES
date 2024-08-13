const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    productos: [{
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    fechaEmision: { type: Date, default: Date.now },
    estado: { type: String, enum: ['Pagada', 'Pendiente', 'Cancelada'], default: 'Pendiente' }
});

module.exports = mongoose.model('Factura', FacturaSchema);
