const { PrismaClient } = require('@prisma/client');
const { todos } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.todo.deleteMany();
    console.log('Deleted records in todo table');

    await prisma.todo.createMany({
      data: todos,
    });
    console.log('Added todos data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
