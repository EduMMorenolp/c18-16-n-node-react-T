const {
    deleteTeacher,
    getTeacher,
    getTeachers,
    registerTeacher,
    updateTeacher
} = require('../services/teacherService');

const getTeachersController = async (req, res) => {
    try {
        const teachers = await getTeachers();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getTeacherController = async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await getTeacher(id);
        if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const registerTeacherController = async (req, res) => {
    const { academicDegree, yearOfExperience, hire_date, userId } = req.body;
    try {
        const newTeacher = await registerTeacher({ academicDegree, yearOfExperience, hire_date, userId });
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateTeacherController = async (req, res) => {
    const { id } = req.params;
    const { academicDegree, yearOfExperience, hire_date, userId } = req.body;
    try {
        const updatedTeacher = await updateTeacher(id, { academicDegree, yearOfExperience, hire_date, userId });
        res.json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteTeacherController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteTeacher(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getTeachersController,
    getTeacherController,
    registerTeacherController,
    updateTeacherController,
    deleteTeacherController
};
