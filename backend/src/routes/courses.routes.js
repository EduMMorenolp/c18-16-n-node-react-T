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

router.get('/', verifyToken, getCoursesController);
router.get('/:id', verifyToken, getCourseController);
router.post('/', verifyToken, createCourseController);
router.put('/:id', verifyToken, updateCourseController);
router.delete('/:id', verifyToken, deleteCourseController);

module.exports = router;