const prisma = require('../models/prisma.js')

const getAllRolesService = async () => {
  const roles = await prisma.roles.findMany()

  if (!roles) {
    return {
      status: 404,
      message: 'No existe ningun rol'
    }
  }

  return {
    status: 200,
    data: [...roles]
  }
}
const saveRolesService = async ({ name }) => {
  const roles = await prisma.role.findUnique({
    where: { name }
  })

  if (roles) {
    return {
      status: 404,
      message: 'El rol ya existe'
    }
  }
  const newRol = await prisma.role.create({
    data: { name }
  })
  return {
    status: 201,
    data: newRol
  }
}

module.exports = { saveRolesService, getAllRolesService }
