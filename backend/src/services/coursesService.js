const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCourses = async () => {
    return await prisma.course.findMany({
        include: {
            teacherCourses: true,
            enrollments: true,
        },
    });
};

const getCourse = async (id) => {
    return await prisma.course.findUnique({
        where: { id: parseInt(id) },
        include: {
            teacherCourses: true,
            enrollments: true,
        },
    });
};

const createCourse = async (data) => {
    return await prisma.course.create({
        data,
    });
};

const updateCourse = async (id, data) => {
    return await prisma.course.update({
        where: { id: parseInt(id) },
        data,
    });
};

const deleteCourse = async (id) => {
    return await prisma.course.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
};
