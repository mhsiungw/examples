const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();

  res.json(todos);
});

app.listen(3000, () => {
  console.log("The server is listening on 3000...");
});
