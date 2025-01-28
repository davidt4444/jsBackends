import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  const postId = Number(id);
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } 
  else if (req.method === 'POST') {
    const { title, content, author, category, isPublished } = req.body;
    const post = await prisma.post.create({
      data: {
        title, content, author, category, isPublished
      }
    });
    res.status(201).json(post);
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
