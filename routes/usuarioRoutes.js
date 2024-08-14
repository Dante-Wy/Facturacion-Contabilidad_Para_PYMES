const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.registrarUsuario);
router.post('/usuarios/login', usuarioController.iniciarSesion);

module.exports = router;
