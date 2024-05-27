const express = require('express');
const {
  createCourseController,
  getCoursesController,
  updateCourseController,
  deleteCourseController,
} = require('../controllers/coursesController');
const router = express.Router();

router.post('/courses', createCourseController);
router.get('/courses', getCoursesController);
router.put('/courses/:id', updateCourseController);
router.delete('/courses/:id', deleteCourseController);

module.exports = router;