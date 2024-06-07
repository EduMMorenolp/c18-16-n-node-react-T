const express = require('express')
const router = express.Router()
const {
  getAllRolesController,
  getRolesByIdController,
  saveRolesController,
  updateRolesByIdController,
  deleteRolesByIdController
} = require('../controllers/roleController')

router
  .get('/roles', getAllRolesController)
  .get('/roles/:id', getRolesByIdController)
  .post('/roles', saveRolesController)
  .put('/roles/:id', updateRolesByIdController)
  .delete('/roles/:id', deleteRolesByIdController)

module.exports = router
