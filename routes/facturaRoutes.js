const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

router.post('/facturas', facturaController.crearFactura);
router.get('/facturas', facturaController.obtenerFacturas);
router.get('/facturas/:id', facturaController.obtenerFacturaPorId);
router.put('/facturas/:id', facturaController.actualizarFactura);
router.delete('/facturas/:id', facturaController.eliminarFactura);

module.exports = router;
