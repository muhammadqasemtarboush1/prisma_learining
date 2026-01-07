import express from 'express';
import { prisma } from './prisma/prismaClient';
const app = express();
// const prisma = new PrismaClient();
app.use(express.json());

app.get('/users',async (_, res) =>  {

  const users = await prisma.user.findMany();

  res.json(users);
});

app.put('/users',async (_, res) =>  {

  const updatedUser = await prisma.user.update({
    where: { email: "olivia@example.com" },
    data: { age: 30 },
  });

  res.json(updatedUser);
});

app.delete('/users',async (_, res) =>  {

  const deletedUsers = await prisma.user.delete({
    where: { email: "olivia@example.com"}
  });

  res.json(deletedUsers);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});