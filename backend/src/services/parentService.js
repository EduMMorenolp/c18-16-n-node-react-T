const prisma = require('../models/prisma.js')

const getAllParentService = async () => {
  const parents = await prisma.parents.findMany({
    include: {
      user: {
        include: {
          userDetail: true
        }
      }
    }
  })

  if (!parents) {
    return {
      status: '404',
      message: 'no existen ningun registro de padres'
    }
  }

  return {
    status: 200,
    data: parents
  }
}
const getParentByIdService = () => {

}
const createParentService = () => {

}
const updateParentService = async ({ userId, roleId }) => {
// actualizar el userDetail y parent table
}
const deleteParentService = () => {

}

module.exports = {
  getAllParentService,
  getParentByIdService,
  createParentService,
  updateParentService,
  deleteParentService
}
