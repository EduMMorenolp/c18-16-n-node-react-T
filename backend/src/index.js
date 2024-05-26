const express = require('express')
const morgan = require('morgan')
const auths = require('./routes/auths.routes')
const roles = require('./routes/roles.routes')
const teacher = require('./routes/teacher.Routes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev')) // Middleware de Morgan para registro de solicitudes HTTP
app.use(express.json())

// Rutas de autenticación
app.use('/api/auth', auths)
app.use('/api', roles)
// Rutas de profesor y cursos
app.use('/api', teacher);

app.listen(PORT, () => {
  console.log('\n==================================================')
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
  console.log('==================================================\n')
})
