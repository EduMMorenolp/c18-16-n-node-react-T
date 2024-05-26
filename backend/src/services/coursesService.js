const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCourses = async () => {
    return await prisma.courses.findMany({
        include: {
            teacherCourses: true,
            enrollments: true,
        },
    });
};

const getCourse = async (id) => {
    return await prisma.courses.findUnique({
        where: { id: parseInt(id) },
        include: {
            teacherCourses: true,
            enrollments: true,
        },
    });
};

const createCourse = async (data) => {
    return await prisma.courses.create({
        data,
    });
};

const updateCourse = async (id, data) => {
    console.log(id, data)
    return await prisma.courses.update({
        where: { id: parseInt(id) },
        data,
    });
};

const deleteCourse = async (id) => {
    return await prisma.courses.delete({
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
