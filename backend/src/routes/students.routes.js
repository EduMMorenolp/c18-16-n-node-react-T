const express = require('express')
const router = express.Router()

const {
  getAllStudentController,
  updateStudentController
} = require('../controllers/studentController.js')

const verifyAccessToken = require('../middlewares/verifyAccessToken.js')

router
  .get('/students', verifyAccessToken, getAllStudentController)
  .patch('/students/:id', verifyAccessToken, updateStudentController)

module.exports = router
