const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        // Verificar si el usuario ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) return res.status(400).send('El usuario ya está registrado.');

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear el nuevo usuario
        usuario = new Usuario({
            nombre,
            email,
            password: hashedPassword,
            rol
        });

        await usuario.save();
        res.status(201).send(usuario);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar el usuario por su email
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(400).send('Usuario o contraseña incorrectos.');

        // Verificar la contraseña
        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) return res.status(400).send('Usuario o contraseña incorrectos.');

        res.status(200).send('Inicio de sesión exitoso.');
    } catch (err) {
        res.status(500).send(err);
    }
};
