const express = require('express')
const router = express.Router()
const { controllerLogin, controllerRegister, controllerUser } = require('../controllers/authController')
const authenticate = require('../middleware/auth')
const handleInputErrors = require('../middleware/validation')
const { body } = require('express-validator')

// Ruta para iniciar sesión
router
  .post('/login', 
  body('email')
    .isEmail().withMessage('E-mail no válido'),
  body('password')
    .notEmpty().withMessage('El password no puede ir vacio'),
  handleInputErrors,
  controllerLogin)
  .post('/register', controllerRegister)
  .get('/user',
    authenticate,
    controllerUser
  )

module.exports = router
