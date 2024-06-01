const { createAccessToken } = require('../middlewares/createAccessToken.js')
const prisma = require('../models/prisma.js')
const bcrypt = require('bcrypt')

// Servicio para iniciar sesión
const serviceLogin = async (email, password) => {
  const users = await prisma.users.findUnique({
    where:
    { email },
    select: {
      userDetail: {
        select: {
          roleId: true
        }
      },
      id: true,
      email: true,
      password: true
    }
  })

  if (!users) {
    return {
      status: 404,
      message: 'El usuario no existe'
    }
  }

  const { password: pass, userDetail, ...user } = users
  const roleId = userDetail[0].roleId

  const passwordMatch = await bcrypt.compare(password, users.password)
  if (!passwordMatch) {
    return {
      status: 401,
      message: 'Credenciales incorrectas'
    }
  }
  console.log(user, roleId)
  const token = await createAccessToken({ ...user, roleId })

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
      roleId,
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

  if (newUser) {
    return {
      status: 201,
      message: 'usuario creado',
      data: { ...user }
    }
  }
}

module.exports = { serviceLogin, serviceRegister }
