const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const auths = require('./routes/auths.routes')
const roles = require('./routes/roles.routes')
const teacher = require('./routes/teacher.routes')
const courses = require('./routes/courses.routes')
const parents = require('./routes/parents.routes.js')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev')) // Middleware de Morgan para registro de solicitudes HTTP
app.use(express.json())

// Rutas de autenticación
app.use('/api/auth', auths)
// Ruta para los roles de usuario
app.use('/api', roles)
// Ruta para gestionar padres
app.use('/api', parents)
// Rutas de profesor y cursos
app.use('/api', teacher)
app.use('/api', courses)

app.listen(PORT, () => {
  console.log('\n==================================================')
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
  console.log('==================================================\n')
})
