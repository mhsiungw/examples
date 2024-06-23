const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const TODOSs = [
  {
    id: "1",
    content: "Buy groceries",
    done: false,
  },
  {
    id: "2",
    content: "Complete React project",
    done: true,
  },
  {
    id: "3",
    content: "Schedule dentist appointment",
    done: false,
  },
  {
    id: "4",
    content: "Read a book",
    done: true,
  },
  {
    id: "5",
    content: "Exercise for 30 minutes",
    done: false,
  },
  {
    id: "6",
    content: "Call mom",
    done: true,
  },
  {
    id: "7",
    content: "Write a blog post",
    done: false,
  },
  {
    id: "8",
    content: "Prepare dinner",
    done: true,
  },
  {
    id: "9",
    content: "Plan weekend trip",
    done: false,
  },
  {
    id: "10",
    content: "Updateeeeee resumeeee",
    done: true,
  },
];

async function main() {
  await Promise.all(
    TODOS.map(({ id, content, done }) =>
      prisma.todo.upsert({
        where: { id },
        update: {
          content,
        },
        create: {
          id,
          content,
          done,
        },
      })
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("e", e);
    await prisma.$disconnect();
    process.exit(1);
  });
