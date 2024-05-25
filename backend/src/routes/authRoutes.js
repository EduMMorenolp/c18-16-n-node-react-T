const express = require('express');
const router = express.Router();
const { iniciarSesion, registrarUsuario } = require('../controllers/authController');

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);
router.post('/register', registrarUsuario)

module.exports = router;