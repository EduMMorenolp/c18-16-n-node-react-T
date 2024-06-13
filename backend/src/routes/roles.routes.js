const express = require('express')
const router = express.Router()
const {
  getAllRolesController,
  getRolesByIdController,
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController,
  findRoleByNameController
} = require('../controllers/roleController')

const verifyAccessToken = require('../middlewares/verifyAccessToken')

router
  .get('/roles', getAllRolesController)
  .get('/roles/:id', getRolesByIdController)
  .get('/roles/:name/role',findRoleByNameController)
  .post('/roles', saveRolesController)
  .put('/roles/:id', verifyAccessToken, updateRolesByIdController)
  .delete('/roles/:id', verifyAccessToken, deleteRolesByIdController)

module.exports = router
