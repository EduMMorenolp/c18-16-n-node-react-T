const { createAccessToken } = require('../middlewares/createAccessToken.js')
const prisma = require('../models/prisma.js')
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

  const token = await createAccessToken(user)

  return {
    status: 200,
    data: {
      ...user,
      token
    }
  }
}

const serviceRegister = async (email, password, roleId) => {
  const userExist = await prisma.users.findUnique({
    where: { email }
  })

  const rolExist = await prisma.roles.findUnique({
    where: { id: roleId }
  })

  if (userExist) {
    return {
      status: 404,
      message: 'El usuario ya existe'
    }
  }

  if (!rolExist) {
    return {
      status: 404,
      message: 'El rol no existe verifique los datos'
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.users.create({
    data: {
      email,
      password: hashedPassword
    }
  })

  await prisma.userDetails.create({
    data: {
      roleId: rolExist.id,
      userId: newUser.id
    }
  })

  if (rolExist.name === 'student') {
    await prisma.students.create({
      data: {
        userId: newUser.id
      }
    })
  } else if (rolExist.name === 'teacher') {
    await prisma.teachers.create({
      data: {
        userId: newUser.id
      }
    })
  } else if (rolExist.name === 'parent') {
    await prisma.parents.create({
      data: {
        userId: newUser.id
      }
    })
  }

  const { password: pass, ...user } = newUser
  const token = await createAccessToken({ id: user.id })

  if (newUser) {
    return {
      status: 201,
      message: 'usuario creado',
      data: {
        ...user,
        token
      }
    }
  }
}

module.exports = { serviceLogin, serviceRegister }
