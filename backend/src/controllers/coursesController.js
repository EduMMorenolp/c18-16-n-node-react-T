const { createCourse, deleteCourse, getCourse, getCourses, updateCourse } = require('../services/coursesService');

const getCoursesController = async (req, res) => {
    try {
        const courses = await getCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await getCourse(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCourseController = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCourse = await createCourse({ name, description });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedCourse = await updateCourse(id, { name, description });
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCourse(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCoursesController,
    getCourseController,
    createCourseController,
    updateCourseController,
    deleteCourseController,
};
