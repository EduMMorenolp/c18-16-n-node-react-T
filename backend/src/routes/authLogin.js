const express = require('express');
const router = express.Router();
const { iniciarSesion } = require('./controllers/authController');

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);

module.exports = router;