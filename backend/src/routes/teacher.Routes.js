const express = require('express');

const router = express.Router();
const {
    getTeachersController,
    getTeacherController,
    registerTeacherController,
    updateTeacherController,
    deleteTeacherController
} = require('../controllers/teacherController');

const verifyToken = require('../middleware/authMiddleware');

router.get('/profesores', verifyToken, getTeachersController);
router.get('/profesor/:id', verifyToken, getTeacherController);
router.post('/profesor', verifyToken, registerTeacherController);
router.put('/profesor/:id', verifyToken, updateTeacherController);
router.delete('/profesor/:id', verifyToken, deleteTeacherController);

module.exports = router;
