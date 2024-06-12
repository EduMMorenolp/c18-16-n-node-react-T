const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const auths = require('./routes/auths.routes')
const roles = require('./routes/roles.routes')
const teacher = require('./routes/teacher.routes')
const courses = require('./routes/courses.routes')
const parents = require('./routes/parentsRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(morgan('dev')) // Middleware de Morgan para registro de solicitudes HTTP



app.use(express.json())

// Rutas de autenticación
app.use('/api/auth', auths)
app.use('/api', roles)
// Rutas de profesor y cursos
app.use('/api', teacher);
app.use('/api', courses);

//Rutas de padres
app.use('/api', parents);

app.listen(PORT, () => {
  console.log('\n==================================================')
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
  console.log('==================================================\n')
})
