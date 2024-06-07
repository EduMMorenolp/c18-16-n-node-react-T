const {
    createCourseWithTeacher,
    getCoursesWithTeachers,
    updateCourseAndTeachers,
    deleteCourseWithTeachers,
} = require('../services/coursesService');

const createCourseController = async (req, res) => {
    try {
        const newCourse = await createCourseWithTeacher(req.body, req.body.teacherId);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCoursesController = async (req, res) => {
    try {
        const courses = await getCoursesWithTeachers();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCourseController = async (req, res) => {
    try {
        const updatedCourse = await updateCourseAndTeachers(req.params.id, req.body, req.body.teacherIds);
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCourseController = async (req, res) => {
    try {
        await deleteCourseWithTeachers(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourseController,
    getCoursesController,
    updateCourseController,
    deleteCourseController,
};
