const express = require('express');
const router = express.Router();
const {
  getCoursesController,
  getCourseController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
} = require('../controllers/coursesController');
const verifyToken = require('../libs/authMiddleware.js');

router.get('/courses', verifyToken, getCoursesController);
router.get('/courses/:id', verifyToken, getCourseController);
router.post('/courses', verifyToken, createCourseController);
router.put('/courses/:id', verifyToken, updateCourseController);
router.delete('/courses/:id', verifyToken, deleteCourseController);

module.exports = router;