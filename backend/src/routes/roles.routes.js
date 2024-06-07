const express = require('express')
const router = express.Router()
const {
  getAllRolesController,
  getRolesByIdController,
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController
} = require('../controllers/roleController')

const verifyAccessToken = require('../middlewares/verifyAccessToken')

router
  .get('/roles', verifyAccessToken, getAllRolesController)
  .get('/roles/:id', verifyAccessToken, getRolesByIdController)
  .post('/roles', saveRolesController)
  .put('/roles/:id', verifyAccessToken, updateRolesByIdController)
  .delete('/roles/:id', verifyAccessToken, deleteRolesByIdController)

module.exports = router
