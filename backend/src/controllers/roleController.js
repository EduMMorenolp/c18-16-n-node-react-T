const {
  saveRolesService,
  getAllRolesService,
  getRolesServiceById,
  updateRolesServiceById,
  deleteRolesServiceById
} = require('../services/roleService')

const getAllRolesController = async (req, res) => {
  try {
    const roles = await getAllRolesService()
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getRolesByIdController = async (req, res) => {
  const id = +req.params.id

  try {
    const roles = await getRolesServiceById({ id })
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const saveRolesController = async (req, res) => {
  const { name } = req.body
  try {
    const roles = await saveRolesService({ name })
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const updateRolesByIdController = async (req, res) => {
  const id = +req.params.id
  const { name } = req.body

  try {
    const roles = await updateRolesServiceById({ id, name })
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteRolesByIdController = async (req, res) => {
  const id = +req.params.id
  try {
    const roles = await deleteRolesServiceById({ id })
    return res.status(roles.status).json({ message: roles.message, data: roles.data })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllRolesController,
  getRolesByIdController,
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController
}
