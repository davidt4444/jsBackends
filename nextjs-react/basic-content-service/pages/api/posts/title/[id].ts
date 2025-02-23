import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { id } = req.query;
  const postTitle = id+"";
  if (req.method === 'GET') {
    const post = await prisma.post.findFirst(
      {
        where: { 
          title: {
            contains:postTitle
          } 
        },
      }
    );
    res.json(post);
  } 
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
