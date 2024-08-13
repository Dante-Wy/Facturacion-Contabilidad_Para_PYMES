const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).send(nuevoProducto);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).send(productos);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).send('Producto no encontrado');
        res.status(200).send(producto);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).send('Producto no encontrado');
        res.status(200).send(productoActualizado);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) return res.status(404).send('Producto no encontrado');
        res.status(200).send(productoEliminado);
    } catch (err) {
        res.status(500).send(err);
    }
};
