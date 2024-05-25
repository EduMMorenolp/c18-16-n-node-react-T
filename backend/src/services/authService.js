const { createAccessToken } = require('../libs/jwt');
const prisma = require('../models/prisma');
const bcrypt = require('bcrypt');

// Servicio para iniciar sesión
const login = async (email, password) => {
  const usuario = await prisma.users.findUnique({
    where:
      { email }
  });

  if (!usuario) {
    throw new Error("El usuario no existe");
  }

  const passwordMatch = await bcrypt.compare(password, usuario.password);
  if (!passwordMatch) {
    throw new Error("Credenciales inválidas");
  }

  const token = await createAccessToken({ id: usuario.id });

  return {
    id: usuario.id,
    nombre: usuario.nombre,
    email: usuario.email,
    token: token
  };
};

const registro = async (email, password) => {
  const usuarioExistente = await prisma.users.findUnique({
    where: { email }
  });

  if (usuarioExistente) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const nuevoUsuario = await prisma.users.create({
    data: {
      email,
      password: hashedPassword
    }
  });

  console.log(nuevoUsuario)

  const token = await createAccessToken({ id: nuevoUsuario.id });

  return {
    id: nuevoUsuario.id,
    nombre: nuevoUsuario.nombre,
    email: nuevoUsuario.email,
    token: token
  };
}

module.exports = { login, registro };
