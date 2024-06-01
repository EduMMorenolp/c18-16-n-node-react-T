const {
  getAllParentService,
  // getParentByIdService,
  // createParentService,
  updateParentService
  // deleteParentService
} = require('../services/parentService.js')

const getAllParentController = async (req, res) => {
  try {
    const parents = await getAllParentService()
    return res.status(parents.status).json({ message: parents.message, data: parents.data })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
const getParentByIdController = (req, res) => {

}
const createParentController = (req, res) => {

}
const updateParentController = async (req, res) => {
  const { id, roleId } = req.user
  console.log(req.body)
  // const {} = req.body

  try {
    const parents = await updateParentService({ id, roleId })
    console.log(parents)
  } catch (error) {

  }
}
const deleteParentController = (req, res) => {

}
module.exports = {
  getAllParentController,
  getParentByIdController,
  createParentController,
  updateParentController,
  deleteParentController
}
