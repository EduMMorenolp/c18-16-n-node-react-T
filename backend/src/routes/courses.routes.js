const express = require('express')
const router = express.Router()
const {
  getCouersesController,
  getCouerseController,
  createCouerseController,
  updateCouerseController,
  deleteCouerseController,
} = require('../controllers/coursesController')

// Ruta para Cursos
router
  .get('/couerses', authenticateToken, getCouersesController)
  .get('/couerse:id', authenticateToken, getCouerseController)
  .post('/couerse', authenticateToken, createCouerseController)
  .put('/couerse:id', authenticateToken, updateCouerseController)
  .delete('/couerse:id', authenticateToken, deleteCouerseController);

module.exports = router