const prisma = require('../models/prisma.js')
const updateUsersDetails = require('../utils/utils.js')

const getAllStudentService = async () => {
  const parents = await prisma.students.findMany({
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

const updateStudentService = async ({ id, roleId, userDetail, student }) => {
  return await updateUsersDetails({ id, roleId, userDetail, dataModel: student, prisma })
}

module.exports = {
  getAllStudentService,
  updateStudentService
}
