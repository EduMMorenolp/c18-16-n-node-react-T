const express = require('express');

const router = express.Router();
const {
    getTeachersController,
    getTeacherController,
    registerTeacherController,
    updateTeacherController,
    deleteTeacherController
} = require('../controllers/teacherController.js');

const verifyToken = require('../libs/authMiddleware.js');

router.get('/teachers', verifyToken, getTeachersController);
router.get('/teacher/:id', verifyToken, getTeacherController);
router.post('/teacher', verifyToken, registerTeacherController);
router.put('/teacher/:id', verifyToken, updateTeacherController);
router.delete('/teacher/:id', verifyToken, deleteTeacherController);

module.exports = router;
