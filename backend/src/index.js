const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const portLocal = 3000;
const PORT = process.env.PORT || portLocal;

app.use(express.json());

// Inicio
app.get('/', (req, res) => {
  console.log("Inicio")
  res.send('<div><h1>Inicio</h1></div>');
})

// Ruta de ejemplo para obtener todos los alumnos
app.get('/alumnos', async (req, res) => {
  const alumnos = await prisma.estudiante.findMany();
  res.json(alumnos);
});


app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
