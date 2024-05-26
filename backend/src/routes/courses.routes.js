const express = require('express')
const router = express.Router()
const { getCouerses, createCouerse } = require('../controllers/coursesController')

// Ruta para Cursos
router
  .get('/couerses', getCouerses)
  .get('/couerse:id', getCouerse)
  .post('/couerse', createCouerse)
  .put('/couerse:id', updateCouerse)
  .delete('/couerse:id', deleteCouerse);

module.exports = router