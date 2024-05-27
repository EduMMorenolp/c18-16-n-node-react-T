const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCourseWithTeacher = async (courseData, teacherId) => {
    return await prisma.courses.create({
        data: {
            name: courseData.name,
            description: courseData.description,
            teacherCourses: {
                create: {
                    teacherId: teacherId,
                },
            },
        },
        include: {
            teacherCourses: {
                include: {
                    teacher: true,
                },
            },
        },
    });
};

const getCoursesWithTeachers = async () => {
    return await prisma.courses.findMany({
        include: {
            teacherCourses: {
                include: {
                    teacher: true,
                },
            },
        },
    });
};

const updateCourseAndTeachers = async (courseId, courseData, teacherIds) => {
    return await prisma.courses.update({
        where: { id: parseInt(courseId) },
        data: {
            name: courseData.name,
            description: courseData.description,
            teacherCourses: {
                deleteMany: {},
                create: teacherIds.map(teacherId => ({
                    teacherId: teacherId,
                })),
            },
        },
        include: {
            teacherCourses: {
                include: {
                    teacher: true,
                },
            },
        },
    });
};

const deleteCourseWithTeachers = async (courseId) => {
    return await prisma.courses.delete({
        where: { id: parseInt(courseId) },
        include: {
            teacherCourses: true,
        },
    });
};

module.exports = {
    createCourseWithTeacher,
    getCoursesWithTeachers,
    updateCourseAndTeachers,
    deleteCourseWithTeachers,
};
