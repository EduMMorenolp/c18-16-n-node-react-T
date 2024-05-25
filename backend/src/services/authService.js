const { createAccessToken } = require('../libs/jwt')
const prisma = require('../models/prisma')
const bcrypt = require('bcrypt')

// Servicio para iniciar sesión
<<<<<<< Updated upstream
const login = async (email, password) => {
    const usuario = await prisma.usuario.findUnique({
        where: { email }
    });

    if (!usuario) {
        throw new Error("Credenciales inválidas");
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

const registro = async (email, password, nombre, role) => {
    const usuarioExistente = await prisma.usuario.findUnique({
        where: { email }
    });

    if (usuarioExistente) {
        throw new Error("El usuario ya existe");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await prisma.usuario.create({
        data: {
            email,
            password: hashedPassword,
            nombre,
            role
        }
    });

    const token = await createAccessToken({ id: nuevoUsuario.id });

    return {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role,
        token: token
    };
=======
const serviceLogin = async (email, password) => {
  const users = await prisma.users.findUnique({
    where:
      { email }
  })

  if (!users) {
    return {
      status: 404,
      message: 'El usuario no existe'
    }
  }

  const { password: pass, ...user } = users

  const passwordMatch = await bcrypt.compare(password, users.password)
  if (!passwordMatch) {
    return {
      status: 401,
      message: 'Credenciales incorrectas'
    }
  }

  const token = await createAccessToken({ id: users.id })

  return {
    status: 200,
    data: {
      ...user,
      token
    }
  }
}

const serviceRegister = async (email, password) => {
  const userExist = await prisma.users.findUnique({
    where: { email }
  })

  if (userExist) {
    return {
      status: 404,
      message: 'El usuario ya existe'
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await prisma.users.create({
    data: {
      email,
      password: hashedPassword
    }
  })

  const { password: pass, ...user } = newUser
  const token = await createAccessToken({ id: user.id })

  return {
    status: 201,
    message: 'usuario creado',
    data: {
      ...user,
      token
    }
  }
>>>>>>> Stashed changes
}

module.exports = { serviceLogin, serviceRegister }
