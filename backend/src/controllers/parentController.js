const {
  getAllParentService,
  updateParentService
} = require('../services/parentService.js')

const getAllParentController = async (req, res) => {
  try {
    const parents = await getAllParentService()
    return res.status(parents.status).json({ message: parents.message, data: parents.data })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateParentController = async (req, res) => {
  const { roleId } = req.user
  const id = +req.params.id
  const { userDetail, parent } = req.body

  try {
    const parents = await updateParentService({ id, roleId, userDetail, parent })
    return res.status(parents.status).json({ message: parents.message, data: parents.data })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getAllParentController,
  updateParentController
}
