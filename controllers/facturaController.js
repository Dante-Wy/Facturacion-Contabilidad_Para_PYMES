const Factura = require('../models/Factura');

exports.crearFactura = async (req, res) => {
    try {
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save();
        res.status(201).send(nuevaFactura);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.obtenerFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find().populate('cliente').populate('productos.producto');
        res.status(200).send(facturas);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.obtenerFacturaPorId = async (req, res) => {
    try {
        const factura = await Factura.findById(req.params.id).populate('cliente').populate('productos.producto');
        if (!factura) return res.status(404).send('Factura no encontrada');
        res.status(200).send(factura);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.actualizarFactura = async (req, res) => {
    try {
        const facturaActualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!facturaActualizada) return res.status(404).send('Factura no encontrada');
        res.status(200).send(facturaActualizada);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.eliminarFactura = async (req, res) => {
    try {
        const facturaEliminada = await Factura.findByIdAndDelete(req.params.id);
        if (!facturaEliminada) return res.status(404).send('Factura no encontrada');
        res.status(200).send(facturaEliminada);
    } catch (err) {
        res.status(500).send(err);
    }
};
