const express = require('express')
const router = express.Router()

const {
  getAllParentController,
  updateParentController
} = require('../controllers/parentController.js')

const verifyAccessToken = require('../middlewares/verifyAccessToken.js')

router
  .get('/parents', verifyAccessToken, getAllParentController)
  .patch('/parents/:id', verifyAccessToken, updateParentController)

module.exports = router
