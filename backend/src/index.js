const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const auths = require('./routes/auths.routes')
const roles = require('./routes/roles.routes')
const teacher = require('./routes/teacher.routes')
const courses = require('./routes/courses.routes')
const homeRouter = require('./routes/home.routes')
const parents = require('./routes/parents.routes.js')
const students = require('./routes/students.routes.js')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(morgan('dev')) // Middleware de Morgan para registro de solicitudes HTTP

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });


app.use(express.json())

// Ruta Inicio
app.use('/', homeRouter);
// Rutas de autenticación
app.use('/api/auth', auths)
app.use('/api', roles)
app.use('/api', parents)
app.use('/api', students)
app.use('/api', teacher)
app.use('/api', courses)

app.listen(PORT, () => {
  console.log('\n==================================================')
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
  console.log('==================================================\n')
})
