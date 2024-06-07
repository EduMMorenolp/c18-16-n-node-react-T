const express = require('express')
const router = express.Router()
const { controllerLogin, controllerRegister, controllerUser } = require('../controllers/authController')
const authenticate = require('../middleware/auth')

// Ruta para iniciar sesión
router
  .post('/login', controllerLogin)
  .post('/register', controllerRegister)
  .get('/user',
    authenticate,
    controllerUser
  )

module.exports = router


//https://fullstackopen.com/es/part4/autenticacion_basada_en_token