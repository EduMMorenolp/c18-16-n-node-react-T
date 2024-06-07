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
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController
}
