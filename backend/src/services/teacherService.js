const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTeachers = async () => {
    return await prisma.teachers.findMany({
        include: {
            user: true,
            teacherCourses: true,
        }
    });
}

const getTeacher = async (id) => {
    return await prisma.teachers.findUnique({
        where: { id: parseInt(id) },
        include: {
            user: true,
            teacherCourses: true,
        }
    });
}

const registerTeacher = async ({ academicDegree, yearOfExperience, hire_date, userId }) => {
    return await prisma.teachers.create({
        data: {
            academicDegree,
            yearOfExperience,
            hare_date: new Date(hire_date),
            user: {
                connect: { id: userId }
            }
        }
    });
}

const updateTeacher = async (id, { academicDegree, yearOfExperience, hire_date, userId }) => {
    return await prisma.teachers.update({
        where: { id: parseInt(id) },
        data: {
            academicDegree,
            yearOfExperience,
            hare_date: new Date(hire_date),
            user: {
                connect: { id: userId }
            }
        }
    });
}

const deleteTeacher = async (id) => {
    return await prisma.teachers.delete({
        where: { id: parseInt(id) }
    });
}

module.exports = {
    getTeachers,
    getTeacher,
    registerTeacher,
    updateTeacher,
    deleteTeacher
};
