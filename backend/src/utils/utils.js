const updateUsersDetails = async ({ id, roleId, userDetail, dataModel, prisma }) => {
  if (userDetail.birthdate) userDetail.birthdate = new Date(userDetail.birthdate).toISOString()
  if (userDetail.phone) userDetail.phone = +userDetail.phone
  if (userDetail.dni) userDetail.dni = +userDetail.dni

  const [{ id: userDetailId }] = await prisma.userDetails.findMany({
    where: { userId: id, roleId }
  })

  const userDetails = await prisma.userDetails.update({
    where: { id: userDetailId },
    data: userDetail
  })

  const nameRole = await typeRole({ prisma, id: roleId })

  if (userDetails) {
    let user = null

    if (nameRole === 'parent') {
      user = await prisma.parents.update({
        where: { id },
        data: dataModel
      })
    } else if (nameRole === 'student') {
      user = await prisma.students.update({
        where: { id },
        data: dataModel
      })
    } else if (nameRole === 'teacher') {
      user = await prisma.teachers.update({
        where: { id },
        data: dataModel
      })
    }

    if (user) {
      return {
        status: 200,
        message: 'Datos del usuario actualizados'
      }
    }
  } else {
    return {
      status: '404',
      message: 'no existen ningun registro de padres'
    }
  }
}

const typeRole = async ({ prisma, id }) => {
  const { name } = await prisma.roles.findUnique({
    where: { id }
  })
  return name
}

module.exports = updateUsersDetails
