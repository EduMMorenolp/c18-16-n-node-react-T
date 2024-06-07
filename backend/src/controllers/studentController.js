const {
  getAllStudentService,
  updateStudentService
} = require('../services/studentService.js')

const getAllStudentController = async (req, res) => {
  try {
    const parents = await getAllStudentService()
    return res.status(parents.status).json({ message: parents.message, data: parents.data })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateStudentController = async (req, res) => {
  const { roleId } = req.user
  const id = +req.params.id
  const { userDetail, student } = req.body

  try {
    const parents = await updateStudentService({ id, roleId, userDetail, student })
    return res.status(parents.status).json({ message: parents.message, data: parents.data })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getAllStudentController,
  updateStudentController
}
