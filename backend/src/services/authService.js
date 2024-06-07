const { createAccessToken } = require('../libs/createAccessToken.js')
const prisma = require('../models/prisma')
const bcrypt = require('bcrypt')

// Servicio para iniciar sesión
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
}


module.exports = { serviceLogin, serviceRegister }
