const express = require('express')
const router = express.Router()

const {
  getAllParentController,
  getParentByIdController,
  createParentController,
  updateParentController,
  deleteParentController
} = require('../controllers/parentController.js')

const verifyAccessToken = require('../middlewares/verifyAccessToken.js')

router
  .get('/parents', verifyAccessToken, getAllParentController)
  .get('/parents/:id', verifyAccessToken, getParentByIdController)
  .post('/parents', verifyAccessToken, createParentController)
  .patch('/parents/:id', verifyAccessToken, updateParentController)
  .delete('/parents/:id', verifyAccessToken, deleteParentController)

module.exports = router
