const Cliente = require('../models/Cliente');

exports.crearCliente = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        await nuevoCliente.save();
        res.status(201).send(nuevoCliente);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).send(clientes);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).send('Cliente no encontrado');
        res.status(200).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clienteActualizado) return res.status(404).send('Cliente no encontrado');
        res.status(200).send(clienteActualizado);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.eliminarCliente = async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) return res.status(404).send('Cliente no encontrado');
        res.status(200).send(clienteEliminado);
    } catch (err) {
        res.status(500).send(err);
    }
};
