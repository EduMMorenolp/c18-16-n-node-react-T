const express = require('express');
const morgan = require('morgan');
const authLoginRoutes = require('./routes/authLoginRoutes');

const app = express();
const portLocal = 3000;
const PORT = process.env.PORT || portLocal;

app.use(morgan('dev')); // Middleware de Morgan para registro de solicitudes HTTP
app.use(express.json());

// Rutas de autenticación
app.use('/api', authLoginRoutes);

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
