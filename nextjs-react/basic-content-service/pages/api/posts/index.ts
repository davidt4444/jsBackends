import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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
  else if (req.method === 'OPTIONS') {
    res.status(200).end();
    // return;
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
