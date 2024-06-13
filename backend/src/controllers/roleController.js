const prisma = require('../models/prisma')
const { saveRolesService, getAllRolesService } = require('../services/roleService')

const getAllRolesController = async (req, res) => {
  try {
    const roles = await getAllRolesService()
    console.log(roles)
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getRolesByIdController = async (req, res) => {

}

async function findRoleByNameController(req, res) {
  const { name } = req.params;
  try {
    const getRole = await prisma.roles.findUnique({
      where: {
        name: name,
      },
    });
    res.json(getRole);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al buscar el tipo de usuario' });
  }
}


const saveRolesController = async (req, res) => {
  try {
    const { name } = req.body
    const roles = await saveRolesService({ name })
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const updateRolesByIdController = async (req, res) => {

}
const deleteRolesByIdController = async (req, res) => {

}

module.exports = {
  getAllRolesController,
  getRolesByIdController,
  findRoleByNameController,
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController
}
