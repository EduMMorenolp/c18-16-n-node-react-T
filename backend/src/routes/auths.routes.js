const express = require('express')
const router = express.Router()
const { controllerLogin, controllerRegister } = require('../controllers/authController')

// Ruta para iniciar sesión
router
  .post('/login', controllerLogin)
  .post('/register', controllerRegister)

module.exports = router
