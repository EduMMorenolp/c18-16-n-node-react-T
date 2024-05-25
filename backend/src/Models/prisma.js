const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect().catch((err) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
});

module.exports = prisma;