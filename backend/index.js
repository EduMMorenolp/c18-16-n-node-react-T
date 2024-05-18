const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const portLocal = 3000;

app.use(express.json());

// Ruta de ejemplo para obtener todos los estudiantes
app.get('/estudiantes', async (req, res) => {
  const estudiantes = await prisma.estudiante.findMany();
  res.json(estudiantes);
});

// Ruta de ejemplo para crear un nuevo estudiante
app.post('/estudiantes', async (req, res) => {
  const { nombre, email, historial } = req.body;
  const estudiante = await prisma.estudiante.create({
    data: {
      nombre,
      email,
      historial,
    },
  });
  res.json(estudiante);
});

const PORT = process.env.PORT || portLocal;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});