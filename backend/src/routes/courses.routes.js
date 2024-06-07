const express = require('express');
const {
  createCourseController,
  getCoursesController,
  updateCourseController,
  deleteCourseController,
} = require('../controllers/coursesController');
const router = express.Router();

const verifyToken = require('../libs/authMiddleware.js');

router.post('/courses', verifyToken, createCourseController);
router.get('/courses', verifyToken, getCoursesController);
router.put('/courses/:id', verifyToken, updateCourseController);
router.delete('/courses/:id', verifyToken, deleteCourseController);

module.exports = router;