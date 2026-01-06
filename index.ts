import express from 'express';
import { prisma } from './prisma/prismaClient';
const app = express();
// const prisma = new PrismaClient();
app.use(express.json());

app.get('/users',async (_, res) =>  {

  const users = await prisma.user.findMany();

  res.json(users);
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});