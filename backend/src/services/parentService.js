const prisma = require('../models/prisma.js')
const updateUsersDetails = require('../utils/utils.js')

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

const updateParentService = async ({ id, roleId, userDetail, parent }) => {
  return await updateUsersDetails({ id, roleId, userDetail, dataModel: parent, prisma })
}

module.exports = {
  getAllParentService,
  updateParentService
}
